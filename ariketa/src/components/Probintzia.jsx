import React from 'react';

const Probintzia = ({ prob, onChange }) => {
  const handleChange = () => {
    onChange(prob);
  };

  return (
    <p>
      {prob}
      <input
        type="radio"
        name="radio"
        id=""
        value={prob}
        onChange={handleChange}
      />
    </p>
  );
};

export default Probintzia;
