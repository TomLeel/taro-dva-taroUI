import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

@connect(({ user }) => ({
  ...user
}))
export default class User extends Component {
  config = {
    navigationBarTitleText: 'user'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="user-page">user</View>
  }
}
