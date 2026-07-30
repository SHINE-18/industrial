import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const imageName = params.name;
  
  // Clean filename lookup inside public/images
  const publicDir = path.join(process.cwd(), 'public', 'images');
  const filePath = path.join(publicDir, `${imageName}.png`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Image not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('File read error', { status: 500 });
  }
}
