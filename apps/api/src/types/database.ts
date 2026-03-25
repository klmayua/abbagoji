export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string
          email: string
          password_hash: string
          name: string
          phone: string | null
          role: 'Field Coordinator' | 'Field Agent' | 'Data Entry' | 'Admin'
          lga: string
          ward: string | null
          status: 'active' | 'offline' | 'suspended'
          last_active: string
          voters_contacted: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          name: string
          phone?: string | null
          role: 'Field Coordinator' | 'Field Agent' | 'Data Entry' | 'Admin'
          lga: string
          ward?: string | null
          status?: 'active' | 'offline' | 'suspended'
          last_active?: string
          voters_contacted?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          name?: string
          phone?: string | null
          role?: 'Field Coordinator' | 'Field Agent' | 'Data Entry' | 'Admin'
          lga?: string
          ward?: string | null
          status?: 'active' | 'offline' | 'suspended'
          last_active?: string
          voters_contacted?: number
          created_at?: string
          updated_at?: string
        }
      }
      voters: {
        Row: {
          id: string
          name: string
          phone: string | null
          email: string | null
          lga: string
          ward: string
          polling_unit: string
          polling_unit_code: string | null
          priority: 'high' | 'medium' | 'low'
          sentiment: 'positive' | 'neutral' | 'negative'
          contacted: boolean
          contact_date: string | null
          notes: string | null
          tags: string[]
          latitude: number | null
          longitude: number | null
          date_of_birth: string | null
          occupation: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          phone?: string | null
          email?: string | null
          lga: string
          ward: string
          polling_unit: string
          polling_unit_code?: string | null
          priority?: 'high' | 'medium' | 'low'
          sentiment?: 'positive' | 'neutral' | 'negative'
          contacted?: boolean
          contact_date?: string | null
          notes?: string | null
          tags?: string[]
          latitude?: number | null
          longitude?: number | null
          date_of_birth?: string | null
          occupation?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string | null
          email?: string | null
          lga?: string
          ward?: string
          polling_unit?: string
          polling_unit_code?: string | null
          priority?: 'high' | 'medium' | 'low'
          sentiment?: 'positive' | 'neutral' | 'negative'
          contacted?: boolean
          contact_date?: string | null
          notes?: string | null
          tags?: string[]
          latitude?: number | null
          longitude?: number | null
          date_of_birth?: string | null
          occupation?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      interactions: {
        Row: {
          id: string
          voter_id: string
          type: 'phone' | 'visit' | 'message'
          outcome: 'positive' | 'neutral' | 'negative'
          notes: string | null
          agent_id: string
          lga: string
          ward: string
          created_at: string
        }
        Insert: {
          id?: string
          voter_id: string
          type: 'phone' | 'visit' | 'message'
          outcome: 'positive' | 'neutral' | 'negative'
          notes?: string | null
          agent_id: string
          lga: string
          ward: string
          created_at?: string
        }
        Update: {
          id?: string
          voter_id?: string
          type?: 'phone' | 'visit' | 'message'
          outcome?: 'positive' | 'neutral' | 'negative'
          notes?: string | null
          agent_id?: string
          lga?: string
          ward?: string
          created_at?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          name: string
          type: 'whatsapp' | 'sms'
          status: 'scheduled' | 'sending' | 'completed' | 'failed'
          message: string
          sent_count: number
          total_count: number
          scheduled_at: string | null
          completed_at: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: 'whatsapp' | 'sms'
          status?: 'scheduled' | 'sending' | 'completed' | 'failed'
          message: string
          sent_count?: number
          total_count: number
          scheduled_at?: string | null
          completed_at?: string | null
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'whatsapp' | 'sms'
          status?: 'scheduled' | 'sending' | 'completed' | 'failed'
          message?: string
          sent_count?: number
          total_count?: number
          scheduled_at?: string | null
          completed_at?: string | null
          created_by?: string | null
          created_at?: string
        }
      }
      message_templates: {
        Row: {
          id: string
          title: string
          message: string
          type: 'announcement' | 'reminder' | 'response'
          sent_count: number
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          message: string
          type?: 'announcement' | 'reminder' | 'response'
          sent_count?: number
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          message?: string
          type?: 'announcement' | 'reminder' | 'response'
          sent_count?: number
          created_by?: string | null
          created_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          summary: string
          content: string
          image: string | null
          category: string
          published_at: string
          author: string
          is_published: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          summary: string
          content: string
          image?: string | null
          category: string
          published_at?: string
          author: string
          is_published?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          summary?: string
          content?: string
          image?: string | null
          category?: string
          published_at?: string
          author?: string
          is_published?: boolean
          created_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          location: string
          latitude: number | null
          longitude: number | null
          event_date: string
          event_time: string
          image: string | null
          registration_required: boolean
          max_attendees: number | null
          registered_count: number
          is_public: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          location: string
          latitude?: number | null
          longitude?: number | null
          event_date: string
          event_time: string
          image?: string | null
          registration_required?: boolean
          max_attendees?: number | null
          registered_count?: number
          is_public?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          location?: string
          latitude?: number | null
          longitude?: number | null
          event_date?: string
          event_time?: string
          image?: string | null
          registration_required?: boolean
          max_attendees?: number | null
          registered_count?: number
          is_public?: boolean
          created_at?: string
        }
      }
      event_registrations: {
        Row: {
          id: string
          event_id: string
          name: string
          phone: string
          email: string | null
          lga: string | null
          ward: string | null
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          name: string
          phone: string
          email?: string | null
          lga?: string | null
          ward?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          name?: string
          phone?: string
          email?: string | null
          lga?: string | null
          ward?: string | null
          created_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          name: string
          type: 'lga' | 'ward' | 'polling_unit'
          parent_id: string | null
          code: string | null
          latitude: number | null
          longitude: number | null
          target_voters: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: 'lga' | 'ward' | 'polling_unit'
          parent_id?: string | null
          code?: string | null
          latitude?: number | null
          longitude?: number | null
          target_voters?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'lga' | 'ward' | 'polling_unit'
          parent_id?: string | null
          code?: string | null
          latitude?: number | null
          longitude?: number | null
          target_voters?: number
          created_at?: string
        }
      }
      daily_metrics: {
        Row: {
          id: string
          date: string
          calls: number
          visits: number
          messages: number
          new_voters: number
          contacted_voters: number
          positive_sentiment: number
          neutral_sentiment: number
          negative_sentiment: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          date: string
          calls?: number
          visits?: number
          messages?: number
          new_voters?: number
          contacted_voters?: number
          positive_sentiment?: number
          neutral_sentiment?: number
          negative_sentiment?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          date?: string
          calls?: number
          visits?: number
          messages?: number
          new_voters?: number
          contacted_voters?: number
          positive_sentiment?: number
          neutral_sentiment?: number
          negative_sentiment?: number
          created_at?: string
          updated_at?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          user_id: string | null
          action: string
          entity_type: string
          entity_id: string | null
          old_data: Json | null
          new_data: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          action: string
          entity_type: string
          entity_id?: string | null
          old_data?: Json | null
          new_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          action?: string
          entity_type?: string
          entity_id?: string | null
          old_data?: Json | null
          new_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      voter_stats_by_lga: {
        Row: {
          lga: string
          total_voters: number
          contacted_count: number
          high_priority_count: number
          positive_count: number
          neutral_count: number
          negative_count: number
        }
      }
    }
    Functions: {
      increment_agent_contacted: {
        Args: { agent_id: string }
        Returns: void
      }
      increment_daily_metric: {
        Args: { metric_date: string; metric_type: string; sentiment: string }
        Returns: void
      }
      increment_event_count: {
        Args: { event_id: string }
        Returns: void
      }
    }
    Enums: {}
  }
}
