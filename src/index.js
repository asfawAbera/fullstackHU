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
    const sum=good+neutral+bad;
    const calcAverage=(good*1)+(neutral*0)+(bad*-1);
    let ave=sum===0? ave= 0: calcAverage/sum;
    let posRatio=Math.round((good/sum)*1000)/1000;
    console.log(posRatio*100)
    let pos=sum===0? pos="Waitin...": pos=(posRatio)*100+'%';

  return (
    <div><h1>anna palautetta</h1>
        <table>
            <thead>
                <tr>
                    <td><button onClick={this.good}>hyvä</button></td>
                    <td><button onClick={this.neutral}>neutraali</button></td>
                    <td><button onClick={this.bad}>huono</button></td></tr></thead>
            </table>
            <h1>Statistics</h1>
            <table>
                <tbody>
                <tr><td>hyvä </td><td>{good}</td></tr>
                <tr><td>neutraali</td><td>{neutral}</td></tr>
                 <tr><td>huono</td><td>{bad}</td></tr>
                <tr><td>Average</td><td>{Math.round(ave*10)/10}</td></tr>
               
                <tr><td>Posetive Feedback:</td><td>{pos}</td></tr>
            </tbody>
        </table>

        
      
        
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

