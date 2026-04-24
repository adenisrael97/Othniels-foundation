export default function DonateLoading() {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-[40vh] bg-gray-200 flex flex-col items-center justify-center gap-4 px-4">
        <div className="h-10 bg-white/30 rounded-xl w-56" />
        <div className="h-5 bg-white/20 rounded-lg w-80 max-w-full" />
      </div>
      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-5">
        <div className="h-8 bg-orange-100 rounded w-40 mx-auto" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-14 bg-gray-100 rounded-xl w-full" />
        ))}
        <div className="h-14 bg-orange-200 rounded-xl w-full mt-4" />
      </div>
    </div>
  );
}
