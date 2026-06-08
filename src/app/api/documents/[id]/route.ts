import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT update document (increment downloads)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'increment_downloads') {
      const document = await prisma.document.update({
        where: { id: params.id },
        data: {
          downloads: {
            increment: 1,
          },
        },
      });
      return NextResponse.json(document);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error updating document:', error);
    return NextResponse.json({ error: 'Failed to update document' }, { status: 500 });
  }
}

// DELETE document
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.document.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    return NextResponse.json({ error: 'Failed to delete document' }, { status: 500 });
  }
}
