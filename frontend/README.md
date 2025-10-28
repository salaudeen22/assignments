# Earthquake Tracker

A real-time earthquake visualization application that displays seismic activity from around the world on an interactive map.

## Features

- **Live Data**: Fetches real-time earthquake data from the USGS Earthquake API
- **Interactive Map**: View earthquakes on an interactive map powered by Leaflet
- **Magnitude Filtering**: Filter earthquakes by magnitude ranges (5+, 4-5, 3-4, 2-3, <2)
- **Visual Legend**: Color-coded markers based on earthquake magnitude
- **Responsive Design**: Built with Tailwind CSS for a responsive user experience

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Leaflet** - Interactive maps
- **React Leaflet** - React components for Leaflet
- **Tailwind CSS** - Styling
- **USGS Earthquake API** - Data source

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Data Source

This application uses the [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to fetch real-time earthquake data from the past 24 hours.

## License

This project is private and not licensed for public use.
