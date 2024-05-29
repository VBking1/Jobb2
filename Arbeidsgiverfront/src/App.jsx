import React, { useState} from 'react';
import JobbForm from './compenents/JobbForm';

function LeggTilJobb() {
  const [tittel, setTittel] = useState('');
  const [beskrivelse, setBeskrivelse] = useState('');
  const [antallTimer, setAntallTimer] = useState('');
  const [timeLønn, setTimeLønn] = useState('');
  const [jobbLagtTil, setJobbLagtTil] = useState(false); // ny tilstand for å spore om en jobb har blitt lagt til
 

  const handleSubmit = async (event) => {    
    event.preventDefault();

    const jobb = { tittel, beskrivelse, antallTimer, timeLønn };     //lagrer jobb i en variabel som inneholder tittel, beskrivelse, antallTimer og timeLønn
    console.log(jobb);    

    const response = await fetch('http://localhost:3001/api/jobb', {
      method: 'POST',       //hva vi skal gjøre med api kallet
      headers: {
        'Content-Type': 'application/json',   // sier at vi sender json data
      },
      body: JSON.stringify(jobb),      // gjør om til json format
      
    });

    if (response.ok) {      //hvis responsen er ok setter alt til tomme verdier
      setTittel('');
      setBeskrivelse('');
      setAntallTimer('');
      setTimeLønn('');
      setJobbLagtTil(true); // sett jobbLagtTil til true når en jobb er lagt til
    } else {
      console.error('Feil:', response);    //hvis det er en feil i responsen logges det ut
    }
  };

  return (
    <JobbForm 
      tittel={tittel} 
      setTittel={setTittel} 
      beskrivelse={beskrivelse} 
      setBeskrivelse={setBeskrivelse} 
      antallTimer={antallTimer} 
      setAntallTimer={setAntallTimer} 
      timeLønn={timeLønn} 
      setTimeLønn={setTimeLønn} 
      jobbLagtTil={jobbLagtTil} 
      handleSubmit={handleSubmit} 
    />
  );
}

export default LeggTilJobb;