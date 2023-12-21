import React from 'react'
import Datuak from './datuak'

const udalherria = () => {
  return (
    <div>
      <p>
        Municipio input
        <select name="probintzia" id="ingurunea"></select>
        Entorno natural

        <select name="ingurunea" id="ingurunea"></select>
      </p>
      <Datuak/>
    </div>
  )
}

export default udalherria
