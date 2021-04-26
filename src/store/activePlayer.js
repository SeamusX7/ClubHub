import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
const initialState = [];
let index = 0;

const slice = createSlice({
    name: 'activePlayer',
    initialState,
    reducers: {

        activePlayerAdded: (activePlayer, action) => {       
            activePlayer.push(action.payload);           
        },

        activePlayerRemove: () => {index++;initialState;}, 

        
    }
})

export const getactivePlayerID = createSelector(
    state => state.entities.activePlayer,
    (activePlayer) => activePlayer[index-1].item.ID
)

export const getactivePlayer = createSelector(
    state => state.entities.activePlayer,
    (activePlayer) => activePlayer[index-1].item
)



export const {
    activePlayerAdded,
    activePlayerRemove,
    } = slice.actions;
export default slice.reducer;