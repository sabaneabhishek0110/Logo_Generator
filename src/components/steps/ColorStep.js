import { useSelector, useDispatch } from 'react-redux'
import { updateColor } from '../../app/features/logo/logoSlice'

const ColorStep = () => {
  const dispatch = useDispatch()
  const primaryColor = useSelector((state) => state.logo.primaryColor)

  const colors = [
    '#3b82f6', // blue-500
    '#ef4444', // red-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#8b5cf6', // violet-500
  ]

  return (
    <div className="p-4 flex flex-col items-center text-center">
      {/* Centered Title */}
      <h2 className="text-2xl font-bold mb-6 text-white">Choose Primary Color</h2>

      {/* 1x5 Grid of Color Squares */}
      <div className="grid grid-cols-5 gap-20 mb-8">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => dispatch(updateColor(color))}
            className={`w-16 h-16 rounded-md shadow-md transition-all duration-300 
              outline-4 outline-white
              ${
                primaryColor === color
                  ? 'ring-4 ring-offset-2 ring-gray-400 scale-105'
                  : 'hover:scale-105 hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
              }`}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          ></button>
        ))}
      </div>

      {/* Custom Color Picker */}
      <div className="mt-6">
        <label htmlFor="customColor" className="block text-sm font-semibold text-gray-700 mb-2">
          Or pick a custom color:
        </label>
        <div className="flex items-center justify-center gap-4">
          <input
            type="color"
            id="customColor"
            value={primaryColor}
            onChange={(e) => dispatch(updateColor(e.target.value))}
            className="w-16 h-16 rounded-md shadow-inner border border-gray-300 cursor-pointer"
          />
          <span className="font-mono text-lg">{primaryColor}</span>
        </div>
      </div>
    </div>
  )
}

export default ColorStep
