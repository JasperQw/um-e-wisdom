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
    <div className="flex items-center w-full h-full">
      <div className="relative w-full h-full flex-1 bg-[url('/um-library.jpeg')] bg-cover bg-left">
        <div className="inset-0 absolute flex justify-start px-[4rem] tracking-tight bg-black bg-opacity-50">
          <div className="h-[4rem] flex gap-3 items-center font-semibold text-xl text-white ">
            <a href={"/book"}> UM e-Wisdom</a>
          </div>
        </div>
      </div>
      <Card className="w-1/2 h-full flex flex-col justify-center items-center rounded-none border-none flex-1">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
          <ErrorAlert
            success={loginState.success}
            errorMessage={loginState.error}
          />
        </CardHeader>

        <form className="w-[30rem]" action={loginAction} ref={formRef}>
          <CardContent>
            <div>
              <div className="grid w-full gap-4">
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
          <CardFooter className="flex flex-col w-full space-y-2">
            <SubmitBtn />
            <Button className="w-full" type="button" variant="link">
              Forget Password?
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
