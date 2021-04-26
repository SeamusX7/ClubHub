import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = [];
let index = 0;
const slice = createSlice({
    name: 'activeTeam',
    initialState,
    reducers: {

        activeTeamAdded: (activeTeam, action) => {           
            activeTeam.push(action.payload);
        },

        activeTeamRemove: () => {index++;initialState;},
    }
})

export const getActiveTeamKey = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.key
)

export const getActiveTeamName = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.club
)

export const getActiveTeamWin = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.win
)

export const getActiveTeamLoss = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.loss
)

export const getActiveTeamDraw = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.draw
)

export const getActiveTeamPlayersArray = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.players
)
export const getActiveTeamPlayersIDArray = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[index-1].item.playersID
)



export const {
    activeTeamAdded,
    activeTeamRemove,
    } = slice.actions;
export default slice.reducer;