import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const src = `C:\\Users\\tejak\\.gemini\\antigravity-ide\\brain\\c381cd02-1233-4d5d-a039-cfb94532a782\\joint_replacement_detail_1781192572689.png`;
    const dest = `E:\\sri-krishna-hospital\\public\\service-detail\\JPG\\joint-replacement.png`;
    
    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.copyFileSync(src, dest);
    return new Response(JSON.stringify({ success: true, message: 'Copied successfully' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
