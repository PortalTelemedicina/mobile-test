import { combineReducers } from 'redux';

import specialist from './specialist';
import specialistList from './specialistList'

export default combineReducers({
  specialist,
  specialistList
});