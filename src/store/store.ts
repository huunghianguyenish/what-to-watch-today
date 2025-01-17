import { configureStore } from '@reduxjs/toolkit'

import homeSlice from './homeSlice.ts'

export const store = configureStore({
  reducer: {
    home: homeSlice
  }
})
