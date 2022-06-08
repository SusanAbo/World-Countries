import './css/App.css';
import './css/navigation.css';
import './css/countries-grid.css';
import './css/continents.css';

import React , {useState , useEffect}from "react";
import Home from './component/Home'
import Navigation from './component/Navigation';
import CountriesGrid from './component/CountriesGrid';
import Country from './component/Country';
import FiveContinents from './component/FiveContinents';
import Continent from './component/Continent';
import Search from './component/Search';
import ThemeLand from "./component/ThemeLand";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeContextProvider from './context/ThemeContext';


function App() {
    const [countries , setCountries] = useState([])
    let url = 'https://restcountries.com/v2/all';

    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const response = await fetch (url);
          const data = await response.json();
          console.log(data);
          
          if(data) setCountries(data)
            if(countries)console.log('countries',countries);
          }catch (error){
          console.log("error", error);
        }
      }
      fetchData()
    } , [])

    return (
    <Router>
      <div className="App my-1 ">
      <ThemeContextProvider>
          <header >
            <h1 className='mb-4 '>🇦🇪🇦🇷 Countries and Regions in the World 🇩🇪🇩🇯</h1>
            <Navigation countries={countries}/> 
            
          </header>
               
          <div className='container'>
              <Routes>
                  <Route path = '/' 
                        element = {<Home/>}/>

                  <Route path = '/all_countries/:landName' 
                     element = {<div className='land-details'>
                       <Country countries={countries}/></div>}/>   
                               
                  <Route path = '/all_countries' 
                        element = 
                        {<>
                        
                        <ThemeLand/>
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
                                      />)
                        })
                        } </div>
                        </>} />
              

              <Route path = '/continent/' 
                     element = {<div className='home-items'> <FiveContinents/></div>}/>
              <Route path = '/continent/:name' 
                     element = {<Continent countries={countries}/>}/>

              <Route path = '/search/'
                     element = {<div className='home-items'><Search countries={countries}/></div>}/>
              

              <Route path = '/visited/'
                     element = {<div className='home-items'>Visited lands here</div>}/>
              <Route path = '/to_visit/'
                     element = {<div className='home-items'>I wish to visit these Lands</div>}/>
                                    
              </Routes>
          </div>
         </ThemeContextProvider>
        </div>
    </Router>
  );
}

export default App;

