export default function AboutSkeleton() {
  return (
    <div className="text-white p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-7xl mx-auto animate-pulse">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-700 rounded mb-4" style={{ width: `${[75, 100, 83, 80][i]}%` }} />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl bg-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square" />
        </div>
      </div>
      <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto mb-6" />
        <div className="space-y-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
