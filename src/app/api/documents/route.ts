import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all documents
export async function GET() {
  try {
    const documents = await prisma.document.findMany({
      orderBy: { uploadedDate: 'desc' },
    });
    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
}

// POST upload new document
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, fileName, fileType, fileSize, category, uploadedBy, filePath } = body;

    if (!title || !fileName || !fileType || !category || !uploadedBy || !filePath) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const document = await prisma.document.create({
      data: {
        title,
        fileName,
        fileType,
        fileSize: fileSize || '0 KB',
        category,
        uploadedBy,
        filePath,
      },
    });

    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    console.error('Error uploading document:', error);
    return NextResponse.json({ error: 'Failed to upload document' }, { status: 500 });
  }
}
