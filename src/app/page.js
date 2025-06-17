'use client'

import { useSelector, useDispatch } from 'react-redux'
import { updateStep } from '@/app/features/logo/logoSlice'
import ProgressSteps from '@/components/ProgressSteps'
import ColorStep from '@/components/steps/ColorStep'
import IconStep from '@/components/steps/IconStep'
import FontStep from '@/components/steps/FontStep'
import LayoutStep from '@/components/steps/LayoutStep'
import PreviewStep from '@/components/steps/PreviewStep'
import ShapeStep from '@/components/steps/ShapeStep'
import BrandNameStep from '@/components/steps/BrandNameStep'

export default function LogoCreator() {
  const currentStep = useSelector((state) => state.logo.currentStep)
  const dispatch = useDispatch()

  const steps = [
    <BrandNameStep key="brand" />,
    <ColorStep key="color" />,
    <IconStep key="icon" />,
    <FontStep key="font" />,
    <ShapeStep key="shape"/>,
    <PreviewStep key="preview" />,
  ]

  return (
    <main className="h-screen flex flex-col items-center justify-between py-6 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Create Your Logo
      </h1>

      {/* Progress Bar */}
      <div className="w-full mb-4">
        <ProgressSteps />
      </div>

      {/* Step Section */}
      <div className="w-full flex-1 shadow-md rounded-xl pb-3">
        {steps[currentStep - 1]}
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-between items-center mt-6">
        {currentStep > 1 ? (
          <button
            onClick={() => dispatch(updateStep(currentStep - 1))}
            className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 border border-gray-300 transition-all"
          >
            ⬅ Back
          </button>
        ) : (
          <div />
        )}

        {currentStep < steps.length && (
          <button
            onClick={() => dispatch(updateStep(currentStep + 1))}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition-all"
          >
            Next ➡
          </button>
        )}
      </div>
    </main>
  )
}
