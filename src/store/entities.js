import { combineReducers } from 'redux';
import userReducer from './user';
import teamsReducer from './teams';
import activeTeamReducer from './activeTeam';
// import projectsReducer from './projects';
// import usersReducer from './users';

export default combineReducers({
user : userReducer,
teams : teamsReducer,
activeTeam : activeTeamReducer,
// projects : projectsReducer,
// users : usersReducer
})