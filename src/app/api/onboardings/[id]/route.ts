import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT update onboarding progress
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const {
      status,
      progress,
      itSetupCompleted,
      hrOrientationCompleted,
      trainingCompleted,
      mentoringCompleted,
    } = body;

    // Calculate progress based on completed tasks
    let calculatedProgress = 0;
    let completedTasks = 0;
    if (itSetupCompleted) completedTasks++;
    if (hrOrientationCompleted) completedTasks++;
    if (trainingCompleted) completedTasks++;
    if (mentoringCompleted) completedTasks++;
    calculatedProgress = (completedTasks / 4) * 100;

    const onboarding = await prisma.onboarding.update({
      where: { id: params.id },
      data: {
        ...(status && { status }),
        progress: progress || calculatedProgress,
        ...(typeof itSetupCompleted === 'boolean' && { itSetupCompleted }),
        ...(typeof hrOrientationCompleted === 'boolean' && { hrOrientationCompleted }),
        ...(typeof trainingCompleted === 'boolean' && { trainingCompleted }),
        ...(typeof mentoringCompleted === 'boolean' && { mentoringCompleted }),
      },
      include: { employee: true },
    });

    return NextResponse.json(onboarding);
  } catch (error) {
    console.error('Error updating onboarding:', error);
    return NextResponse.json({ error: 'Failed to update onboarding' }, { status: 500 });
  }
}
