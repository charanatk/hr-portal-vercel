import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT update salary record status
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { paymentStatus } = body;

    if (!paymentStatus) {
      return NextResponse.json({ error: 'Payment status is required' }, { status: 400 });
    }

    const salaryRecord = await prisma.salaryRecord.update({
      where: { id: params.id },
      data: { paymentStatus },
      include: { employee: true },
    });

    return NextResponse.json(salaryRecord);
  } catch (error) {
    console.error('Error updating salary record:', error);
    return NextResponse.json({ error: 'Failed to update salary record' }, { status: 500 });
  }
}
