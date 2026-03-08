import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

interface LeadEntry {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  lang: string;
  createdAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, message, _hp, lang } = body;

    // Honeypot check
    if (_hp) {
      return NextResponse.json({ ok: true });
    }

    // Validation
    if (!name || !email || !company || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    const entry: LeadEntry = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      company: String(company).slice(0, 200),
      role: String(role).slice(0, 200),
      message: String(message || "").slice(0, 1000),
      lang: lang === "en" ? "en" : "ru",
      createdAt: new Date().toISOString(),
    };

    // Ensure data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    // Read existing leads
    let leads: LeadEntry[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      leads = JSON.parse(raw);
    } catch {
      // File doesn't exist yet
    }

    leads.push(entry);

    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
