import { createSlice } from '@reduxjs/toolkit'

export const smallDropdownSlice = createSlice({
  name: 'smallDropdown',
  initialState: {
    value: false
  },
  reducers: {
    toggleSmallDropdown: state => {
      if(state.value) state.value = false
      else  state.value = true
        
    },

    removeSmallDropdown: state => {
      state.value = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggleSmallDropdown, removeSmallDropdown } = smallDropdownSlice.actions

export default smallDropdownSlice.reducer