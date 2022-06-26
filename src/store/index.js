import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from './favourites/favourite-slice'

const store = configureStore({
    reducer: {
        favourite: favouriteSlice,
    },
})

export default store
