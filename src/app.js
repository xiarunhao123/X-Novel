import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'

import Index from './pages/index/index'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/book-detail/book-detail',
      'pages/book-recommend/book-recommend',
      'pages/book-tag/book-tag',
      'pages/discovery/discovery',
      'pages/category/category',
      'pages/category-detail/category-detail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '',
      navigationBarTextStyle: 'black'
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
