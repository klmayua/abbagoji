// Type definitions for GOJI2027 Mobile App

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  lga: string;
  category: string;
  attendees: number;
}

export interface PollingUnit {
  code: string;
  name: string;
  address: string;
  lga: string;
  ward: string;
}

export interface Voter {
  id: number;
  name: string;
  phone: string;
  lga: string;
  ward: string;
  pu: string;
  priority: 'high' | 'medium' | 'low';
  contacted: boolean;
}

export interface Interaction {
  id: number;
  voter: string;
  type: 'phone' | 'message' | 'visit';
  outcome: 'positive' | 'neutral' | 'negative';
  time: string;
  lga: string;
  agent: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  token?: string;
}

export interface SentimentData {
  label: string;
  value: number;
  color: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  lga?: string;
  status: 'active' | 'inactive';
}

export type RootStackParamList = {
  // Auth
  Login: undefined;

  // Public
  Home: undefined;
  News: undefined;
  NewsDetail: { id: number };
  Events: undefined;
  EventDetail: { id: number };
  GetInvolved: undefined;
  FindPollingUnit: undefined;

  // Field Agent
  Dashboard: undefined;
  Voters: undefined;
  VoterDetail: { id: number };
  Interactions: undefined;
  Map: undefined;
  Analytics: undefined;
  Team: undefined;
  Communications: undefined;
  Settings: undefined;
};
