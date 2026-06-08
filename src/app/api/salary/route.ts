import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all salary records
export async function GET() {
  try {
    const salaries = await prisma.salaryRecord.findMany({
      include: { employee: true },
      orderBy: { paymentDate: 'desc' },
    });
    return NextResponse.json(salaries);
  } catch (error) {
    console.error('Error fetching salary records:', error);
    return NextResponse.json({ error: 'Failed to fetch salary records' }, { status: 500 });
  }
}

// POST create salary record
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, amount, paymentDate, month } = body;

    if (!employeeId || !amount || !paymentDate || !month) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const salaryRecord = await prisma.salaryRecord.create({
      data: {
        employeeId,
        amount: parseFloat(amount),
        paymentDate: new Date(paymentDate),
        month,
        paymentStatus: 'pending',
      },
      include: { employee: true },
    });

    return NextResponse.json(salaryRecord, { status: 201 });
  } catch (error) {
    console.error('Error creating salary record:', error);
    return NextResponse.json({ error: 'Failed to create salary record' }, { status: 500 });
  }
}
