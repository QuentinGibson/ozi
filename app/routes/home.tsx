import { Link } from "@remix-run/react";
import { BsGithub } from "react-icons/bs";
export default function HomeRoute() {
  const quentingithuburl = "https://github.com/QuentinGibson";
  return (
    <main className="relative mt-4 h-full w-full">
      <div className="mx-8 ml-4 flex items-center justify-between text-white">
        <h2 className="text-3xl">Quentin Gibson</h2>
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
      <div className="fixed left-0 top-0 -z-50 flex h-full w-full items-center justify-center">
        <h1 className="text-9xl text-white">BLACK</h1>
      </div>
    </main>
  );
}
