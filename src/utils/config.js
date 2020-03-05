// 输出日志信息
export const console = false

const ENV = process.env.APP_ENV

export function getEnv() {
  let env = 'production'
  // eslint-disable-next-line
  switch (ENV) {
    case 'production': {
      env = 'production'
      break
    }
    case 'QA': {
      env = 'QA'
      break
    }
    default: {
      env = 'production'
    }
  }
  // eslint-disable-next-line
  window['__GLOBAL_ENV__'] = env
  return env
}

export function getOrigin(url = '') {
  // eslint-disable-next-line
  const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  let origin = ''
  if (urlP.test(url)) {
    return url
  }
  switch (getEnv()) {
    case 'production': {
      origin = 'http://103.99.210.193:8087'
      break
    }
    case 'QA': {
      origin = 'http://192.168.0.200:8300'
      break
    }
    default: {
      origin = ''
    }
  }
  // eslint-disable-next-line
  window['__GLOBAL_API_ORIGIN__'] = origin
  return origin + url
}
