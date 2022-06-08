import React, { useContext, useState , useEffect } from "react";
import CountriesGrid from './CountriesGrid'
import { ThemeContext } from "../context/ThemeContext";


export default function MyGrid({countries}) {

  return (
    <div className='countries-container container'>
    {countries && countries.map(e=>{
        return(
    <CountriesGrid key={Math.random()}
                    idLand = {e.area}
                    landName={e.name}
                    region={e.region}
                    capital={e.capital}
                    flag={e.flag}
                    languages={e.languages}
                    nativeName={e.nativeName}
                    area={e.area}
                    population={e.population}
                    country={e}
                  />)
    })
    } </div>
  )
}
