function ErrorMessage({ error, onRetry }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
        <h2 className="font-bold text-xl mb-2">Error</h2>
        <p>{error}</p>
        <button
          onClick={onRetry}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
