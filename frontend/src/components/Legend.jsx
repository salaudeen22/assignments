function Legend() {
  const legendItems = [
    { color: '#66bb6a', label: '< 2.0' },
    { color: '#9ccc65', label: '2.0-2.9' },
    { color: '#fdd835', label: '3.0-3.9' },
    { color: '#ffa000', label: '4.0-4.9' },
    { color: '#ff6f00', label: '5.0-5.9' },
    { color: '#d32f2f', label: '6.0+' },
  ]

  return (
    <div className="bg-gray-50 border-b p-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
          <span className="font-semibold text-gray-700">Legend:</span>
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Legend
