"use client";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
export default function ChingWei() {
  return (
    <>
      <div className="w-[40rem] h-screen ps-10 flex flex-col justify-center">
        <h1 className="text-white text-xl font-semibold tracking-wider">
          Software Developer
        </h1>
        <h1 className="text-[3rem] font-bold text-red-400 tracking-wider my-8">
          Ng Ching Wei
        </h1>
        <p className="text-white text-md font-extralight text-justify">
          Ng Ching Wei, our code maestro, weaves the fabric of our digital
          dreams. Armed with logic and precision, Ching Wei translates ideas
          into lines of code. Bugs dare not linger in his presence, and security
          is woven into every line. His creations are not just functional;
          they&apos;re a symphony of innovation.
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
