"use client";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
export default function ShuCi() {
  return (
    <>
      <div className="w-[40rem] h-screen ps-10 flex flex-col justify-center">
        <h1 className="text-white text-xl font-semibold tracking-wider">
          UI/UX Designer
        </h1>
        <h1 className="text-[3rem] font-bold text-green-400 tracking-wider my-8">
          Heng Shu Ci
        </h1>
        <p className="text-white text-md font-extralight text-justify">
          Heng Shu Ci, our design virtuoso, transforms ideas into captivating
          visuals. She responsible for creating visually appealing interfaces by
          conducting user research, developing unique graphic designs, and
          crafting prototypes to showcase application functionality. In
          addition, gather and integrate feedback from product managers and team
          members to ensure responsive designs across various devices, actively
          contributing to a dynamic design process.
        </p>

        <div className="flex gap-10 mt-10">
          <FacebookIcon color="white" size={38} />
          <Instagram color="white" size={38} />
          <Twitter color="white" size={38} />
        </div>
      </div>

      <div className="absolute right-[5rem] top-[5rem] bottom-0 w-[40rem] bg-[url('/chingwei-3.png')] bg-cover bg-no-repeat bg-center"></div>
    </>
  );
}
