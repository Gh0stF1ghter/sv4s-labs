import { createSlice } from '@reduxjs/toolkit'

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    value: false
  },
  reducers: {
    toggleDropdown: state => {
      if(state.value) state.value = false
      else  state.value = true
        
    },

    removeDropdown: state => {
      state.value = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggleDropdown, removeDropdown } = dropdownSlice.actions

export default dropdownSlice.reducer