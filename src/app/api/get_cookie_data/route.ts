export const dynamic = "force-dynamic";

import { getUserDataFromCookie } from "@/helper/login_helper";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user_data = await getUserDataFromCookie();
    const { studentId } = user_data as { id: number; studentId: string };

    return NextResponse.json({ status: 200, studentId });
  } catch (err) {
    return NextResponse.json({ status: 400 });
  }
}
