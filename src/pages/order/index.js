import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

@connect(({ order }) => ({
  ...order
}))
export default class Order extends Component {
  config = {
    navigationBarTitleText: 'order'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return <View className="order-page">order</View>
  }
}
