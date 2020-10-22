import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView2156361Reducer from '../features/CalendarView2156361/redux/reducers';
import Dashboard13156360Reducer from '../features/Dashboard13156360/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView2156361: CalendarView2156361Reducer,
Dashboard13156360: Dashboard13156360Reducer,

});