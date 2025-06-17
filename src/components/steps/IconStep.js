'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIcon } from '../../app/features/logo/logoSlice'

const icons = [
  { 
    name: 'None', 
    value: null 
  },
  { 
    name: 'Building', 
    svg: '<svg viewBox="0 0 24 24"><path d="M19 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 18H6v-4h12v4zm0-6H6v-4h12v4zm0-6H6V4h12v4z" fill="currentColor"/></svg>'
  },
  {
    name: 'Briefcase',
    svg: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/></svg>'
  },
  {
    name: 'Diamond',
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2zm0 2.8L19.2 12 12 19.2 4.8 12 12 4.8z" fill="currentColor"/></svg>'
  },
  {
    name: 'Anchor',
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm-5 4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm10 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm-5 2a4 4 0 0 0-4 4v1h2v-1a2 2 0 0 1 4 0v1h2v-1a4 4 0 0 0-4-4zm-7 4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z" fill="currentColor"/></svg>'
  },
  {
    name: 'Leaf',
    svg: '<svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.2 4 20c2-3 6-5 10-5-4 4-6 8-6 8s3-3 7-5c0 0 5 3 7 5 0 0-1-9-3-13-2-2-6-3-9-2z" fill="currentColor"/></svg>'
  },
  {
    name: 'Rocket',
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2.5s4.5 2 4.5 10.5c0 3-1 5-1 5H9s-1-2-1-5C8 4.5 12 2.5 12 2.5zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6 15s-1 1-1 3 1 3 1 3h2v-2s-1-1-2-4zm12 0s1 1 1 3-1 3-1 3h-2v-2s1-1 2-4z" fill="currentColor"/></svg>'
  },
  {
    name: 'Shield',
    svg: '<svg viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3zm0 2.2l6 2.3v4.5c0 4-2.6 8.3-6 9.5-3.4-1.2-6-5.5-6-9.5V6.5l6-2.3z" fill="currentColor"/></svg>'
  }
]

const IconStep = () => {
  const dispatch = useDispatch()
  const selectedIcon = useSelector((state) => state.logo.icon)
  const [isGenerating, setIsGenerating] = useState(false)

  return (
  <div className="space-y-6">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">Select an Icon</h2>
      <p className="text-gray-500 mt-1">Choose a professional symbol for your brand</p>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {icons.map((icon) => (
        <button
          key={icon.name}
          onClick={() => dispatch(updateIcon(icon.svg))}
          className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all
            ${selectedIcon === icon.svg 
              ? 'border-black bg-gray-100' 
              : 'border-gray-200 hover:border-gray-300'}`}
        >
          <div 
            className={`w-10 h-10 mb-2 [&>svg]:w-full [&>svg]:h-full ${
              selectedIcon === icon.svg ? 'text-black' : 'text-gray-600'
            }`}
            dangerouslySetInnerHTML={{ __html: icon.svg || '<div class="w-10 h-10"></div>' }}
          />
          <span className={`text-sm font-medium ${
            selectedIcon === icon.svg ? 'text-black font-semibold' : 'text-gray-700'
          }`}>
            {icon.name}
          </span>
        </button>
      ))}
    </div>
  </div>
)
}

export default IconStep
