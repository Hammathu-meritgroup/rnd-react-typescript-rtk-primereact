import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { enhancedApi } from '../Services/codeGenApis/CardApi'
import { emptySplitApi } from '../Services/emptyApi'


export const store = configureStore({
  reducer: {   
    [emptySplitApi.reducerPath]:emptySplitApi.reducer    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(emptySplitApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch