import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'sessions',
    initialState: [],
    reducers: {

        sessionsAdded: (sessions, action) => {
            sessions.push(action.payload);
        },
    }
})

export const getSessions = createSelector(
    state => state.entities.sessions,
    (sessions) => sessions
)

export const getSessionId = createSelector(
    state => state.entities.sessions,
    (sessions) => sessions[0].sessionsData.id
)


export const {
    sessionsAdded,
    } = slice.actions;
export default slice.reducer;