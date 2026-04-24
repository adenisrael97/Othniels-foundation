export default function GalleryLoading() {
  return (
    <div className="w-full min-h-screen py-16 px-4 animate-pulse">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="h-12 bg-orange-100 rounded-xl w-48 mx-auto mb-4" />
        <div className="h-6 bg-gray-100 rounded-lg w-full mb-2" />
        <div className="h-6 bg-gray-100 rounded-lg w-3/4 mx-auto" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-gray-200 aspect-square" />
        ))}
      </div>
    </div>
  );
}
