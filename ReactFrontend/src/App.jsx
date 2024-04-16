import './App.css'
import { useEffect, useState } from 'react'
import Button from './components/Button'
import JobbKort from './components/JobbKort'



function App() {

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
    }
  ];
  
  // console.log(jobber);

  
  // console.log(client);
  // const query = '*[_type == "jobb"]{Name,Timer, Betaling, "imageUrl": image.asset->url}';
  
  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(query)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, query]);

  console.log(data);

  return (
    <div  className='hei'>
      <SanityProvider>
        <h1  className='hei'>Jobb for deg og meg</h1>
        <Button jobber={jobber}></Button>
        <JobbKort jobber= {jobber}></JobbKort>


      </SanityProvider>
    </div>
  )
}



export default App;
