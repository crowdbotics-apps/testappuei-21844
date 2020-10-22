import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView2156361Saga from '../features/CalendarView2156361/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView2156361Saga,
    
  ]);
}