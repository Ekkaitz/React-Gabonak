import React, { useState, useEffect } from 'react';
import Datuak from './datuak';

const Udalherria = ({ selectedProbintzia }) => {
  const [arrayInguruneak, setArrayInguruneak] = useState([]);
  const [udalherria, setUdalherria] = useState('');
  const [ingurunea, setIngurunea] = useState('');
  const [datuak, setDatuak] = useState({
    izena: '',
    localidad: '',
    mota: '',
    turismos: '',
    deskripzioa: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1/server/espacios.php');
        const data = await response.json();
        setArrayInguruneak(data.item);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUdalherriaChange = (event) => {
    const selectedUdalherria = event.target.value;
    setUdalherria(selectedUdalherria);
    setIngurunea(''); // Limpiar las opciones de ingurunea al cambiar udalherria

    // Filtrar y actualizar el array de opciones de ingurunea
    const filteredOptions = arrayInguruneak
      .filter((item) => item.territory.includes(selectedProbintzia) && item.municipality === selectedUdalherria)
      .map((item) => item.documentName);

    setInguruneaOptions(filteredOptions);
  };

  const handleInguruneaChange = (event) => {
    const selectedIngurunea = event.target.value;
    setIngurunea(selectedIngurunea);

    // Encontrar los datos correspondientes al seleccionar ingurunea
    const selectedDatuak = arrayInguruneak.find((item) => item.documentName === selectedIngurunea);

    if (selectedDatuak) {
      setDatuak({
        izena: selectedDatuak.documentName,
        localidad: selectedDatuak.templateType,
        mota: selectedDatuak.marks,
        turismos: selectedDatuak.turismDescription,
        deskripzioa: selectedDatuak.turismDescription,
      });
    }
  };

  const setInguruneaOptions = (options) => {
    const inguruneaSelect = document.getElementById('ingurunea');
    inguruneaSelect.innerHTML = ''; // Limpiar las opciones antes de añadir nuevas

    // Añadir las nuevas opciones al select
    options.forEach((option) => {
      const newOption = document.createElement('option');
      newOption.value = option;
      newOption.text = option;
      inguruneaSelect.add(newOption);
    });
  };

  return (
    <div>
      <p>
        udalherria
        <select name="udalherria" id="udalherria" value={udalherria} onChange={handleUdalherriaChange}>
          <option value="">-udalherria-</option>
          {arrayInguruneak
            .filter((item) => item.territory.includes(selectedProbintzia))
            .map((item) => (
              <option key={item.municipality} value={item.municipality}>
                {item.municipality}
              </option>
            ))}
        </select>
        Entorno natural
        <select name="ingurunea" id="ingurunea" value={ingurunea} onChange={handleInguruneaChange}>
          <option value="">-ingurunea-</option>
        </select>
      </p>

      <Datuak {...datuak} />
    </div>
  );
};

export default Udalherria;
