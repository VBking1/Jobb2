import './App.css'
import { useEffect, useState } from 'react'
import Button from './components/Button'
import JobbKort from './components/JobbKort'



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  let jobber = [
    {
      tittel: "Gressklipping",
      beskrivelse: "Klippe gressplener i nabolaget.",
      antallTimer: 2,
      timeLønn: 150,
      bildeUrl: "https://forusrc.no/wp-content/uploads/2021/04/gressklipping-bilde.jpg" // Add image URL here
    },
    {
      tittel: "Barnepass",
      beskrivelse: "Passe på barn og utføre barnepassoppgaver.",
      antallTimer: 4,
      timeLønn: 200,
      bildeUrl: "https://example.com/barnepass.jpg" // Add image URL here
    },
    {
      tittel: "Hundelufting",
      beskrivelse: "Lufting av hunder og utføre oppgaver knyttet til dyreomsorg.",
      antallTimer: 1,
      timeLønn: 100,
      bildeUrl: "https://example.com/hundelufting.jpg" // Add image URL here
    },
    {
      tittel: "Hagearbeid",
      beskrivelse: "Utføre ulike hagearbeidsoppgaver som plenklipping, planting, luking osv.",
      antallTimer: 3,
      timeLønn: 180,
      bildeUrl: "https://example.com/hagearbeid.jpg" // Add image URL here
    },
    {
      tittel: "Renholdsarbeid",
      beskrivelse: "Utføre rengjøring og organisering av private hjem eller kontorer.",
      antallTimer: 2,
      timeLønn: 160,
      bildeUrl: "https://example.com/renholdsarbeid.jpg" // Add image URL here
    },
    {
      tittel: "Renholdsarbeid",
      beskrivelse: "Utføre rengjøring og organisering av private hjem eller kontorer.",
      antallTimer: 2,
      timeLønn: 160,
      bildeUrl: "https://example.com/renholdsarbeid.jpg" // Add image URL here
    },
    {
      tittel: "Renholdsarbeid",
      beskrivelse: "Utføre rengjøring og organisering av private hjem eller kontorer.",
      antallTimer: 2,
      timeLønn: 160,
      bildeUrl: "https://example.com/renholdsarbeid.jpg" // Add image URL here
    },
    {
      tittel: "Renholdsarbeid",
      beskrivelse: "Utføre rengjøring og organisering av private hjem eller kontorer.",
      antallTimer: 2,
      timeLønn: 160,
      bildeUrl: "https://example.com/renholdsarbeid.jpg" // Add image URL here
    }
  ];
  
  console.log(jobber, "jobber -app");


   console.log(data, "data-at");


  return (
    <div  className='hei'>

           {/* {data.map((Jobbkort, index) => (

              <div key={index} className="hei">
              <p>Navn: {Jobbkort.tittel}</p>

              <p>Beskrivelse:{Jobbkort.beskrivelse}</p>
              </div>
          ))}    */}


        <h1  className='hei'>Jobb for deg og meg</h1>

        
        <Button jobber={jobber}></Button>
        <JobbKort jobber= {jobber}></JobbKort>


     
    </div>
  )
}



export default App;
