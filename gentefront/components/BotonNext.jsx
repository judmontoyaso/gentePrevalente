import React, { useState, useEffect } from "react";
import React from 'react'

const BotonNext = () => {

    
  

    return (
        <div>
            <button onClick={() => setCount(count + 1)} disabled={boton} >
            <i className="fas fa-chevron-circle-right fa-2x">+</i>
          </button>
        </div>
    )
}

export default BotonNext

const CheckButton = () => {
  const [onehabilita, setOnehabilita] = useState(true);
  const [twohabilita, setTwohabilita] = useState(true);
  return (
    <div>
      <div>
        <input id="check1" name="check1" type="checkbox" onChange={() => setOnehabilita(!onehabilita)} />
        <input id="check2" name="check2" type="checkbox" onChange={() => setTwohabilita(!twohabilita)} />
      </div>

      <div>
        <button type="submit" className="continue emite" disabled={onehabilita || twohabilita }>Continuar</button>
      </div>
    </div>
  );
};

export default CheckButton;