import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useOptionalUser } from "~/utils";
import Splitter from "~/components/Splitter";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true) 
  const user = useOptionalUser();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },1000)
  })
  return (
    <main className={clsx( isLoading && 'loading' )}>
      <div className="intro h-screen bg-black">
        <div className="h-full w-full flex justify-center items-center text-white">
          <Splitter word="Summer 22"/>
        </div>
      </div>
    </main>
  );
}
