import React, {Component} from 'react'
import './App.css'

export default class App extends Component{
  state = {
    number:0,
  }
  soma = () => {
    this.setState({
      number: this.state.number === 10 ? this.state.number=10: this.state.number+1,
    })
  }
  adiçao = () => {
    this.setState({
      number: this.state.number === 0 ? this.state.number=0: this.state.number-1
    })
  }
  render(){
    return(
      <div className='calc'>
        <div className='calc-container'>
          <div className='result'>
            <h1>{this.state.number}</h1>
          </div>
          <div className='options'>
            <button onClick={this.soma}>+1</button>
            <button onClick={this.adiçao}>-1</button>
          </div>
        </div>
      </div>
    )
  }
}