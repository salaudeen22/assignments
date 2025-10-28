function FilterPanel({ selectedMagnitude, onMagnitudeChange, earthquakes, onRefresh }) {
  return (
    <div className="bg-white border-b shadow-sm p-3">
      <div className="container mx-auto flex flex-wrap items-center gap-2">
        <label className="font-semibold text-gray-700">Filter by Magnitude:</label>
        <select
          value={selectedMagnitude}
          onChange={(e) => onMagnitudeChange(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Magnitudes ({earthquakes.length})</option>
          <option value="5+">5.0+ ({earthquakes.filter(e => e.properties.mag >= 5).length})</option>
          <option value="4-5">4.0 - 4.9 ({earthquakes.filter(e => e.properties.mag >= 4 && e.properties.mag < 5).length})</option>
          <option value="3-4">3.0 - 3.9 ({earthquakes.filter(e => e.properties.mag >= 3 && e.properties.mag < 4).length})</option>
          <option value="2-3">2.0 - 2.9 ({earthquakes.filter(e => e.properties.mag >= 2 && e.properties.mag < 3).length})</option>
          <option value="<2">&lt; 2.0 ({earthquakes.filter(e => e.properties.mag < 2).length})</option>
        </select>

        <button
          onClick={onRefresh}
          className="ml-auto px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Refresh Data
        </button>
      </div>
    </div>
  )
}

export default FilterPanel
