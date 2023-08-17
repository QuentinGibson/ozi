export default function Warning() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-8 border border-white p-4">
        <h3 className="text-red-600">Warning</h3>
        <p className="text-sm">
          This site will play loud music. Mute this site if you don't want to
          hear it.
        </p>
        <button className="bg-red-500 px-6 py-2">Play the loud music</button>
      </div>
    </div>
  );
}
