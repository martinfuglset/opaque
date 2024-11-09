export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <main className="flex flex-col items-center gap-8">
        <p className="text-white text-lg tracking-tight">Opaque Studio</p>
        <a href="mailto:fuglsetm@gmail.com">
          <button className="px-4 py-2 border border-gray-500 text-gray-300 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Contact
          </button>
        </a>
      </main>
    </div>
  );
}