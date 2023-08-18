import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Past from "~/components/Past";
export default function HomeRoute() {
  const quentingithuburl = "https://github.com/QuentinGibson";
  const h1 = useRef<HTMLHeadingElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const setToBlack = () => {
    if (h1.current) {
      setHeaderColor("black");
    }
  };

  const setToGreen = () => {
    if (h1.current) {
      setHeaderColor("green");
    }
  };

  const subWooferAnimation = () => {
    if (h1.current) {
      h1.current.style.animation = "subwooferWobbleAnimation 0.3s infinite";
    }
  };

  const thumbAnimation = () => {
    if (h1.current) {
      h1.current.style.animation = "thump 0.1s linear alternate";
    }

    h1.current?.addEventListener("animationend", handleAnimationEnd);
  };

  const combinedAnimation = () => {
    if (h1.current) {
      h1.current.style.animation = "combinedAnimation 0.3s infinite";
    }
  };

  const handleAnimationEnd = () => {
    if (h1.current) {
      h1.current.style.animation = "";
    }

    h1.current?.removeEventListener("animationend", handleAnimationEnd);
  };

  const setHeaderColor = (color: string) => {
    if (h1.current) {
      h1.current.style.color = color;
    }
  };

  return (
    <main className="relative mt-4 h-full w-full">
      <div className="mx-8 ml-8 flex items-center justify-between text-white">
        <h2 className="text-4xl">quentmadeit</h2>
        <div className="text-4xl">
          <Link
            className="hover:text-gray-400"
            to={quentingithuburl}
            target="_blank"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
      <Past />
      <div className="fixed left-0 top-0 -z-50 flex h-full w-full items-center justify-center ">
        <h1
          ref={h1}
          className={clsx([
            "font-outline-2 static-heading -z-40  text-[30vw] text-transparent",
            backgroundImage === "image" && "bg-[url('/tv-static.gif')]",
            backgroundImage === "gradient" &&
              "bg-gradient-to-b from-red-600 from-20% via-yellow-500 to-green-500",
          ])}
        >
          BLACK
        </h1>
      </div>
      <div id="debugger" className="fixed bottom-0 mx-10 mb-10 flex gap-2">
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => setHeaderColor("red")}
        >
          Red
        </button>

        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => setHeaderColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => setHeaderColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => setHeaderColor("white")}
        >
          White
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={thumbAnimation}
        >
          Thumb
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={subWooferAnimation}
        >
          Subwoofer
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={combinedAnimation}
        >
          Combined
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={setToBlack}
        >
          Black
        </button>

        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => {
            setHeaderColor("transparent");
            setBackgroundImage("gradient");
          }}
        >
          Gradient
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => {
            setHeaderColor("transparent");
            setBackgroundImage("image");
          }}
        >
          Image
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={() => setHeaderColor("transparent")}
        >
          Transparent
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={setToGreen}
        >
          Green
        </button>
        <button
          className="bg-gray-700 px-4 py-2 text-white"
          onClick={handleAnimationEnd}
        >
          Stop
        </button>
      </div>
    </main>
  );
}
