import React, { useState } from 'react';
import './App.css';

const App : React.FC = () : React.ReactElement => {

  const [tervehdys, setTervehdys] = useState<string>('');
  const [nimi, setNimi] = useState<string>('');
  
  const sanoHeippa = () : void => {
    setTervehdys(`Hei ${nimi}!`);
  }

  return (
    <>
      {(Boolean(tervehdys))
        ? <div className='tervehdysteksti'>
            {tervehdys}
          </div>
        : null
      }

      <input type='text' className='nappi' placeholder='Kirjoita tähän nimi' onChange={(e) => setNimi(e.target.value)}/>
      <button onClick={sanoHeippa}>Pii!</button>
    </>
  );
}

export default App;
