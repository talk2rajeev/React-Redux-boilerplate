import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

//import { REQUEST_HELLO_WORLD, receiveHelloWorld } from "./actions";

/*
function* helloWorld(action) {
    console.log('3. helloworld from saga called');

  try {
    yield put(receiveHelloWorld("Hello world from redux saga!"));
  } catch (e) {
    yield put(receiveHelloWorld("Hello world from redux saga!"));
  }
}
  //Alternatively you may use takeLatest.
  //Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  //dispatched while a fetch is already pending, that pending fetch is cancelled
  //and only the latest one will be run.

export default function* mySaga() {
    console.log('*. mySaga called');
    yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
*/

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api";

function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
    } catch (e) {
      console.log(e);
    }
  }
export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
  }