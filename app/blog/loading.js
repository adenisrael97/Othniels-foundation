export default function BlogLoading() {
  return (
    <div className="w-full py-12 px-4 animate-pulse">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="h-12 bg-orange-100 rounded-xl w-64 mx-auto mb-4" />
        <div className="h-6 bg-gray-100 rounded-lg w-full mb-2" />
        <div className="h-6 bg-gray-100 rounded-lg w-3/4 mx-auto" />
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="h-8 bg-yellow-100 rounded-lg w-48 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-orange-100 bg-white shadow">
              <div className="w-full h-80 bg-gray-200" />
              <div className="p-6 flex flex-col gap-3">
                <div className="h-4 bg-gray-100 rounded w-1/3" />
                <div className="h-7 bg-orange-100 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-full" />
                <div className="h-4 bg-gray-100 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-9 w-20 bg-orange-100 rounded-full" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow">
            <div className="w-full h-64 bg-gray-200" />
            <div className="p-5 flex flex-col gap-3">
              <div className="h-4 bg-gray-100 rounded w-1/3" />
              <div className="h-6 bg-orange-100 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
