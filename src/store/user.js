import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const slice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {

        userAdded: (user, action) => {
            user.push(action.payload);
        },

    }
})

export const getUserId = createSelector(
    state => state.entities.user,
    (user) => user[0].userData.id
)

export const getUserName = createSelector(
    state => state.entities.user,
    (user) => user[0].userData.fullName
)



export const {
    userAdded,

    } = slice.actions;
export default slice.reducer;