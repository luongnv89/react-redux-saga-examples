import {
  take,
  fork,
  call,
  put,
} from 'redux-saga/effects';

import {
  IMAGES
} from "../constants";
import {
  fetchImageStats
} from '../api';
import {
  setImageStats,
  setImageStatsError,
  loadImageStats
} from '../actions';

function* handleImageStats(id) {
  try {
    for (let nbTry = 0; nbTry < 3; nbTry++) {
      yield put(loadImageStats(id));
      const response = yield call(fetchImageStats, id);
      console.log(id, response.downloads.total);
      yield put(setImageStats(id, response.downloads.total));
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  yield put(setImageStatsError(id));
}


function* watchImageStatsLoad() {
  while (true) {
    const {
      images
    } = yield take(IMAGES.LOAD_OK);
    for (let index = 0; index < images.length; index++) {
      const img = images[index];
      yield fork(handleImageStats, img.id);
    }
  }
}

export default watchImageStatsLoad;
