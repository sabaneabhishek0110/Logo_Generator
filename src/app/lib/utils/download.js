import { toPng } from 'html-to-image'

export const downloadLogo = async (elementId, fileName = 'logo.png') => {
  const element = document.getElementById(elementId)
  if (!element) {
    throw new Error('Logo element not found')
  }

  try {
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2, // For high-resolution export
      backgroundColor: 'white'
    })

    const link = document.createElement('a')
    link.download = fileName
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error generating PNG:', error)
    throw new Error('Failed to generate logo image')
  }
}