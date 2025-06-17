'use client'

import { useSelector, useDispatch } from 'react-redux'
import { updateFont } from '../../app/features/logo/logoSlice'

const fonts = [
  { id: 'sans-serif', name: 'Sans Serif', class: 'font-sans' },
  { id: 'serif', name: 'Serif', class: 'font-serif' },
  { id: 'monospace', name: 'Monospace', class: 'font-mono' },
  { id: 'cursive', name: 'Cursive', class: 'font-cursive' },
]

const FontStep = () => {
  const dispatch = useDispatch()
  const fontStyle = useSelector((state) => state.logo.fontStyle)

  return (
    <div className="p-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Choose Font Style</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fonts.map((font) => (
          <label
            key={font.id}
            htmlFor={`font-${font.id}`}
            className={`border rounded-lg px-4 py-6 cursor-pointer shadow-sm hover:shadow-md transition-all text-left font-bold ${
              fontStyle === font.id
                ? 'border-blue-500 bg-blue-50 ring-2 ring-offset-1 ring-blue-300 scale-[1.02] text-blue-600'
                : 'border-gray-200 hover:border-gray-300'
            } `}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="fontStyle"
                id={`font-${font.id}`}
                checked={fontStyle === font.id}
                onChange={() => dispatch(updateFont(font.id))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 "
              />
              <span className={`ml-3 text-lg ${font.class}`}>{font.name}</span>
            </div>
            <p className={`mt-2 text-sm text-gray-600 ${font.class}`}>
              This is a preview of the {font.name} font.
            </p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default FontStep
