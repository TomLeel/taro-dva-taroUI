import Taro from '@tarojs/taro'
import { getOrigin, console } from './config'

export default (options = { method: 'GET', data: {} }) => {
  if (console) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    )
  }
  return Taro.request({
    url: getOrigin() + options.url,
    data: options.data,
    headers: {
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase()
  }).then(res => {
    const { statusCode, data } = res
    if (statusCode >= 200 && statusCode < 300) {
      if (console) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        )
      }
      if (data.status !== 'ok') {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: 'none',
          mask: true
        })
      }
      return data
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`)
    }
  })
}
