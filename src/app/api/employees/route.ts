import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all employees
export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

// POST create new employee
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, position, department, salary, joinDate } = body;

    if (!name || !email || !position || !department || !salary) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const employee = await prisma.employee.create({
      data: {
        name,
        email,
        position,
        department,
        salary: parseFloat(salary),
        joinDate: new Date(joinDate),
      },
    });

    return NextResponse.json(employee, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    console.error('Error creating employee:', error);
    return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
  }
}
