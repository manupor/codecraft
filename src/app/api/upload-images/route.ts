import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';

// Maximum file size: 5MB per image
const MAX_FILE_SIZE = 5 * 1024 * 1024;
// Maximum number of images: 10
const MAX_IMAGES = 10;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('images') as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No images provided' },
        { status: 400 }
      );
    }

    if (files.length > MAX_IMAGES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_IMAGES} images allowed` },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const uploadedFiles = [];

    for (const file of files) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        return NextResponse.json(
          { error: `File ${file.name} is not an image` },
          { status: 400 }
        );
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File ${file.name} is too large. Maximum size is 5MB` },
          { status: 400 }
        );
      }

      // Generate unique filename
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 8);
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const filename = `${timestamp}-${random}.${extension}`;
      
      // Save file
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filepath = join(uploadsDir, filename);
      await writeFile(filepath, buffer);

      // Return public URL
      const publicUrl = `/uploads/${filename}`;
      uploadedFiles.push({
        filename,
        originalName: file.name,
        size: file.size,
        type: file.type,
        url: publicUrl
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
      count: uploadedFiles.length
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload images' },
      { status: 500 }
    );
  }
}
