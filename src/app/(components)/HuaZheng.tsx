"use client";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
export default function HuaZheng() {
  return (
    <>
      <div className="w-[40rem] h-screen ps-10 flex flex-col justify-center">
        <h1 className="text-white text-xl font-semibold tracking-wider">
          Database Administrator
        </h1>
        <h1 className="text-[3rem] font-bold text-blue-400 tracking-wider my-8">
          Ling Hua Zheng
        </h1>
        <p className="text-white text-md font-extralight text-justify">
          Ling Hua Zheng is our data guardian, sculpting a sturdy foundation for
          our digital world. With an artful touch, Hua Zheng designs databases
          that dance with efficiency and security. She keeps watch, defending
          against digital foes, and has a contingency plan for every storm,
          ensuring our data remains safe and sound.
        </p>

        <div className="flex gap-10 mt-10">
          <FacebookIcon color="white" size={38} />
          <Instagram color="white" size={38} />
          <Twitter color="white" size={38} />
        </div>
      </div>

      <div className="absolute right-[5rem] top-[5rem] bottom-0 w-[35rem] bg-[url('/huazheng-2.png')] bg-cover bg-no-repeat bg-center"></div>
    </>
  );
}
