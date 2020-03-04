import Taro, { Component } from '@tarojs/taro'
import dva from './utils/dva'
import models from './models'
import Home from './pages/home'
import { Provider } from '@tarojs/redux'

import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ['pages/home/index', 'pages/order/index', 'pages/user/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png'
        },
        {
          pagePath: 'pages/order/index',
          text: '订单',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png'
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png'
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
