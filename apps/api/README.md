# GOJI2027 Backend API

Backend API for the URADI360 Campaign Management Platform.

## Overview

This Next.js application provides RESTful API endpoints for:
- Authentication (JWT-based)
- Voter management
- Interaction logging
- Analytics
- Team management
- Communications (SMS/WhatsApp)
- Content management (News/Events)
- Location data (LGA/Ward/Polling Unit hierarchy)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL + PostGIS)
- **Authentication**: JWT + bcrypt
- **Language**: TypeScript
- **API**: RESTful JSON

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=your-jwt-secret
```

### 3. Database Setup

Run the migration file in Supabase SQL Editor:

```bash
# supabase/migrations/001_initial_schema.sql
```

Or use Supabase CLI:

```bash
supabase db push
```

### 4. Seed Data

```bash
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh access token

### Voters
- `GET /api/voters` - List voters (with filters)
- `POST /api/voters` - Create voter
- `GET /api/voters/:id` - Get voter details
- `PATCH /api/voters/:id` - Update voter
- `DELETE /api/voters/:id` - Delete voter
- `POST /api/voters/bulk` - Bulk import voters
- `GET /api/voters/stats` - Get voter statistics

### Interactions
- `GET /api/interactions` - List interactions
- `POST /api/interactions` - Log interaction
- `GET /api/interactions/recent` - Get recent interactions
- `GET /api/interactions/stats` - Get interaction statistics

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics
- `GET /api/analytics/sentiment` - Sentiment analysis
- `GET /api/analytics/lga` - LGA performance stats
- `GET /api/analytics/activity` - Activity data (7 days)
- `GET /api/analytics/topics` - Top discussion topics

### Team
- `GET /api/team` - List team members
- `POST /api/team` - Create team member
- `GET /api/team/:id` - Get team member
- `PATCH /api/team/:id` - Update team member
- `DELETE /api/team/:id` - Delete team member
- `GET /api/team/stats` - Team statistics

### Communications
- `GET /api/communications/templates` - Message templates
- `POST /api/communications/templates` - Create template
- `GET /api/communications/campaigns` - List campaigns
- `POST /api/communications/campaigns` - Create campaign
- `POST /api/communications/send` - Send messages
- `GET /api/communications/stats` - Communication stats

### Locations
- `GET /api/locations/lgas` - List LGAs
- `GET /api/locations/coverage` - Coverage statistics
- `GET /api/locations/search?q=` - Search locations

### Content (Public)
- `GET /api/content/news` - List news articles
- `GET /api/content/news/:id` - Get article
- `GET /api/content/events` - List events
- `POST /api/content/events/:id` - Register for event

## Authentication

All endpoints (except public content) require Bearer token:

```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Database Schema

See `supabase/migrations/001_initial_schema.sql` for complete schema.

Key tables:
- `team_members` - Users and authentication
- `voters` - Voter database
- `interactions` - Contact history
- `locations` - Geographic hierarchy
- `campaigns` - Messaging campaigns
- `news` - News articles
- `events` - Campaign events

## Deployment

### Vercel

```bash
vercel --prod
```

### Docker

```bash
docker build -t goji2027-api .
docker run -p 3001:3001 goji2027-api
```

## Development

### Add New API Route

1. Create file: `src/app/api/resource/route.ts`
2. Export `GET`, `POST`, `PATCH`, `DELETE` handlers
3. Use `withAuth()` wrapper for protected routes
4. Use `successResponse()` and `errorResponse()` helpers

### Database Migrations

When modifying schema:

1. Create new migration file in `supabase/migrations/`
2. Run migration in Supabase dashboard
3. Update `src/types/database.ts` types

## License

Private - Alhaji Abba Goji Campaign 2027
