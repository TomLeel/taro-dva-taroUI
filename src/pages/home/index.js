import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

@connect(({ home }) => ({
  ...home
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: 'home'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="home-page">home</View>
  }
}
