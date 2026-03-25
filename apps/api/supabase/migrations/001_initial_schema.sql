-- GOJI2027 Database Schema
-- For Supabase PostgreSQL

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Users/Team Members Table
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL CHECK (role IN ('Field Coordinator', 'Field Agent', 'Data Entry', 'Admin')),
    lga TEXT NOT NULL,
    ward TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'offline', 'suspended')),
    last_active TIMESTAMPTZ DEFAULT NOW(),
    voters_contacted INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Voters Table
CREATE TABLE IF NOT EXISTS public.voters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    lga TEXT NOT NULL,
    ward TEXT NOT NULL,
    polling_unit TEXT NOT NULL,
    polling_unit_code TEXT,
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('high', 'medium', 'low')),
    sentiment TEXT DEFAULT 'neutral' CHECK (sentiment IN ('positive', 'neutral', 'negative')),
    contacted BOOLEAN DEFAULT FALSE,
    contact_date TIMESTAMPTZ,
    notes TEXT,
    tags TEXT[] DEFAULT '{}',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    date_of_birth DATE,
    occupation TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Interactions Table
CREATE TABLE IF NOT EXISTS public.interactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    voter_id UUID NOT NULL REFERENCES public.voters(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('phone', 'visit', 'message')),
    outcome TEXT NOT NULL CHECK (outcome IN ('positive', 'neutral', 'negative')),
    notes TEXT,
    agent_id UUID NOT NULL REFERENCES public.team_members(id),
    lga TEXT NOT NULL,
    ward TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Campaigns/Messaging Table
CREATE TABLE IF NOT EXISTS public.campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('whatsapp', 'sms')),
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'sending', 'completed', 'failed')),
    message TEXT NOT NULL,
    sent_count INTEGER DEFAULT 0,
    total_count INTEGER NOT NULL,
    scheduled_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_by UUID REFERENCES public.team_members(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Message Templates Table
CREATE TABLE IF NOT EXISTS public.message_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'announcement' CHECK (type IN ('announcement', 'reminder', 'response')),
    sent_count INTEGER DEFAULT 0,
    created_by UUID REFERENCES public.team_members(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- News/Content Table
CREATE TABLE IF NOT EXISTS public.news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    category TEXT NOT NULL,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    author TEXT NOT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events Table
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    image TEXT,
    registration_required BOOLEAN DEFAULT FALSE,
    max_attendees INTEGER,
    registered_count INTEGER DEFAULT 0,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event Registrations Table
CREATE TABLE IF NOT EXISTS public.event_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    lga TEXT,
    ward TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(event_id, phone)
);

-- Locations Hierarchy (LGA -> Ward -> Polling Unit)
CREATE TABLE IF NOT EXISTS public.locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('lga', 'ward', 'polling_unit')),
    parent_id UUID REFERENCES public.locations(id),
    code TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    target_voters INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics/Metrics Table (for caching aggregated data)
CREATE TABLE IF NOT EXISTS public.daily_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date DATE NOT NULL UNIQUE,
    calls INTEGER DEFAULT 0,
    visits INTEGER DEFAULT 0,
    messages INTEGER DEFAULT 0,
    new_voters INTEGER DEFAULT 0,
    contacted_voters INTEGER DEFAULT 0,
    positive_sentiment INTEGER DEFAULT 0,
    neutral_sentiment INTEGER DEFAULT 0,
    negative_sentiment INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit Log Table
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.team_members(id),
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID,
    old_data JSONB,
    new_data JSONB,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_voters_lga ON public.voters(lga);
CREATE INDEX IF NOT EXISTS idx_voters_ward ON public.voters(ward);
CREATE INDEX IF NOT EXISTS idx_voters_polling_unit ON public.voters(polling_unit);
CREATE INDEX IF NOT EXISTS idx_voters_priority ON public.voters(priority);
CREATE INDEX IF NOT EXISTS idx_voters_contacted ON public.voters(contacted);
CREATE INDEX IF NOT EXISTS idx_interactions_voter_id ON public.interactions(voter_id);
CREATE INDEX IF NOT EXISTS idx_interactions_agent_id ON public.interactions(agent_id);
CREATE INDEX IF NOT EXISTS idx_interactions_created_at ON public.interactions(created_at);
CREATE INDEX IF NOT EXISTS idx_interactions_lga ON public.interactions(lga);
CREATE INDEX IF NOT EXISTS idx_team_members_lga ON public.team_members(lga);
CREATE INDEX IF NOT EXISTS idx_team_members_role ON public.team_members(role);
CREATE INDEX IF NOT EXISTS idx_campaigns_status ON public.campaigns(status);
CREATE INDEX IF NOT EXISTS idx_locations_type ON public.locations(type);
CREATE INDEX IF NOT EXISTS idx_locations_parent ON public.locations(parent_id);

-- Create views for common queries
CREATE OR REPLACE VIEW public.voter_stats_by_lga AS
SELECT
    lga,
    COUNT(*) as total_voters,
    SUM(CASE WHEN contacted THEN 1 ELSE 0 END) as contacted_count,
    SUM(CASE WHEN priority = 'high' THEN 1 ELSE 0 END) as high_priority_count,
    SUM(CASE WHEN sentiment = 'positive' THEN 1 ELSE 0 END) as positive_count,
    SUM(CASE WHEN sentiment = 'neutral' THEN 1 ELSE 0 END) as neutral_count,
    SUM(CASE WHEN sentiment = 'negative' THEN 1 ELSE 0 END) as negative_count
FROM public.voters
GROUP BY lga;

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_voters_updated_at BEFORE UPDATE ON public.voters
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON public.team_members
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.voters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.message_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies (basic - allow all for now, tighten in production)
CREATE POLICY "Allow all" ON public.voters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.interactions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.team_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.campaigns FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.message_templates FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.events FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON public.event_registrations FOR ALL USING (true) WITH CHECK (true);
