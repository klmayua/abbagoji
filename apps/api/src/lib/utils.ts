import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export function withAuth(handler: Function) {
  return async (req: NextRequest, context: any) => {
    try {
      const authHeader = req.headers.get('authorization');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
          { success: false, message: 'Unauthorized' },
          { status: 401 }
        );
      }

      const token = authHeader.substring(7);
      const payload = verifyToken(token);

      // Add user info to request
      (req as any).user = payload;

      return handler(req, context);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      );
    }
  };
}

export function withRole(handler: Function, allowedRoles: string[]) {
  return async (req: NextRequest, context: any) => {
    try {
      const authHeader = req.headers.get('authorization');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
          { success: false, message: 'Unauthorized' },
          { status: 401 }
        );
      }

      const token = authHeader.substring(7);
      const payload = verifyToken(token);

      if (!allowedRoles.includes(payload.role)) {
        return NextResponse.json(
          { success: false, message: 'Forbidden' },
          { status: 403 }
        );
      }

      (req as any).user = payload;

      return handler(req, context);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      );
    }
  };
}

export function successResponse(data: any, message?: string) {
  return NextResponse.json({
    success: true,
    data,
    message,
  });
}

export function errorResponse(message: string, status: number = 500) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}

export function getPaginationParams(searchParams: URLSearchParams) {
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '50');
  const offset = (page - 1) * perPage;

  return { page, perPage, offset };
}
