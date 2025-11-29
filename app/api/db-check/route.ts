import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const usersCount = await prisma.user.count();
    const eventsCount = await prisma.event.count();

    return NextResponse.json({
      status: 'ok',
      db: 'connected',
      usersCount,
      eventsCount,
      time: new Date().toISOString(),
    });
  } catch (error) {
    console.error('DB check failed', error);
    return NextResponse.json(
      {
        status: 'error',
        db: 'failed',
        message: 'Unable to connect to database',
      },
      { status: 500 },
    );
  }
}
