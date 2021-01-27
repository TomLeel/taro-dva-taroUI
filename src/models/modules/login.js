import * as api from '../../service/login'

export default {
  namespace: 'login',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(api.demo, {})
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
