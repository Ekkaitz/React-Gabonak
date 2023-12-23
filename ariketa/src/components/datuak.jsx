import React from 'react'

const datuak = ({izena, localidad,mota,turismos,deskripzioa}) => {
  return (
    <div>
      <h3>Aukeratutakoaren informazioa</h3>
      <p>Izena <input type="text" name="" id="" value={izena} /> Localidad: <input type="text" name="" id="" value={localidad} /></p>

      <h3>Informazio gehigarria</h3>
      <p>Mota <input type="text" name="" id="" value={mota} /></p>
      <p>Turismos <input type="text" name="" id="" value={turismos} /></p>
      <p>Deskripzioa <textarea name="" id="" cols="30" rows="10" value={deskripzioa}></textarea></p>
    </div>
  )
}

export default datuak
