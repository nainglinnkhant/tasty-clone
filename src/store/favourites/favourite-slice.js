import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: [],
    reducers: {
        addToFavourites(state, action) {
            state.favourites.push(action.payload)
        },
        removeFromFavourites(state, action) {
            state.favourites = state.favourites.filter(
                favourite => favourite.id !== action.payload,
            )
        },
    },
})

export const favouriteActions = favouriteSlice.actions

export default favouriteSlice.reducer
