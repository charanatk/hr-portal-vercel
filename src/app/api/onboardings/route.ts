import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all onboardings
export async function GET() {
  try {
    const onboardings = await prisma.onboarding.findMany({
      include: { employee: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(onboardings);
  } catch (error) {
    console.error('Error fetching onboardings:', error);
    return NextResponse.json({ error: 'Failed to fetch onboardings' }, { status: 500 });
  }
}

// POST create onboarding
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, startDate } = body;

    if (!employeeId || !startDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const onboarding = await prisma.onboarding.create({
      data: {
        employeeId,
        startDate: new Date(startDate),
        status: 'not_started',
        progress: 0,
      },
      include: { employee: true },
    });

    return NextResponse.json(onboarding, { status: 201 });
  } catch (error) {
    console.error('Error creating onboarding:', error);
    return NextResponse.json({ error: 'Failed to create onboarding' }, { status: 500 });
  }
}
