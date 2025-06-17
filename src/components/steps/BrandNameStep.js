'use client'
import { useDispatch, useSelector } from 'react-redux'
import { updateBrandName } from '@/app/features/logo/logoSlice'
import { useEffect, useState } from 'react'

export default function BrandNameStep() {
  const dispatch = useDispatch()
  const brandName = useSelector(state => state.logo.brandName)
  const [localName, setLocalName] = useState(brandName)
  const [isDirty, setIsDirty] = useState(false)

  // Sync with Redux only after debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (isDirty) {
        dispatch(updateBrandName(localName))
      }
    }, 300)

    return () => clearTimeout(handler)
  }, [localName, dispatch, isDirty])

  const handleChange = (e) => {
    setLocalName(e.target.value)
    setIsDirty(true)
  }

  const isInvalid = isDirty && localName.trim().length === 0

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Brand Name</h2>
        <p className="text-gray-500 text-center">This will appear in your logo design</p>
      </div>

      <div className="space-y-2">
        <input
          type="text"
          value={localName}
          onChange={handleChange}
          onBlur={() => dispatch(updateBrandName(localName))}
          placeholder="e.g., Acme Corp"
          className={`w-full px-4 py-3 border rounded-lg shadow-sm transition-all
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${isInvalid ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'}`}
          maxLength={30}
        />
        
        {isInvalid && (
          <p className="text-red-500 text-sm">Brand name cannot be empty</p>
        )}
        
        <div className="flex justify-between text-xs text-gray-400">
          <span>Max 30 characters</span>
          <span>{localName.length}/30</span>
        </div>
      </div>

      {brandName && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800">Preview:</h3>
          <p className="text-lg font-semibold text-blue-900 mt-1">{brandName}</p>
        </div>
      )}
    </div>
  )
}