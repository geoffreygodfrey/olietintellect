import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const company = typeof body?.company === "string" ? body.company.trim() : "";
    const projectType = typeof body?.projectType === "string" ? body.projectType.trim() : "";
    const description = typeof body?.description === "string" ? body.description.trim() : "";

    if (!name || !email || !projectType || !description) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
    }

    const enquiry = { name, email, company, projectType, description, receivedAt: new Date().toISOString() };

    return NextResponse.json({ ok: true, id: crypto.randomUUID(), ...enquiry });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}