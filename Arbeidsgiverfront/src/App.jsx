import React, { useState } from 'react';

function LeggTilJobb() {
  const [tittel, setTittel] = useState('');
  const [beskrivelse, setBeskrivelse] = useState('');
  const [antallTimer, setAntallTimer] = useState('');
  const [timeLønn, setTimeLønn] = useState('');
  const [jobbLagtTil, setJobbLagtTil] = useState(false); // ny tilstand for å spore om en jobb har blitt lagt til

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jobb = { tittel, beskrivelse, antallTimer, timeLønn };

    const response = await fetch('http://localhost:3001/api/jobb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobb),
    });

    if (response.ok) {
      setTittel('');
      setBeskrivelse('');
      setAntallTimer('');
      setTimeLønn('');
      setJobbLagtTil(true); // sett jobbLagtTil til true når en jobb er lagt til
    } else {
      console.error('Feil:', response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={tittel} onChange={e => setTittel(e.target.value)} placeholder="Tittel" required />
      <input type="text" value={beskrivelse} onChange={e => setBeskrivelse(e.target.value)} placeholder="Beskrivelse" required />
      <input type="number" value={antallTimer} onChange={e => setAntallTimer(e.target.value)} placeholder="Antall Timer" required />
      <input type="number" value={timeLønn} onChange={e => setTimeLønn(e.target.value)} placeholder="Time Lønn" required />
      <button type="submit">Legg til Jobb</button>
      {jobbLagtTil && <p>Jobben ble lagt til!</p>} {/* vis en melding når en jobb er lagt til */}
    </form>
  );
}

export default LeggTilJobb;