import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        hyva:0,
        neutral:0,
        huono:0,
    }}
good=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({hyva:prevState.hyva+1}))
    }
neutral=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({neutral:prevState.neutral+1}))
    }
bad=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({huono:prevState.huono+1}))
    }
  
render(){
    const good=this.state.hyva;
    const neutral=this.state.neutral;
    const bad=this.state.huono;
  return (
    <div>
        <button onClick={this.good}>hyvä</button><br />
        <button onClick={this.neutral}>neutraali</button><br />
        <button onClick={this.bad}>huono</button><br />

        <h1>Statistics</h1>
        <p>hyvä <span>{good}</span></p>
        <p>neutraali <span>{neutral}</span></p>
        <p>huono <span>{bad}</span></p>
        
     </div>)
     }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

