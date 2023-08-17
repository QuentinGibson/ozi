import type { V2_MetaFunction } from "@remix-run/node";

import { clsx } from "clsx";
import { useEffect, useState } from "react";
import Warning from "~/components/Warning";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const [state, setState] = useState<string>("loading");
  useEffect(() => {
    setTimeout(() => {
      setState("intro");
    }, 1000);
  });
  return (
    <main className={clsx([state === "loading" && "loading"])}>
      <div className="h-screen bg-black">
        {state === "intro" && (
          <div className="flex h-full w-full items-center justify-center text-white">
            <Warning />
          </div>
        )}
      </div>
    </main>
  );
}
