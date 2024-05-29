import React from 'react';

function JobbForm({ tittel, setTittel, beskrivelse, setBeskrivelse, antallTimer, setAntallTimer, timeLønn, setTimeLønn, jobbLagtTil, handleSubmit }) {
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

export default JobbForm;