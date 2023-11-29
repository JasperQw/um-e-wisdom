"use server";

import prisma from "@/lib/db";

import { cookies } from "next/headers";
import * as jose from "jose";
import { compareHashes } from "@/helper/login_helper";

export async function login(
  prevState: loginDto,
  formData: FormData
): Promise<loginDto> {
  try {
    const studentId = formData.get("student_id") as string;
    const password = formData.get("password") as string;

    const user = await prisma.user.findUnique({
      where: { studentId },
    });

    if (!user) {
      throw new Error("Invalid student id or password!");
    }

    const valid = await compareHashes(password, user.password);

    if (!valid) {
      throw new Error("Invalid student id or password!");
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);

    const token = await new jose.SignJWT({
      id: user.id,
      studentId,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);

    process.env.NEXT_PUBLIC_SECRET_KEY,
      {
        expiresIn: "2h",
      };

    cookies().set("token", token, {
      expires: Date.now() + 60 * 60 * 2 * 1000,
    });

    return {
      error: "",
      success: true,
    };
  } catch (err: any) {
    return {
      error: err.message as string,
      success: false,
    };
  }
}
