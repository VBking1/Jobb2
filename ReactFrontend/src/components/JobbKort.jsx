import React, { useState } from "react";
import './Minnstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faKiss, faTimes } from '@fortawesome/free-solid-svg-icons';

function JobbKort(props) {
  let jobber = props.jobber;
  console.log(jobber);

  const [index, setIndex] = useState(0);

  function nesteJobb() {
    setIndex(index+1);
  }
    let maks = jobber.lenght;

    console.log(maks);
    // let max = jobber.length + 1;
    // if max = true

    return (
      <div>
      <img src={jobber[index].image} alt={jobber[index].tittel} />
      </div>,

    <div className="jobb">
      <h2 >{jobber[index].tittel}</h2>
      <p>{jobber[index].beskrivelse}</p>
      <p id="timer">Antall Timer: {jobber[index].antallTimer}</p>
      
      
      <button className="ja-knapp" onClick={nesteJobb}><FontAwesomeIcon icon={faHeart} /></button>
      <button className="nei-knapp" onClick={nesteJobb}><FontAwesomeIcon icon={faTimes} /></button>
    </div>
);
}

export default JobbKort;