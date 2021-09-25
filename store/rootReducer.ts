import { combineReducers } from 'redux';

import specialistCategoryReducer from './specialistCategory/specialistCategoryReducer';
import specialistReducer from './specialist/specialistReducer';
import systemReducer from './system/systemReducer';

const rootReducer = combineReducers({
  specialistCategory: specialistCategoryReducer,
  specialist: specialistReducer,
  system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
