import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'activeSession',
    initialState: [],
    reducers: {

        activeSessionAdded: (activeSession, action) => {
            console.log('-=-=-=-=-=-= active session added =-=-=-=-=-=-');
            activeSession.push(action.payload);
            console.log(activeSession);
        },

        activeSessionRemove: (activeSession, action) => {
            console.log('-=-=-=-=-=-= active session removed =-=-=-=-=-=-', action.payload);
            //activeSession = action.payload;
            //activeSession.items.filter(item => item !== action.payload),
            console.log(activeSession);
        },

    }
})

export const getactiveSessionKey = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[0].item.key
)

export const getactiveSessionOpposition = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[0].item.opposition
)

export const getactiveSessionDate = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[0].item.timeStamp.toDate().toDateString()
)

export const getactiveSessionTime = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[0].item.timeStamp.toDate().toLocaleTimeString('en-US')
)

export const getactiveSessionLocation = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[0].item.location
)


export const {
    activeSessionAdded,
    activeSessionRemove,
    } = slice.actions;
export default slice.reducer;