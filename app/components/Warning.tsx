import { Link } from "@remix-run/react";

export default function Warning() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-8 border border-white p-4">
        <h3 className="text-center text-2xl text-red-600">Warning</h3>
        <p className="text-md">
          This site will play loud music. Mute this site if you don't want to
          hear it.
        </p>
        <Link to={"home"} className="bg-red-500 px-6 py-2 text-center">
          Play the loud music
        </Link>
      </div>
    </div>
  );
}
