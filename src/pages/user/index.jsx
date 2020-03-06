import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(({user}) => ({
  ...user,
}))
class User extends Component {
  config = {
    navigationBarTitleText: 'user',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return (
      <View className="user-page">
        user
      </View>
    )
  }
}
export default User
