import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetch from './fetch'

const worker = function* () {
  const number = yield call(fetch)
  yield put({type: 'add', number})
}

const wactherSaga = function* () {
  yield takeLatest('click', worker)
}

export default function* () {
  yield wactherSaga()
}
