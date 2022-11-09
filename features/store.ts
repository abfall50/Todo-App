import todosReducer from './todos/todosSlice'
import filterReducer from './filter/filterSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		todosReducer,
		filterReducer
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch