export default function AboutLoading() {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-[60vh] bg-gray-200 flex flex-col items-center justify-center gap-4 px-4">
        <div className="h-10 bg-white/30 rounded-xl w-64" />
        <div className="h-5 bg-white/20 rounded-lg w-96 max-w-full" />
        <div className="h-5 bg-white/20 rounded-lg w-80 max-w-full" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-6">
        <div className="h-8 bg-orange-100 rounded w-48 mx-auto" />
        <div className="h-5 bg-gray-100 rounded w-full" />
        <div className="h-5 bg-gray-100 rounded w-5/6" />
        <div className="h-5 bg-gray-100 rounded w-4/5" />
      </div>
    </div>
  );
}
