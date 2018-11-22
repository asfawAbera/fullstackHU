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
    <tbody>
        <tr><td>hyvä</td><td> {props.good}</td></tr>
        <tr><td>neutraali</td><td>{props.neutral}</td></tr>
        <tr><td>huono</td><td>{props.bad}</td></tr>
           
  </tbody>)
}
//the third component to show the average and posetivity ratio
const Stats =(props)=>{
    return ( <tbody>
    <tr><td>Average</td><td>{Math.round(props.ave*10)/10}</td></tr>
    <tr><td>Posetiveity:</td><td>{props.pos}</td></tr></tbody>)
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
    
        this.setState((prevState)=>({hyva:prevState.hyva+e}))
        this.setState((prevState)=>({count:prevState.count+1}))
    }

  
render(){
    const good=this.state.hyva;
    const neutral=this.state.neutral;
    const bad=this.state.huono;
    const sum=good+neutral+bad;
    const count=this.state.count;
    const calcAverage=(good*1)+(neutral*0)+(bad*-1);
    let ave=0;
    ave=sum===0? ave= 0: calcAverage/sum;
    let posRatio=Math.round((good/sum)*1000)/1000;
    let pos=0;
    pos=sum===0? pos="Waitin...": pos=(posRatio)*100+'%';
    //conditional statement to return another function for the button
    const setValue=(x)=>{
        if(x==='good'){
            const handler=()=>{
                this.setState((prevState)=>({
                    hyva:prevState.hyva+1
                }))
                this.setState({
                    count:this.state.count+1
                })
            }
            return handler;
        }else if(x==='neutral'){
            const handler=()=>{
                this.setState((prevState)=>({
                    neutral:prevState.neutral+1
                }))
                this.setState({
                    count:this.state.count+1
                })
            }
            return handler;

        }else{
            const handler=()=>{
                this.setState((prevState)=>({
                    huono:prevState.huono+1
                }))
                this.setState({
                    count:this.state.count+1
                })
            }
            return handler;

        }
    }
 
console.log(good)
  return (
<div>
        <h1>anna palautetta</h1>
        <Button good={setValue('good')} bad={setValue('bad')} neutral={setValue('neutral')}/>
        <h1>Statistics</h1>
        {
        count!==0 
        ? 
        
            <table><Stat good={good} neutral={neutral} bad={bad} />
            <Stats ave={ave} pos={pos}/></table> 
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

