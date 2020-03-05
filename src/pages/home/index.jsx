import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

@connect(({ home }) => ({
  ...home
}))
class Home extends Component {
  config = {
    navigationBarTitleText: 'home'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="home-page">home123</View>
  }
}
export default Home