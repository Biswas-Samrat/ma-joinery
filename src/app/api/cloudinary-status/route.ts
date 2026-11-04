import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper script to perform actions or migrations if needed
export async function GET(req: NextRequest) {
  return NextResponse.json({ status: "ok" });
}

