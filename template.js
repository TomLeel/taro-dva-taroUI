/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs')

const dirName = process.argv[2]

if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep test')
  process.exit(0)
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(({${dirName}}) => ({
  ...${dirName},
}))
class ${titleCase(dirName)} extends Component {
  config = {
    navigationBarTitleText: '${dirName}',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return (
      <View className="${dirName}-page">
        ${dirName}
      </View>
    )
  }
}
export default ${titleCase(dirName)}
`

// scss文件模版
const scssTep = `

.${dirName}-page {
}
`

fs.mkdirSync(`./src/pages/${dirName}`) // mkdir $1
process.chdir(`./src/pages/${dirName}`) // cd $1

fs.writeFileSync('index.js', indexTep)
fs.writeFileSync('index.scss', scssTep)

console.log(`模版${dirName}已创建,请手动增加models`)

function titleCase(str) {
  const array = str.toLowerCase().split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i][0].toUpperCase() + array[i].substring(1, array[i].length)
  }
  const string = array.join(' ')
  return string
}

process.exit(0)
