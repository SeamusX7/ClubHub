import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'teams',
    initialState: [],
    reducers: {

        teamsAdded: (teams, action) => {
            teams.push(action.payload);
        },
    }
})

export const getTeams = createSelector(
    state => state.entities.teams,
    (teams) => teams
)

export const getTeamId = createSelector(
    state => state.entities.teams,
    (teams) => teams[0].teamsData.id
)


export const {
    teamsAdded,
    } = slice.actions;
export default slice.reducer;