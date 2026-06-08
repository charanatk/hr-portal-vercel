import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all exit workflows
export async function GET() {
  try {
    const exits = await prisma.exitWorkflow.findMany({
      include: { employee: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(exits);
  } catch (error) {
    console.error('Error fetching exit workflows:', error);
    return NextResponse.json({ error: 'Failed to fetch exit workflows' }, { status: 500 });
  }
}

// POST create exit workflow
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, exitDate, reason } = body;

    if (!employeeId || !exitDate || !reason) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const exitWorkflow = await prisma.exitWorkflow.create({
      data: {
        employeeId,
        exitDate: new Date(exitDate),
        reason,
        status: 'pending',
        stage: 1,
      },
      include: { employee: true },
    });

    return NextResponse.json(exitWorkflow, { status: 201 });
  } catch (error) {
    console.error('Error creating exit workflow:', error);
    return NextResponse.json({ error: 'Failed to create exit workflow' }, { status: 500 });
  }
}
