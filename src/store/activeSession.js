import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
const initialState = [];
let index = 0;

const slice = createSlice({
    name: 'activeSession',
    initialState,
    reducers: {

        activeSessionAdded: (activeSession, action) => {       
            activeSession.push(action.payload);           
        },

        activeSessionRemove: () => {index++;initialState;}, 

        
    }
})

export const getactiveSessionKey = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.key
)

export const getactiveSessionOpposition = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.opposition
)

export const getactiveSessionDate = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.timeStamp.toDate().toDateString()
)

export const getactiveSessionTime = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.timeStamp.toDate().toLocaleTimeString('en-US')
)

export const getactiveSessionLocation = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.location
)

export const getactiveSessionPending = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.Pending
)

export const getactiveSessionDeclined = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.Declined
)

export const getactiveSessionAccepted = createSelector(
    state => state.entities.activeSession,
    (activeSession) => activeSession[index-1].item.Accepted
)


export const {
    activeSessionAdded,
    activeSessionRemove,
    } = slice.actions;
export default slice.reducer;