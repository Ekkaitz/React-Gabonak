import React from 'react'
import Datuak from './datuak'

const udalherria = ({selectedProbintzia}) => {
  let arrayInguruneak

  function ajax() {
    const http = new XMLHttpRequest;
    var inguruneak;
    
    let url = 'http://127.0.0.1/server/espacios.php';
    http.open("GET", url, true);
    http.send();
  
    http.onreadystatechange = function(){
      if (http.readyState == 4 && http.status == 200) {
        inguruneak=http.response;
        let json=JSON.parse(inguruneak);
        
        arrayInguruneak=json.item;

        let options=""

        for (let i = 0; i < arrayInguruneak.length; i++) {
          if (arrayInguruneak[i].territory.includes(selectedProbintzia)) {
            options+="<option value='"+arrayInguruneak[i].municipality+"'>"+arrayInguruneak[i].municipality+"</option>";
          }
        }

        var udalherria =document.getElementById("udalherria").value;
        var options2="";

        for (let i = 0; i < arrayInguruneak.length; i++) {
          if (arrayInguruneak[i].municipality.includes(udalherria)) {
            options2+="<option value='"+arrayInguruneak[i].documentName+"'>"+arrayInguruneak[i].documentName+"</option>";
          }          
        }

        document.getElementById("udalherria").innerHTML=options
        document.getElementById("ingurunea").innerHTML=options2

      }
    }
  }

  function kargatu() {
   for (let i = 0; i < arrayInguruneak.length; i++) {
    if (arrayInguruneak[i].documentName==document.getElementById("ingurunea").value) {
      var izena =arrayInguruneak.documentName;
      var mota=arrayInguruneak.templateType;
      var turismos=arrayInguruneak.marks;
      var deskripzioa=arrayInguruneak.turismDescription;

      //aqui habia que pasar las variables al componente DATUAK de alguna manera
    }    
   }
  }
  
  ajax();
  
  return (
    <div>
      <p>
        udalherria
        <select name="udalherria" id="udalherria" onChange={ajax}>
          <option value="">-udalherria-</option>
        </select>
        Entorno natural

        <select name="ingurunea" id="ingurunea" onChange={kargatu}>
          <option value="">-ingurunea-</option>
        </select>
      </p>

      <Datuak izena="" localidad="" mota="" turismos="" deskripzioa=""  />
    </div>
  )
}

export default udalherria
