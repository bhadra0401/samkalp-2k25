import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'samkalp-2025-backend',
    time: new Date().toISOString(),
  });
}
