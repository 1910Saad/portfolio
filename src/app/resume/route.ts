import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Saad_Khan.pdf");
  const fileBuffer = await readFile(filePath);

  return new NextResponse(Uint8Array.from(fileBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Saad_Khan.pdf"',
    },
  });
}