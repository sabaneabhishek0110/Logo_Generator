import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  primaryColor: '#3b82f6',
  fontStyle: 'sans-serif',
  icon: '🚀',
  iconPrompt: '',
  shape: 'circle',
  layout: 'above',
  currentStep: 1,
  brandName: 'My Logo',
}

export const logoSlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    updateColor: (state, action) => { state.primaryColor = action.payload },
    updateFont: (state, action) => { state.fontStyle = action.payload },
    updateIcon: (state, action) => { state.icon = action.payload },
    updateShape: (state, action) => { state.shape = action.payload },
    updateLayout: (state, action) => { state.layout = action.payload },
    updateStep: (state, action) => { state.currentStep = action.payload },
    updateIconPrompt: (state, action) => { state.iconPrompt = action.payload},
    updateBrandName: (state, action) => { state.brandName = action.payload},
  }
})

export const { 
  updateColor, 
  updateFont, 
  updateIcon, 
  updateShape, 
  updateLayout, 
  updateStep ,
  updateIconPrompt,
  updateBrandName
} = logoSlice.actions

export default logoSlice.reducer