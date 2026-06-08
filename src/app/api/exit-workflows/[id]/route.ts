import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT update exit workflow stage
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const {
      stage,
      status,
      resignationCompleted,
      documentationCompleted,
      finalApprovalCompleted,
      equipmentReturnCompleted,
    } = body;

    const exitWorkflow = await prisma.exitWorkflow.update({
      where: { id: params.id },
      data: {
        ...(stage && { stage }),
        ...(status && { status }),
        ...(typeof resignationCompleted === 'boolean' && { resignationCompleted }),
        ...(typeof documentationCompleted === 'boolean' && { documentationCompleted }),
        ...(typeof finalApprovalCompleted === 'boolean' && { finalApprovalCompleted }),
        ...(typeof equipmentReturnCompleted === 'boolean' && { equipmentReturnCompleted }),
      },
      include: { employee: true },
    });

    return NextResponse.json(exitWorkflow);
  } catch (error) {
    console.error('Error updating exit workflow:', error);
    return NextResponse.json({ error: 'Failed to update exit workflow' }, { status: 500 });
  }
}
