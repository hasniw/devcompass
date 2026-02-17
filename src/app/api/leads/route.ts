import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';

const LEADS_FILE = '/tmp/devcompass-leads.json';

export async function POST(req: NextRequest) {
  try {
    const { firstName, email, phone, formation } = await req.json();

    if (!firstName || !email || !formation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lead = { firstName, email, phone: phone || null, formation, createdAt: new Date().toISOString() };

    let leads: unknown[] = [];
    try {
      const data = await fs.readFile(LEADS_FILE, 'utf-8');
      leads = JSON.parse(data);
    } catch {
      // file doesn't exist yet
    }

    leads.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
