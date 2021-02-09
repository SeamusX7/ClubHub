import { combineReducers } from 'redux';
import userReducer from './user';
import teamsReducer from './teams';
import sessionsReducer from './sessions';
import activeTeamReducer from './activeTeam';
import activeSessionReducer from './activeSession';
// import projectsReducer from './projects';
// import usersReducer from './users';

export default combineReducers({
user : userReducer,
teams : teamsReducer,
sessions : sessionsReducer,
activeTeam : activeTeamReducer,
activeSession : activeSessionReducer
// projects : projectsReducer,
// users : usersReducer
})