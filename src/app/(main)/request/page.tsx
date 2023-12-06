"use client";

import { Separator } from "@/components/ui/separator";
import Sidebar from "./(components)/Sidebar";
import Comments from "./(components)/Comments";
import ILLBookRequest from "./(components)/ILLBookRequest";
import { useState } from "react";
import PublicationSupply from "./(components)/PublicationSupply";
import AdditionalCopies from "./(components)/AdditionalCopies";
import SuggestionBox from "./(components)/SuggestionBox";

export default function Request() {
  const TabDictionary = {
    comments: <Comments />,
    illbookrequest: <ILLBookRequest />,
    publicationSupply: <PublicationSupply />,
    additionalCopies: <AdditionalCopies />,
    suggestionBox: <SuggestionBox />,
  };
  const [current, setCurrent] = useState<
    | "comments"
    | "illbookrequest"
    | "publicationSupply"
    | "additionalCopies"
    | "suggestionBox"
  >("comments");

  return (
    <>
      <div className={` w-full`}>
        <div className={`h-full w-full p-10`}>
          <div>
            <h1 className="text-lg font-[500]">Request</h1>
            <p className="text-sm font-[300] tracking-wide">
              Send us your request or feedback.
            </p>
          </div>
          <Separator className="my-8" />
          <div className="flex space-x-10">
            <Sidebar current={current} setCurrent={setCurrent} />
            {TabDictionary[current]}
          </div>
        </div>
      </div>
    </>
  );
}
