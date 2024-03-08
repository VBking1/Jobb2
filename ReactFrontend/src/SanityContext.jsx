
import { createClient } from '@sanity/client'
import React, { createContext, useState, useContext, useEffect } from "react";
import sanityClient from "@sanity/client";

const initialState = {client:{}};

const SanityContext = createContext(initialState);


export const SanityProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);
  
    useEffect(() => {
      const client = createClient({
        projectId: "5nqlwy2l",
        dataset: "production",
        apiVersion: "2024-03-06", // uses current UTC date - see "specifying API version"!
        
        token:
          "skmskD2OgAEamJauaMcaoEUWnlHYM8yVGOg31vG0iS4ZvobDqOEvSEbOYaRrXwvpO4IxzZY0MQ093ANI7Z5la00mNkQz6CxTOWVXOHpMuVNlSRjyr40dgxsLiqwcX7IPV13nMmarp4RCGrLx5Me0RoAb19C3W8HPSLVTk6hBUP2vPf3WMQz5",
        useCdn: true, // `false` if you want to ensure fresh data
        ignoreBrowserTokenWarning: true,
      });
  
      setState((prevState) => ({ ...prevState, client }));

    }, []);

    // let query = '*[_type == "jobb"]{Name,Timer, Betaling, "imageUrl": image.asset->url}';


    return (
      <SanityContext.Provider value={state}>{children}</SanityContext.Provider>
    );
  };
  
  export const useSanityContext = () => {
    const context = useContext(SanityContext);
  
    return context;
  };