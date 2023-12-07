"use client";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
export default function KaLok() {
  return (
    <>
      <div className="w-[40rem] h-screen ps-10 flex flex-col justify-center">
        <h1 className="text-white text-xl font-semibold tracking-wider">
          Project Manager
        </h1>
        <h1 className="text-[3rem] font-bold text-orange-400 tracking-wider my-8">
          Yeep Ka Lok
        </h1>
        <p className="text-white text-md font-extralight text-justify">
          Yeep Ka Lok is our project captain, steering us through the digital
          seas. With a keen eye for detail and a knack for organization, Ka Lok
          crafts our project&apos;s blueprint, sets sail with a well-defined
          plan, and keeps our crew on course. Regular meetings and meticulous
          documentation are the wind in his sails as he ensures we reach our
          destination on time and on budget.
        </p>

        <div className="flex gap-10 mt-10">
          <FacebookIcon color="white" size={38} />
          <Instagram color="white" size={38} />
          <Twitter color="white" size={38} />
        </div>
      </div>

      <div className="absolute right-[5rem] top-[5rem] bottom-0 w-[40rem] bg-[url('/kalok-1.png')] bg-cover bg-no-repeat bg-center"></div>
    </>
  );
}
