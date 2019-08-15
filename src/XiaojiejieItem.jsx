import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidCatch(error, info) {
    console.log('====================================');
    console.log(error,info);
    console.log('====================================');
  }

  /**
   * 类似vue的beforeCreate
   */
  componentWillMount() {
    console.log('====================================');
    console.log('componentWillMount 组件将要挂载');
    console.log('====================================');
  }

  /**
   * 类似vue的created
   */
  componentDidMount() {
    console.log('====================================');
    console.log('componentDidMount 组件挂载完成');
    console.log('====================================');
  }
  /**
   * 类似vue的beforeUpdate
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('====================================');
    console.log(nextProps, nextState, nextContext);
    console.log('====================================');
    return true
  }
  render() {
    console.log('====================================');
    console.log('组件正在挂载');
    console.log('====================================');
    return (
      <div
        onClick={this.handleClick.bind(this)}>
        {this.props.avname}-{this.props.count}
      </div>
    )
  }
  handleClick(){
    this.props.deleteList(this.props.index)
  }
}
// 校验父与子传值检验
XiaojiejieItem.prototypes = {
  count: PropTypes.string,
  index: PropTypes.number,
  deleteList: PropTypes.func,
  avname: PropTypes.string.isRequired
}
// 父与子通信的默认值
XiaojiejieItem.defaultProps ={
  avname: '协议'
}

export default XiaojiejieItem;
