import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all leaves
export async function GET() {
  try {
    const leaves = await prisma.leave.findMany({
      include: { employee: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leaves);
  } catch (error) {
    console.error('Error fetching leaves:', error);
    return NextResponse.json({ error: 'Failed to fetch leaves' }, { status: 500 });
  }
}

// POST create new leave request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, leaveType, startDate, endDate, daysRequested, reason } = body;

    if (!employeeId || !leaveType || !startDate || !endDate || !daysRequested) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const leave = await prisma.leave.create({
      data: {
        employeeId,
        leaveType,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        daysRequested: parseInt(daysRequested),
        reason: reason || '',
        status: 'pending',
      },
      include: { employee: true },
    });

    return NextResponse.json(leave, { status: 201 });
  } catch (error) {
    console.error('Error creating leave:', error);
    return NextResponse.json({ error: 'Failed to create leave request' }, { status: 500 });
  }
}
