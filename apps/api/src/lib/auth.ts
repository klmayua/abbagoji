import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { supabaseAdmin } from './supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-change-in-production';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateTokens(userId: string, email: string, role: string) {
  const payload = { userId, email, role };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

  return { token, refreshToken };
}

export function verifyToken(token: string): JWTPayload {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
}

export function verifyRefreshToken(token: string): { userId: string } {
  return jwt.verify(token, JWT_REFRESH_SECRET) as { userId: string };
}

export async function authenticateUser(email: string, password: string) {
  const { data: user, error } = await supabaseAdmin
    .from('team_members')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password_hash);

  if (!isValid) {
    return null;
  }

  // Update last_active
  await supabaseAdmin
    .from('team_members')
    .update({ last_active: new Date().toISOString() })
    .eq('id', user.id);

  return user;
}

export async function getUserById(userId: string) {
  const { data: user, error } = await supabaseAdmin
    .from('team_members')
    .select('id, email, name, role, lga, ward, status, last_active, voters_contacted')
    .eq('id', userId)
    .single();

  if (error || !user) {
    return null;
  }

  return user;
}
