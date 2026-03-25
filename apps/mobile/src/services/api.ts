/**
 * API Service Layer for URADI360 Mobile App
 * Handles all backend communication for the campaign management platform
 */

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

interface ApiError {
  message: string;
  code: string;
  status: number;
}

// Generic fetch wrapper with error handling
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = await getAuthToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data.message || 'An error occurred',
        code: data.code || 'UNKNOWN_ERROR',
        status: response.status,
      } as ApiError;
    }

    return {
      data,
      success: true,
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Auth token storage (placeholder - integrate with SecureStore)
async function getAuthToken(): Promise<string | null> {
  // TODO: Implement with expo-secure-store
  return null;
}

// ====================
// Auth API
// ====================

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    zone: string;
    lga: string;
  };
  token: string;
  refreshToken: string;
}

export const authApi = {
  login: (credentials: LoginCredentials) =>
    fetchApi<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  logout: () =>
    fetchApi<void>('/auth/logout', {
      method: 'POST',
    }),

  refreshToken: (refreshToken: string) =>
    fetchApi<AuthResponse>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    }),

  me: () => fetchApi<AuthResponse['user']>('/auth/me'),
};

// ====================
// Voters API
// ====================

export interface Voter {
  id: string;
  name: string;
  phone: string;
  email?: string;
  lga: string;
  ward: string;
  pollingUnit: string;
  priority: 'high' | 'medium' | 'low';
  sentiment: 'positive' | 'neutral' | 'negative';
  contacted: boolean;
  contactDate?: string;
  notes?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface VoterFilters {
  lga?: string;
  ward?: string;
  priority?: string;
  sentiment?: string;
  contacted?: boolean;
  search?: string;
}

export interface VoterListResponse {
  voters: Voter[];
  total: number;
  page: number;
  perPage: number;
}

export const votersApi = {
  getVoters: (filters?: VoterFilters, page = 1, perPage = 50) =>
    fetchApi<VoterListResponse>(`/voters?page=${page}&perPage=${perPage}`, {
      method: 'POST',
      body: JSON.stringify(filters || {}),
    }),

  getVoterById: (id: string) => fetchApi<Voter>(`/voters/${id}`),

  createVoter: (voter: Omit<Voter, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<Voter>('/voters', {
      method: 'POST',
      body: JSON.stringify(voter),
    }),

  updateVoter: (id: string, updates: Partial<Voter>) =>
    fetchApi<Voter>(`/voters/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    }),

  deleteVoter: (id: string) =>
    fetchApi<void>(`/voters/${id}`, {
      method: 'DELETE',
    }),

  bulkImport: (voters: Array<Omit<Voter, 'id' | 'createdAt' | 'updatedAt'>>) =>
    fetchApi<{ imported: number; failed: number }>('/voters/bulk', {
      method: 'POST',
      body: JSON.stringify({ voters }),
    }),

  getStats: () => fetchApi<{ total: number; contacted: number; highPriority: number }>('/voters/stats'),
};

// ====================
// Interactions API
// ====================

export interface Interaction {
  id: string;
  voterId: string;
  voterName: string;
  type: 'phone' | 'visit' | 'message';
  outcome: 'positive' | 'neutral' | 'negative';
  notes?: string;
  agentId: string;
  agentName: string;
  lga: string;
  ward: string;
  createdAt: string;
}

export const interactionsApi = {
  getInteractions: (filters?: { voterId?: string; agentId?: string; lga?: string; dateFrom?: string; dateTo?: string }) =>
    fetchApi<Interaction[]>('/interactions', {
      method: 'POST',
      body: JSON.stringify(filters || {}),
    }),

  createInteraction: (interaction: Omit<Interaction, 'id' | 'createdAt' | 'voterName' | 'agentName'>) =>
    fetchApi<Interaction>('/interactions', {
      method: 'POST',
      body: JSON.stringify(interaction),
    }),

  getRecent: (limit = 10) =>
    fetchApi<Interaction[]>(`/interactions/recent?limit=${limit}`),

  getStats: (period: 'today' | 'week' | 'month') =>
    fetchApi<{ calls: number; visits: number; messages: number; conversion: number }>(`/interactions/stats?period=${period}`),
};

// ====================
// Analytics API
// ====================

export interface SentimentData {
  overall: number;
  positive: number;
  neutral: number;
  negative: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface LgaStats {
  lga: string;
  contacted: number;
  target: number;
  sentiment: number;
  conversion: number;
}

export interface ActivityData {
  day: string;
  calls: number;
  visits: number;
  messages: number;
}

export interface TopicData {
  topic: string;
  mentions: number;
  trend: 'up' | 'down';
}

export const analyticsApi = {
  getSentiment: () => fetchApi<SentimentData>('/analytics/sentiment'),

  getLgaStats: () => fetchApi<LgaStats[]>('/analytics/lga'),

  getActivity: (days = 7) => fetchApi<ActivityData[]>(`/analytics/activity?days=${days}`),

  getTopTopics: (limit = 10) => fetchApi<TopicData[]>(`/analytics/topics?limit=${limit}`),

  getDashboard: () =>
    fetchApi<{
      totalVoters: number;
      contactedToday: number;
      anchorCitizens: number;
      sentiment: number;
    }>('/analytics/dashboard'),
};

// ====================
// Team API
// ====================

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Field Coordinator' | 'Field Agent' | 'Data Entry';
  lga: string;
  status: 'active' | 'offline' | 'suspended';
  lastActive: string;
  votersContacted: number;
}

export const teamApi = {
  getTeam: () => fetchApi<TeamMember[]>('/team'),

  getMember: (id: string) => fetchApi<TeamMember>(`/team/${id}`),

  createMember: (member: Omit<TeamMember, 'id' | 'lastActive' | 'votersContacted'>) =>
    fetchApi<TeamMember>('/team', {
      method: 'POST',
      body: JSON.stringify(member),
    }),

  updateMember: (id: string, updates: Partial<TeamMember>) =>
    fetchApi<TeamMember>(`/team/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    }),

  deactivateMember: (id: string) =>
    fetchApi<void>(`/team/${id}/deactivate`, {
      method: 'POST',
    }),

  getStats: () => fetchApi<{ total: number; active: number; lgas: number }>('/team/stats'),
};

// ====================
// Communications API
// ====================

export interface MessageTemplate {
  id: string;
  title: string;
  message: string;
  type: 'announcement' | 'reminder' | 'response';
  sent: number;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'whatsapp' | 'sms';
  status: 'scheduled' | 'sending' | 'completed';
  sent: number;
  total: number;
  scheduledAt?: string;
  createdAt: string;
}

export const communicationsApi = {
  getTemplates: () => fetchApi<MessageTemplate[]>('/communications/templates'),

  createTemplate: (template: Omit<MessageTemplate, 'id' | 'sent'>) =>
    fetchApi<MessageTemplate>('/communications/templates', {
      method: 'POST',
      body: JSON.stringify(template),
    }),

  sendMessage: (params: { message: string; recipients: string[]; channel: 'whatsapp' | 'sms' }) =>
    fetchApi<{ sent: number; failed: number }>('/communications/send', {
      method: 'POST',
      body: JSON.stringify(params),
    }),

  getCampaigns: () => fetchApi<Campaign[]>('/communications/campaigns'),

  createCampaign: (campaign: Omit<Campaign, 'id' | 'createdAt'>) =>
    fetchApi<Campaign>('/communications/campaigns', {
      method: 'POST',
      body: JSON.stringify(campaign),
    }),

  getStats: () =>
    fetchApi<{
      messagesSent: number;
      deliveryRate: number;
      responseRate: number;
    }>('/communications/stats'),
};

// ====================
// Map/Locations API
// ====================

export interface Location {
  id: string;
  name: string;
  type: 'lga' | 'ward' | 'polling_unit';
  parentId?: string;
  lat: number;
  lng: number;
  voters: number;
  contacted: number;
  coverage: number;
}

export const locationsApi = {
  getLgas: () => fetchApi<Location[]>('/locations/lgas'),

  getWards: (lgaId: string) => fetchApi<Location[]>(`/locations/lgas/${lgaId}/wards`),

  getPollingUnits: (wardId: string) =>
    fetchApi<Location[]>(`/locations/wards/${wardId}/polling-units`),

  getCoverage: () => fetchApi<{ lga: string; coverage: number; voters: number; status: string }[]>('/locations/coverage'),

  searchPollingUnit: (query: string) =>
    fetchApi<Location[]>(`/locations/search?q=${encodeURIComponent(query)}`),
};

// ====================
// Content API
// ====================

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  category: string;
  publishedAt: string;
  author: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  image?: string;
  registrationRequired: boolean;
}

export const contentApi = {
  getNews: (page = 1, perPage = 10) =>
    fetchApi<NewsArticle[]>(`/content/news?page=${page}&perPage=${perPage}`),

  getNewsById: (id: string) => fetchApi<NewsArticle>(`/content/news/${id}`),

  getEvents: (upcoming = true) =>
    fetchApi<Event[]>(`/content/events?upcoming=${upcoming}`),

  getEventById: (id: string) => fetchApi<Event>(`/content/events/${id}`),

  registerForEvent: (eventId: string, userData: { name: string; phone: string; email?: string }) =>
    fetchApi<void>(`/content/events/${eventId}/register`, {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
};

export default {
  auth: authApi,
  voters: votersApi,
  interactions: interactionsApi,
  analytics: analyticsApi,
  team: teamApi,
  communications: communicationsApi,
  locations: locationsApi,
  content: contentApi,
};
