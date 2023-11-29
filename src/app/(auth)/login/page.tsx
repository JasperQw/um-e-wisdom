"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { login } from "./(actions)/loginAction";
import { useEffect, useRef } from "react";
import ErrorAlert from "./(components)/errorAlert";
import SubmitBtn from "./(components)/submitBtn";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [loginState, loginAction] = useFormState(login, {
    error: "",
    success: false,
  });

  useEffect(() => {
    if (loginState.success) {
      router.push("/profile");
    }
  }, [loginState]);
  return (
    <div className="flex justify-center items-center w-full h-full px-5">
      <Card className="w-[40rem]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
          <ErrorAlert
            success={loginState.success}
            errorMessage={loginState.error}
          />
        </CardHeader>

        <form action={loginAction} ref={formRef}>
          <CardContent>
            <div>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="student_id">Student ID</Label>
                  <Input
                    name="student_id"
                    id="student_id"
                    placeholder="Exp: 22004844"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="link">
              Forget Password?
            </Button>
            <SubmitBtn />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
