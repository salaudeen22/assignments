function Header({ earthquakeCount }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Earthquake Visualizer
        </h1>
        <p className="text-sm md:text-base text-blue-100">
          Displaying {earthquakeCount} earthquakes from the past 24 hours
        </p>
      </div>
    </header>
  )
}

export default Header
