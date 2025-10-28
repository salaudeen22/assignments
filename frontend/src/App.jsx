import { useState, useEffect } from 'react'
import Header from './components/Header'
import FilterPanel from './components/FilterPanel'
import Legend from './components/Legend'
import MapView from './components/MapView'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [earthquakes, setEarthquakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedMagnitude, setSelectedMagnitude] = useState('all')

  useEffect(() => {
    fetchEarthquakes()
  }, [])

  const fetchEarthquakes = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
      )

      if (!response.ok) {
        throw new Error('Failed to fetch earthquake data')
      }

      const data = await response.json()
      setEarthquakes(data.features)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredEarthquakes = earthquakes.filter((eq) => {
    const mag = eq.properties.mag
    if (selectedMagnitude === 'all') return true
    if (selectedMagnitude === '5+') return mag >= 5
    if (selectedMagnitude === '4-5') return mag >= 4 && mag < 5
    if (selectedMagnitude === '3-4') return mag >= 3 && mag < 4
    if (selectedMagnitude === '2-3') return mag >= 2 && mag < 3
    if (selectedMagnitude === '<2') return mag < 2
    return true
  })

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={fetchEarthquakes} />
  }

  return (
    <div className="h-screen flex flex-col">
      <Header earthquakeCount={filteredEarthquakes.length} />
      <FilterPanel
        selectedMagnitude={selectedMagnitude}
        onMagnitudeChange={setSelectedMagnitude}
        earthquakes={earthquakes}
        onRefresh={fetchEarthquakes}
      />
      <Legend />
      <MapView earthquakes={filteredEarthquakes} />
    </div>
  )
}

export default App
