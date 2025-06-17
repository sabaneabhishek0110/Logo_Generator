import { useSelector, useDispatch } from 'react-redux'
import { updateShape } from '../../app/features/logo/logoSlice'

const shapes = [
  { id: 'none', name: 'None' },
  { id: 'circle', name: 'Circle' },
  { id: 'square', name: 'Square' },
  { id: 'rounded', name: 'Rounded' },
]

const ShapeStep = () => {
  const dispatch = useDispatch()
  const shape = useSelector((state) => state.logo.shape)
  const primaryColor = useSelector((state) => state.logo.primaryColor)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Choose Background Shape</h2>
      
      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {shapes.map((item) => {
          const isSelected = shape === item.id

          return (
            <button
              key={item.id}
              onClick={() => dispatch(updateShape(item.id))}
              className={`transition-all transform p-4 rounded-xl w-full h-32 flex flex-col items-center justify-between text-center shadow-sm
                ${isSelected
                  ? 'border-2 border-blue-500 bg-blue-100 scale-105 shadow-md'
                  : 'border border-gray-200 hover:border-blue-400 hover:scale-105'}`}
            >
              <div className="w-44 h-20 flex items-center justify-center">
                {item.id === 'none' && (
                  <div className="text-gray-500 text-sm">No shape</div>
                )}
                {item.id === 'circle' && (
                  <div
                    className="w-16 h-16 rounded-full"
                    style={{ backgroundColor: primaryColor, opacity: 0.6 }}
                  ></div>
                )}
                {item.id === 'square' && (
                  <div
                    className="w-16 h-16"
                    style={{ backgroundColor: primaryColor, opacity: 0.6 }}
                  ></div>
                )}
                {item.id === 'rounded' && (
                  <div
                    className="w-16 h-16 rounded-lg"
                    style={{ backgroundColor: primaryColor, opacity: 0.6 }}
                  ></div>
                )}
              </div>
              <span className={`mt-2 text-sm font-medium ${isSelected ? 'text-blue-700' : 'text-gray-800'}`}>
                {item.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ShapeStep
