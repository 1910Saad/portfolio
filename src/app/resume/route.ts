import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";

export async function GET() {
  const doc = new PDFDocument({ margin: 50 });
  const chunks: Buffer[] = [];

  const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on("error", reject);
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(20).font("Helvetica-Bold").text("Khan Saad Alikhan");
    doc.fontSize(12).font("Helvetica").text("Computer Engineering Undergraduate | Software Developer");
    doc.text("Mumbai, Maharashtra | +91 9370030485");
    doc.moveDown();

    doc.font("Helvetica-Bold").text("Professional Summary");
    doc.font("Helvetica").text(
      "Computer Engineering undergraduate (2026) with experience building full-stack applications, backend systems, and AI-powered software using Python, Java, React, FastAPI, and PostgreSQL. Passionate about solving complex engineering problems and building scalable, maintainable software.",
      { width: 480, align: "left" },
    );

    doc.moveDown();
    doc.font("Helvetica-Bold").text("Technical Skills");
    doc.font("Helvetica").text(
      "Java, Python, C, JavaScript (ES6+), SQL, React.js, Next.js, FastAPI, Node.js, PostgreSQL, Google Gemini API, LLM APIs, Git & GitHub, Docker, Vercel, OOP & DSA.",
      { width: 480, align: "left" },
    );

    doc.moveDown();
    doc.font("Helvetica-Bold").text("Projects");
    doc.font("Helvetica").text("• CourseCraft – AI-Powered E-Learning Platform");
    doc.text("• EVUA – Enhanced Version Upgrade Assistant");
    doc.text("• Raise Your Issue – Complaint Management Platform");

    doc.moveDown();
    doc.font("Helvetica-Bold").text("Research & Achievements");
    doc.font("Helvetica").text("• EVUA published in IJCST 2026");
    doc.text("• Best Presenter – Internal Smart India Hackathon (2025)");
    doc.text("• Participant – Smart India Hackathon (2022, 2023)");
    doc.text("• Google Gemini & Vertex AI certifications");
    doc.text("• Tata Data Visualisation – Forage (2025)");

    doc.end();
  });

  return new NextResponse(Uint8Array.from(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Khan-Saad-Alikhan-Resume.pdf"',
    },
  });
}
