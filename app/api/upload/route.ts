import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Convert the uploaded file into a buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // Generate a safe unique filename
        const safeName = file.name ? file.name.replace(/[^a-zA-Z0-9.-]/g, '') : 'image.png';
        const filename = `cms-${Date.now()}-${safeName}`;
        
        // Path to the public/uploads directory
        const uploadDir = path.join(process.cwd(), 'public/uploads');

        // Ensure the directory exists natively
        await fs.mkdir(uploadDir, { recursive: true });

        // Write the file to disk
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, buffer);

        // Return the valid URL path for the frontend
        return NextResponse.json({ url: `/uploads/${filename}` });
    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: "Failed to process image upload" }, { status: 500 });
    }
}
