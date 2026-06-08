import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET single employee by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const employee = await prisma.employee.findUnique({
      where: { id: params.id },
      include: {
        leaves: true,
        onboarding: true,
        exitWorkflow: true,
        salaryRecords: true,
      },
    });

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    return NextResponse.json({ error: 'Failed to fetch employee' }, { status: 500 });
  }
}

// PUT update employee
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { name, email, position, department, salary, status } = body;

    const employee = await prisma.employee.update({
      where: { id: params.id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(position && { position }),
        ...(department && { department }),
        ...(salary && { salary: parseFloat(salary) }),
        ...(status && { status }),
      },
    });

    return NextResponse.json(employee);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }
    console.error('Error updating employee:', error);
    return NextResponse.json({ error: 'Failed to update employee' }, { status: 500 });
  }
}

// DELETE employee
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.employee.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Employee deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }
    console.error('Error deleting employee:', error);
    return NextResponse.json({ error: 'Failed to delete employee' }, { status: 500 });
  }
}
