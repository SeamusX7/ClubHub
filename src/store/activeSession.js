import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'activeSession',
    initialState: [],
    reducers: {

        activeSessionAdded: (activeSession, action) => {
            console.log('-=-=-=-=-=-= active team added =-=-=-=-=-=-');
            activeSession.push(action.payload);
            console.log(activeSession);
        },

    }
})

export const getactiveSessionKey = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession.item.key
)



export const {
    activeSessionAdded,
    } = slice.actions;
export default slice.reducer;