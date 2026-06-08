import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT update leave status
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { status, approvedBy } = body;

    if (!status) {
      return NextResponse.json({ error: 'Status is required' }, { status: 400 });
    }

    const leave = await prisma.leave.update({
      where: { id: params.id },
      data: {
        status,
        ...(status === 'approved' && {
          approvedBy: approvedBy || 'Admin',
          approvedDate: new Date(),
        }),
      },
      include: { employee: true },
    });

    return NextResponse.json(leave);
  } catch (error) {
    console.error('Error updating leave:', error);
    return NextResponse.json({ error: 'Failed to update leave' }, { status: 500 });
  }
}

// DELETE leave request
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.leave.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Leave request deleted' });
  } catch (error) {
    console.error('Error deleting leave:', error);
    return NextResponse.json({ error: 'Failed to delete leave' }, { status: 500 });
  }
}
