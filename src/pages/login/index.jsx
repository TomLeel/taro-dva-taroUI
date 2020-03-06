import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

let setIntervalTime = null

@connect(({ login }) => ({
  ...login
}))
class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View className="login-page" id="login-page">
        <View className="title">您好，请登录</View>
        <View className="bgtopWrap">
          <View className="loginWrap">
            <View className="inpuWrapMpblie">
              <Input
                type="number"
                name="mobile"
                maxLength="11"
                placeholder="请输入手机号"
                value={this.props.mobile}
                onInput={this.getMobile}
              />
            </View>
            <View className="inpuWrapNumber">
              <Input
                type="number"
                name="code"
                maxLength="4"
                placeholder="请输入验证码"
                value={this.props.code}
                onInput={this.getCode}
              />
              {this.state.sending == 2 && (
                <View className="numberWrap" onClick={this.sendSms}>
                  重新获取
                </View>
              )}
              {this.state.sending == 1 && (
                <View className="numberWrap">{`${smsTime}秒后重发`}</View>
              )}
              {this.state.sending == 0 && (
                <View className="numberWrap" onClick={this.sendSms}>
                  获取验证码
                </View>
              )}
            </View>
            <Button className="button" onClick={this.login}>
              登录
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default Login
