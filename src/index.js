import React from 'react'
import ReactDOM from 'react-dom'
// import Xiaojiejie from './Xiaojiejie'
// import App from './app'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
function Index() {
  return (
    <div>
      主页
    </div>
  )
}
function List() {
  return (
    <div>
      列表
    </div>
  )
}
function RouterLink() {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/list">列表</Link>
      <Route component={Index} path='/' exact></Route>
      <Route component={List} path='/list'></Route>
    </Router>
  )
}
ReactDOM.render(<RouterLink/>,document.getElementById('root'))
