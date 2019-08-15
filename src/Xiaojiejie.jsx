import React, { Component,Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  inputChange(){
    this.setState({
      inputValue: this.input.value
    })
  }
  addList(){
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list,this.state.inputValue],
        inputValue:''
      },() => {
        console.log('====================================');
        console.log(this.ul.querySelectorAll('div').length);
        console.log('====================================');
      })
    }
  }
  deleteList(index){
    const {list} = this.state
    list.splice(index,1)
    this.setState({
      list
    });
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="test" style={{cursor: 'pointer'}}>asdsad </label>
        <input
          value={this.state.inputValue}
          onChange={this.inputChange.bind(this)}
          id='test'
          ref={(input) => {this.input = input}}/>
        <button style={{marginLeft:"15px",backgroundColor:"#ae7000",cursor: 'pointer'}} onClick={this.addList.bind(this)}>增加服务</button>
        <ul ref={(ul) => this.ul = ul}>
          {
            this.state.list.map((item,index) => {
              return (
                <XiaojiejieItem
                  key={item + index}
                  count={item}
                  index={index}
                  deleteList={this.deleteList.bind(this)}>
                </XiaojiejieItem>)
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Xiaojiejie;
