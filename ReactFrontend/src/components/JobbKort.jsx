import React, { useState } from "react";
import './Minnstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faKiss, faTimes } from '@fortawesome/free-solid-svg-icons';








function JobbKort(props) {
  const { jobber } = props;
  //let jobber = props.jobber;      // jobber = data DEtte er den jeg endrer på
  // console.log(jobber,'jobber');





  const [index, setIndex] = useState(0);

  function nesteJobb() {
    setIndex(index+1);
  }





    let maks = jobber.lenght;

    // console.log(maks);
    // let max = jobber.length + 1;
    // if max = true





    return (

    <div className="jobb">
      <h2 >{jobber[index].tittel}</h2>
      <p>{jobber[index].beskrivelse}</p>
      <p id="timer">Antall Timer: {jobber[index].antallTimer}</p>
      
      
      <button type="button" className="ja-knapp" onClick={nesteJobb}><FontAwesomeIcon icon={faHeart} /></button>
      <button className="nei-knapp" onClick={nesteJobb}><FontAwesomeIcon icon={faTimes} /></button>
    </div>
);
}

export default JobbKort;