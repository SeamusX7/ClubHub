import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'activeTeam',
    initialState: [],
    reducers: {

        activeTeamAdded: (activeTeam, action) => {
            console.log('-=-=-=-=-=-= active team added =-=-=-=-=-=-');
            activeTeam.push(action.payload);
            console.log(activeTeam);
        },

    }
})

export const getActiveTeamKey = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[0].item.key
)

export const getActiveTeamName = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[0].item.club
)

export const getActiveTeamWin = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[0].item.win
)

export const getActiveTeamLoss = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[0].item.loss
)

export const getActiveTeamDraw = createSelector(
    state => state.entities.activeTeam,
    (activeTeam) => activeTeam[0].item.draw
)



export const {
    activeTeamAdded,
    } = slice.actions;
export default slice.reducer;