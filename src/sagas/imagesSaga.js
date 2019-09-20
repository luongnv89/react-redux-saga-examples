// watcher saga -> actions -> worker saga
import { call, take, put, takeEvery, select } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';
const getPage = state => state.nextPage;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
    // dispatch data
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()));
  }
}

function* watchImageLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImageLoad;
