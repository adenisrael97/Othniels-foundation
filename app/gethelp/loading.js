export default function GetHelpLoading() {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-[50vh] bg-gray-200 flex flex-col items-center justify-center gap-4 px-4">
        <div className="h-10 bg-white/30 rounded-xl w-64" />
        <div className="h-5 bg-white/20 rounded-lg w-96 max-w-full" />
        <div className="h-12 bg-orange-200 rounded-full w-48 mt-4" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-6">
        <div className="h-8 bg-orange-100 rounded w-48 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
