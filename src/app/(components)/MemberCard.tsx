"use client";

export default function MemberCard({
  scrollId,
  name,
  title,
}: {
  scrollId: string;
  name: string;
  title: string;
}) {
  return (
    <div
      onClick={() => {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="cursor-pointer w-fit h-fit bg-gray-400 pt-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
    >
      <div className="relative w-[15rem] h-[15rem] flex items-end">
        <div className="h-[12rem] w-full bg-orange-400"></div>
        <div
          className={`absolute inset-0 bg-[url('/chingwei-3.png')] bg-cover bg-no-repeat bg-center`}
        ></div>
      </div>
      <div className="text-white flex flex-col justify-center items-center py-5">
        <h1 className="text-md font-bold tracking-wider">{name}</h1>
        <p className="text-xs font-light">{title}</p>
      </div>
    </div>
  );
}
