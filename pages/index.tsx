export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <header className="fixed top-0 left-0 py-3 w-full shadow-md shadow-gray-500/10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="logo flex items-center space-x-1">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <h1 className="font-bold text-3xl font-serif">Medio</h1>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto pt-20 px-4">Home</div>
    </div>
  );
}
