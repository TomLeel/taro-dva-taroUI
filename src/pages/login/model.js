import * as loginApi from './service'

export default {
  namespace: 'login',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(loginApi.demo, {})
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } })
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },

}
