import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetch from './fetch'

const worker = function* (action) {
  let number = 0
  try {
    // number = yield call(fetch, 'success')
    // yield put({type: 'add', number}

    number = yield call(fetch, 'error')
  } catch (number) {
    yield put({type: 'add', number})
  } finally {

  }
}

const wactherSaga = function* () {
  yield takeLatest('click', worker)
}

export default function* (...args) {
  yield wactherSaga()
}
