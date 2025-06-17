'use client'

import { useSelector } from 'react-redux'
import { downloadLogo } from '@/app/lib/utils/download'
import { generateLogo } from '@/app/lib/utils/generateLogo'

export default function PreviewStep() {
  const logoState = useSelector((state) => state.logo)
  const svg = generateLogo(logoState)

  const handleDownload = async () => {
    try {
      await downloadLogo('logo-preview', 'my-logo.png')
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download logo. Please try again.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-h-screen overflow-hidden gap-6 p-4">
      {/* Logo Preview Box */}
      <div
        id="logo-preview"
        className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-[300px] h-[220px] flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      {/* Actions */}
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md transition-all"
        >
          Download PNG
        </button>
      </div>
    </div>
  )
}
