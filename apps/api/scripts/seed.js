/**
 * Database Seed Script for GOJI2027
 * Run: node scripts/seed.js
 */

const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Seed data
const lgas = [
  { name: 'Damaturu', type: 'lga', target_voters: 15000 },
  { name: 'Gujba', type: 'lga', target_voters: 12000 },
  { name: 'Gulani', type: 'lga', target_voters: 10000 },
  { name: 'Busari', type: 'lga', target_voters: 8000 },
  { name: 'Bursari', type: 'lga', target_voters: 7500 },
  { name: 'Yunusari', type: 'lga', target_voters: 6500 },
];

const teamMembers = [
  {
    email: 'admin@goji2027.com',
    password: 'admin123',
    name: 'System Admin',
    role: 'Admin',
    lga: 'Damaturu',
  },
  {
    email: 'ahmed@goji2027.com',
    password: 'agent123',
    name: 'Ahmed Mohammed',
    role: 'Field Coordinator',
    lga: 'Damaturu',
    phone: '+234 800 111 0001',
  },
  {
    email: 'hassan@goji2027.com',
    password: 'agent123',
    name: 'Hassan Ibrahim',
    role: 'Field Agent',
    lga: 'Gujba',
    phone: '+234 800 111 0002',
  },
  {
    email: 'maryam@goji2027.com',
    password: 'agent123',
    name: 'Maryam Yusuf',
    role: 'Field Agent',
    lga: 'Gulani',
    phone: '+234 800 111 0003',
  },
  {
    email: 'fatima@goji2027.com',
    password: 'agent123',
    name: 'Fatima Abdullahi',
    role: 'Data Entry',
    lga: 'Damaturu',
    phone: '+234 800 111 0004',
  },
];

const messageTemplates = [
  {
    title: 'Campaign Update',
    message: 'As-salamu alaykum! Join us this Saturday for a community town hall meeting at Damaturu Central. Your voice matters!',
    type: 'announcement',
    sent_count: 1247,
  },
  {
    title: 'Voter Registration',
    message: 'Reminder: PVC collection is ongoing at your local INEC office. Remember to bring a valid ID.',
    type: 'reminder',
    sent_count: 893,
  },
  {
    title: 'Volunteer Call',
    message: 'Thank you for your interest in volunteering! We will contact you soon with more details.',
    type: 'response',
    sent_count: 234,
  },
];

const newsArticles = [
  {
    title: 'Alhaji Abba Goji Announces Senate Bid for Yobe East',
    summary: 'A new vision for Zone B focused on education, healthcare, and economic empowerment.',
    content: 'Full article content here...',
    category: 'Campaign',
    author: 'Campaign Team',
    is_published: true,
  },
  {
    title: 'Community Town Hall Meeting Scheduled',
    summary: 'Join us on Saturday for an interactive session with community leaders.',
    content: 'Full article content here...',
    category: 'Events',
    author: 'Campaign Team',
    is_published: true,
  },
];

const events = [
  {
    title: 'Zone B Community Town Hall',
    description: 'An interactive session with community leaders and stakeholders to discuss priorities for Yobe East.',
    location: 'Damaturu Central',
    event_date: '2024-04-15',
    event_time: '14:00',
    registration_required: true,
    max_attendees: 500,
    is_public: true,
  },
  {
    title: 'Youth Empowerment Workshop',
    description: 'Skills training and entrepreneurship session for young people in Zone B.',
    location: 'Gujba LGA Secretariat',
    event_date: '2024-04-22',
    event_time: '10:00',
    registration_required: true,
    max_attendees: 200,
    is_public: true,
  },
];

async function seed() {
  console.log('Starting database seed...\n');

  // Seed LGAs
  console.log('Seeding LGAs...');
  for (const lga of lgas) {
    const { error } = await supabase
      .from('locations')
      .upsert({ ...lga, created_at: new Date().toISOString() });
    if (error) console.error('Error seeding LGA:', error.message);
  }

  // Seed team members
  console.log('Seeding team members...');
  for (const member of teamMembers) {
    const passwordHash = await bcrypt.hash(member.password, 10);
    const { error } = await supabase
      .from('team_members')
      .upsert({
        ...member,
        password_hash: passwordHash,
        status: 'active',
        voters_contacted: Math.floor(Math.random() * 500),
        created_at: new Date().toISOString(),
      });
    if (error) console.error('Error seeding team member:', error.message);
  }

  // Seed message templates
  console.log('Seeding message templates...');
  for (const template of messageTemplates) {
    const { error } = await supabase
      .from('message_templates')
      .upsert({ ...template, created_at: new Date().toISOString() });
    if (error) console.error('Error seeding template:', error.message);
  }

  // Seed news
  console.log('Seeding news articles...');
  for (const article of newsArticles) {
    const { error } = await supabase
      .from('news')
      .upsert({
        ...article,
        published_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      });
    if (error) console.error('Error seeding news:', error.message);
  }

  // Seed events
  console.log('Seeding events...');
  for (const event of events) {
    const { error } = await supabase
      .from('events')
      .upsert({ ...event, created_at: new Date().toISOString() });
    if (error) console.error('Error seeding event:', error.message);
  }

  // Seed sample voters
  console.log('Seeding sample voters...');
  const sampleVoters = [
    { name: 'Ibrahim Abdullahi', phone: '+234 800 000 0001', lga: 'Damaturu', ward: 'Damaturu Central', polling_unit: '001', priority: 'high', sentiment: 'positive' },
    { name: 'Fatima Mohammed', phone: '+234 800 000 0002', lga: 'Gujba', ward: 'Buni Yadi', polling_unit: '004', priority: 'medium', sentiment: 'positive' },
    { name: 'Musa Yusuf', phone: '+234 800 000 0003', lga: 'Damaturu', ward: 'Damaturu East', polling_unit: '003', priority: 'low', sentiment: 'neutral' },
    { name: 'Amina Hassan', phone: '+234 800 000 0004', lga: 'Gulani', ward: 'Gulani', polling_unit: '006', priority: 'high', sentiment: 'positive' },
    { name: 'Abubakar Suleiman', phone: '+234 800 000 0005', lga: 'Gujba', ward: 'Gujba', polling_unit: '005', priority: 'medium', sentiment: 'neutral' },
  ];

  for (const voter of sampleVoters) {
    const { error } = await supabase
      .from('voters')
      .upsert({
        ...voter,
        contacted: Math.random() > 0.3,
        tags: [],
        created_at: new Date().toISOString(),
      });
    if (error) console.error('Error seeding voter:', error.message);
  }

  console.log('\nSeed completed!');
  console.log('\nLogin credentials:');
  console.log('Admin: admin@goji2027.com / admin123');
  console.log('Field Coordinator: ahmed@goji2027.com / agent123');
}

seed().catch(console.error);
