function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-xl text-gray-700">Loading earthquake data...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
