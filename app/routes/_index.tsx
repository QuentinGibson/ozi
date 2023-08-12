import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useOptionalUser } from "~/utils";
import Splitter from "~/components/Splitter";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const [state, setState] = useState<string>("loading") 
  const user = useOptionalUser();
  useEffect(() => {
    setTimeout(() => {
      setState('intro')
    },1000)
  })
  return (
    <main className={clsx( state === 'loading' && 'loading' )}>
      <div className="intro h-screen bg-black">
        {state === 'intro' && 
          <div className="h-full w-full flex justify-center items-center text-white">
          <Splitter word="DOPE"/>
        </div>
      }
      </div>
    </main>
  );
}
