import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko=(props)=>{
   return  <h1>{props.kurssi}</h1>
}
const Osa=(props)=>{
    return  <p>{props.Osa}{props.tehtavia}</p>
 }

const Sisalto=(props)=>{
return (< div>
    <Osa Osa={props.osa1} tehtavia={props.tehtavia1}/>
    <Osa Osa={props.osa2} tehtavia={props.tehtavia2}/>
    <Osa Osa={props.osa3} tehtavia={props.tehtavia3}/>
</div>)
}
const Yhteensa=(props)=>{
  return(  <p>yhteensa {props.tehtavia1+props.tehtavia2+props.tehtavia3}</p>)
}

const App = () => {
  const kurssi = {
   nimi:'Half Stack -sovelluskehitys',
   osat : [
      {
        nimi:'Reactin perusteet',
        tehtavia : 10
      },
      {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia : 7
    },
    {
      nimi: 'Komponenttien tila',
     tehtavia : 14
    }]
}

  return (
    <div>
    <Otsikko kurssi={kurssi.nimi}/>
    <Sisalto  osa1={kurssi.osat[0].nimi} tehtavia1={kurssi.osat[0].tehtavia} osa2={kurssi.osat[1].nimi} tehtavia2={kurssi.osat[1].tehtavia} osa3={kurssi.osat[2].nimi} tehtavia3={kurssi.osat[2].tehtavia}/>
    <Yhteensa tehtavia1={kurssi.osat[0].tehtavia} tehtavia2={kurssi.osat[1].tehtavia} tehtavia3={kurssi.osat[2].tehtavia}/>
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

