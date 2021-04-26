import {createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const initialState = [];
let index = 0;
const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        userAdded: (user, action) => {
            user.push(action.payload);
        },

        userRemove: () => {index++;initialState;},

    }
})

export const getUserId = createSelector(
    state => state.entities.user,
    (user) => user[index-1].userData.id
)

export const getUserName = createSelector(
    state => state.entities.user,
    (user) => user[index-1].userData.fullName
)

export const getUserType = createSelector(
    state => state.entities.user,
    (user) => user[index-1].userData.userType
)



export const {
    userAdded,
    userRemove,
    } = slice.actions;
export default slice.reducer;