"use client";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
export default function XueJou() {
  return (
    <>
      <div className="w-[40rem] h-screen ps-10 flex flex-col justify-center">
        <h1 className="text-white text-xl font-semibold tracking-wider">
          System Analyst
        </h1>
        <h1 className="text-[3rem] font-bold text-purple-400 tracking-wider my-8">
          Chng Xue Jou
        </h1>
        <p className="text-white text-md font-extralight text-justify">
          Chng Xue Jou, our system visionary, play a crucial role in the
          development and enhancement of information systems. Responsibilities
          include collaborating with stakeholders to gather and document
          detailed requirements for system design, evaluating existing systems
          for improvement, conducting feasibility studies for proposed
          solutions, and creating comprehensive documentation such as system
          specifications, user manuals, and process flow diagrams. She bridge
          the gap between technical and non-technical stakeholders to ensure
          effective communication and successful system development.
        </p>

        <div className="flex gap-10 mt-10">
          <FacebookIcon color="white" size={38} />
          <Instagram color="white" size={38} />
          <Twitter color="white" size={38} />
        </div>
      </div>

      <div className="absolute brightness-105 right-[5rem] top-[5rem] bottom-0 w-[40rem] bg-[url('/xj-2.png')] bg-cover bg-no-repeat bg-center"></div>
    </>
  );
}
