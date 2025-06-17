import { useSelector, useDispatch } from 'react-redux'
import { updateLayout } from '../../app/features/logo/logoSlice'

const layouts = [
  { id: 'above', name: 'Icon Above Text' },
  { id: 'left', name: 'Icon Left of Text' },
  { id: 'right', name: 'Icon Right of Text' },
  { id: 'background', name: 'Icon as Background' },
]

const LayoutStep = () => {
  const dispatch = useDispatch()
  const layout = useSelector((state) => state.logo.layout)
  const primaryColor = useSelector((state) => state.logo.primaryColor)

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Choose Layout</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {layouts.map((item) => (
          <button
            key={item.id}
            onClick={() => dispatch(updateLayout(item.id))}
            className={`p-4 border rounded-xl flex flex-col items-center transition-all transform duration-200 shadow-sm  ${
              layout === item.id
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300 scale-[1.02]'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="w-24 h-14 mb-3 flex items-center justify-center relative ">
              {item.id === 'above' && (
                <div className="flex flex-col items-center space-y-1">
                  <div
                    className="w-8 h-8"
                    style={{ color: primaryColor }}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>',
                    }}
                  />
                  <div
                    className="w-10 h-1 rounded-sm"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
              )}
              {item.id === 'left' && (
                <div className="flex items-center space-x-2">
                  <div
                    className="w-6 h-6"
                    style={{ color: primaryColor }}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>',
                    }}
                  />
                  <div
                    className="w-10 h-1 rounded-sm"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
              )}
              {item.id === 'right' && (
                <div className="flex items-center space-x-2">
                  <div
                    className="w-10 h-1 rounded-sm"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <div
                    className="w-6 h-6"
                    style={{ color: primaryColor }}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>',
                    }}
                  />
                </div>
              )}
              {item.id === 'background' && (
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
                    style={{ color: primaryColor }}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>',
                    }}
                  />
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LayoutStep
