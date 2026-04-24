export default function ProgramsLoading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero skeleton */}
      <div className="w-full h-[60vh] bg-gray-200 flex flex-col items-center justify-center gap-4 px-4">
        <div className="h-10 bg-white/30 rounded-xl w-48" />
        <div className="h-5 bg-white/20 rounded-lg w-96 max-w-full" />
        <div className="h-5 bg-white/20 rounded-lg w-80 max-w-full" />
        <div className="h-12 bg-orange-200 rounded-full w-48 mt-4" />
      </div>

      {/* Stats skeleton */}
      <div className="w-full py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2 border-t-4 border-orange-200 pt-4">
              <div className="h-9 bg-orange-100 rounded w-20" />
              <div className="h-4 bg-gray-100 rounded w-28" />
            </div>
          ))}
        </div>
      </div>

      {/* Programs grid skeleton */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="h-8 bg-orange-100 rounded w-40 mx-auto mb-4" />
        <div className="h-5 bg-gray-100 rounded w-96 max-w-full mx-auto mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100">
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-5 flex flex-col gap-3">
                <div className="h-5 bg-orange-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
