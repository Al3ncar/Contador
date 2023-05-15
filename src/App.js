import React, {Component} from "react"
import './App.css' 

export default class App extends Component {
  state = { number: 0}

  Add = () => {
    this.setState({ number: this.state.number !== 100? this.state.number + 1 : this.state.number = 100 })
  }
  Decrease = () => {
    this.setState({ number: this.state.number !== -100? this.state.number- 1 : this.state.number = -100  })
  }
  Multiply = () => {
    this.setState({ number: this.state.number < 50 && this.state.number > -50?  
      this.state.number * 2 : this.state.number = 0})
  }
  Reset = () => {
    this.setState({ number: this.state.number = 0})
  } 

  render(){
    return(
      <section className='calc' >
        <div className="bar-cont">
          <div class="bar-aba">
            <div className="bar-pagTitle"> CONTADOR </div>
            <div className="bar-top"> 
              <span className="minimixe"></span>
              <span className="aba"></span>
              <span className="close"></span>
            </div>
          </div>
          <div className="bar-bottom"></div>
        </div>
        <div className='calc-container'>
          <div  className='result'>
            <h1>{this.state.number}</h1>
          </div>
          <div className='options'>
            <button onClick={this.Add}>Somar</button>
            <button onClick={this.Decrease}>Diminuir</button>
            <button onClick={this.Multiply}>x2</button>
            <button onClick={this.Reset}>Zerar</button>
          </div>
        </div>
      </section>
    )
  }
}



/*   // -------- Codigo Antigo ------------- //
  
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
 */