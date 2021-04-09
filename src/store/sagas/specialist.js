import { Alert } from 'react-native'
import { call, put, all, takeLatest, fork } from 'redux-saga/effects'

import api from '~/services/api'

import { Actions, Types } from '../reducers/specialist'

export function* getCategories() {
  try {
    const { data } = yield call(api.get, '/home_specialists.json')
    yield put(Actions.getCategoriesSuccess(data))
  } catch (err) {
    console.log('ERRO', err.message)
    Alert.alert(
      'Erro',
      'Não foi possível carregar as categorias de especialistas.',
      [
        {
          text: 'OK',
          onPress: () => {}
        }
      ]
    )
    yield put(Actions.getCategoriesError())
  }
}

export function* getSpecialistsFromCategory({ payload }) {
  try {
    const { data } = yield call(api.get, payload)
    yield put(Actions.getSpecialistsFromCategorySuccess(data))
  } catch (err) {
    console.log('ERRO', err)
    Alert.alert(
      'Erro',
      'Não foi possível carregar os especialistas desta categoria.',
      [
        {
          text: 'OK',
          onPress: () => {}
        }
      ]
    )
    yield put(Actions.getSpecialistsFromCategoryError())
  }
}

export default function* rootSaga() {
  yield all([
    fork(getCategories),
    takeLatest(Types.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(
      Types.GET_SPECIALISTS_FROM_CATEGORY_REQUEST,
      getSpecialistsFromCategory
    )
  ])
}
