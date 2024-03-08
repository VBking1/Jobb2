import './App.css'
import { SanityProvider } from './SanityContext'
import { useSanityContext } from './SanityContext'
import { useEffect, useState } from 'react'
import Button from './components/Button'



function App() {
  const {client} = useSanityContext();
  const [data, setData] = useState([]);
  
  console.log(client);
  const query = '*[_type == "jobb"]{Name,Timer, Betaling, "imageUrl": image.asset->url}';
  
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
    <div>
      <SanityProvider>


        <h1>halla world</h1>

        <Button Name="HEi"></Button>


      </SanityProvider>
    </div>
  )
}



export default App;
