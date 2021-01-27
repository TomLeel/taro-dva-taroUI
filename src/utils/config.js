// 输出日志信息
export const console = false

const ENV = process.env.APP_ENV

export function getEnv() {
  let env = 'prod'
  // eslint-disable-next-line
  switch (ENV) {
    case 'prod': {
      env = 'prod'
      break
    }
    case 'dev': {
      env = 'dev'
      break
    }
    default: {
      env = 'prod'
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
    case 'prod': {
      origin = 'http://103.99.210.193:8087'
      break
    }
    case 'dev': {
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
