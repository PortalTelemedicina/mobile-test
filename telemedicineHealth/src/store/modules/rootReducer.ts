import { combineReducers } from 'redux';
import specialistReducer from './specialists/reducer';
import TypeSpecialistReducer from './listTypeSpecialist/reducer';

export default combineReducers({
  specialist: specialistReducer,
  typeSpecialist: TypeSpecialistReducer,
});
