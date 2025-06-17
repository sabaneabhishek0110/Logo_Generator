'use client'
import { useSelector } from 'react-redux'

const steps = ['Name','Design', 'Icons', 'Style', 'Shape']

export default function ProgressSteps() {
  const currentStep = useSelector(state => state.logo.currentStep)
  
  return (
    <div className="flex justify-between mb-12 max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center 
            ${currentStep > index + 1 ? 'bg-green-500 text-white' : 
              currentStep === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
            {index + 1}
          </div>
          <span className={`mt-2 text-sm ${currentStep === index + 1 ? 'font-bold' : ''}`}>
            {step}
          </span>
          {index < steps.length  && (
            <div className={`h-1 w-16 mt-4 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  )
}