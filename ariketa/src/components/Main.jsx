import React, { useState } from 'react'
import Probintzia from './Probintzia'
import Udalherria from './udalherria'
import Datuak from './datuak'

const Main = () => {

  const [selectedProbintzia, setSelectedProbintzia]=useState(null);

  const aldatu= (selectedProb)=>{setSelectedProbintzia(selectedProb);}

  return (
    <div>
      Probintziak
      <Probintzia prob={"Araba"} onChange={aldatu}/>
      <Probintzia prob={"Gipuzkoa"} onChange={aldatu}/>
      <Probintzia prob={"Bizkaia"} onChange={aldatu}/>
      <br />
      <Udalherria selectedProbintzia={selectedProbintzia}/>
    </div>
  )
}

export default Main
