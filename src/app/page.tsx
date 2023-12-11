"use client";

import ChingWei from "./(components)/ChingWei";
import Typewriter from "typewriter-effect";
import MemberCard from "./(components)/MemberCard";
import KaLok from "./(components)/KaLok";
import HuaZheng from "./(components)/HuaZheng";
import XueJou from "./(components)/XueJou";
import ShuCi from "./(components)/ShuCi";

export default function Home() {
  return (
    <main className="relative bg-[url('/dark-gradient.jpeg')] overflow-x-hidden h-[100vh] snap-y snap-mandatory">
      <div className="inset-0 absolute flex justify-start px-[4rem] tracking-tight">
        <div className="h-[4rem] flex gap-3 items-center font-semibold text-xl text-white z-[999]">
          <a href={"/book"}>UM e-Wisdom</a>
        </div>
      </div>
      <section className="snap-center snap-mandatory h-screen w-full flex flex-col justify-center items-center relative">
        <div className="drop-shadow-[0_35px_35px_rgba(123,123,123,0.8)] w-full h-[10rem] pb-[5rem] top-[5rem] text-white z-[9999] text-5xl text-center font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<span style='text-shadow: 0px 0px 10px rgba(52, 152, 219, 0.9);'>Meet Our Team<span />"
                )
                .start();
            }}
          />
        </div>

        <div className="w-full flex justify-center px-5 gap-10">
          <MemberCard
            scrollId="kalok"
            name="Yeep Ka Lok"
            title="Project Manager"
          />
          <MemberCard
            scrollId="chingwei"
            name="Ng Ching Wei"
            title="Software Developer"
          />
          <MemberCard
            scrollId="huazheng"
            name="Ling Hua Zheng"
            title="Database Administrator"
          />
          <MemberCard
            scrollId="xuejou"
            name="Chng Xue Jou"
            title="System Analyst"
          />
          <MemberCard
            scrollId="shuci"
            name="Heng Shu Ci"
            title="UI/UX Designer"
          />
        </div>
      </section>
      <section id="kalok" className="snap-center h-screen w-full relative">
        <KaLok />
      </section>
      <section id="chingwei" className="snap-center h-screen w-full relative">
        <ChingWei />
      </section>
      <section id="huazheng" className="snap-center h-screen w-full relative">
        <HuaZheng />
      </section>
      <section id="xuejou" className="snap-center h-screen w-full relative">
        <XueJou />
      </section>
      <section id="shuci" className="snap-center h-screen w-full relative">
        <ShuCi />
      </section>
    </main>
  );
}
