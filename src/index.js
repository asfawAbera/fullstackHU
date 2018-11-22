import React from 'react'
import ReactDOM from 'react-dom'

//the first componenet of button
const Button =(props)=>{
return      ( 
<table>
<thead>
    <tr>
        <td><button onClick={props.good}>hyvä</button></td>
        <td><button onClick={props.neutral}>neutraali</button></td>
        <td><button onClick={props.bad}>huono</button></td></tr></thead>
</table>);
}
//the second compononet to show the statistics
const Stat =(props)=>{
    return (   
    <div>
        <p>hyvä {props.good}</p>
        <p>neutraali{props.neutral}</p>
         <p>huono{props.bad}</p>
         
        
  </div>)
}
//the third component to show the average and posetivity ratio
const Stats =(props)=>{
    return ( <div>
    <p>Average{Math.round(props.ave*10)/10}</p>
    <p>Posetiveity:{props.pos}</p></div>)
}
//application main holder component
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        hyva:0,
        neutral:0,
        huono:0,
        count:0
    }}
good=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({hyva:prevState.hyva+1}))
        this.setState((prevState)=>({count:prevState.count+1}))
    }
neutral=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({neutral:prevState.neutral+1}))
        this.setState((prevState)=>({count:prevState.count+1}))
    }
bad=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>({huono:prevState.huono+1}))
        this.setState((prevState)=>({count:prevState.count+1}))
    }
  
render(){
    const good=this.state.hyva;
    const neutral=this.state.neutral;
    const bad=this.state.huono;
    const sum=good+neutral+bad;
    const count=this.state.count;
    const calcAverage=(good*1)+(neutral*0)+(bad*-1);
    let ave=sum===0? ave= 0: calcAverage/sum;
    let posRatio=Math.round((good/sum)*1000)/1000;
    console.log(posRatio*100)
    let pos=sum===0? pos="Waitin...": pos=(posRatio)*100+'%';
    

  return (
<div>
        <h1>anna palautetta</h1>
        <Button good={this.good} bad={this.bad} neutral={this.neutral}/>
        <h1>Statistics</h1>
        {
        count!=0 
        ? 
        <div><Stat good={good} neutral={neutral} bad={bad} />
            <Stats ave={ave} pos={pos}/>
        </div> 
        :
        "ei yhtään palautetta annettu"
        }
     
    

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

