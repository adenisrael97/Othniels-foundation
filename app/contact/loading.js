export default function ContactLoading() {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-[40vh] bg-gray-200 flex flex-col items-center justify-center gap-4 px-4">
        <div className="h-10 bg-white/30 rounded-xl w-56" />
        <div className="h-5 bg-white/20 rounded-lg w-80 max-w-full" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-xl w-full" />
          ))}
          <div className="h-32 bg-gray-100 rounded-xl w-full" />
          <div className="h-12 bg-orange-100 rounded-xl w-40" />
        </div>
        <div className="h-80 bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
}
