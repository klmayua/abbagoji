import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi, AuthResponse, LoginCredentials } from '../services/api';

interface AuthContextType {
  user: AuthResponse['user'] | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock permissions based on role
const rolePermissions: Record<string, string[]> = {
  'Field Coordinator': [
    'voters:read',
    'voters:write',
    'interactions:read',
    'interactions:write',
    'team:read',
    'analytics:read',
    'communications:send',
    'map:read',
  ],
  'Field Agent': [
    'voters:read',
    'voters:write',
    'interactions:read',
    'interactions:write',
    'map:read',
  ],
  'Data Entry': [
    'voters:read',
    'voters:write',
    'analytics:read',
  ],
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthResponse['user'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // TODO: Get token from secure storage
      const token = null;
      if (token) {
        const response = await authApi.me();
        setUser(response.data);
      }
    } catch (error) {
      console.log('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authApi.login(credentials);
      setUser(response.data.user);
      // TODO: Store token in secure storage
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      // TODO: Clear token from secure storage
    }
  };

  const hasRole = (role: string) => {
    return user?.role === role;
  };

  const hasPermission = (permission: string) => {
    if (!user) return false;
    const permissions = rolePermissions[user.role] || [];
    return permissions.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasRole,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
