import './css/App.css';
import './css/navigation.css';
import './css/countries-grid.css';
import './css/continents.css';

import React , {useState , useEffect , useContext} from "react";
import Navigation from './component/Navigation';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeContext } from './context/ThemeContext';

import Home from './component/Home'
import MyGrid from './component/MyGrid';
import Country from './component/Country';
import FiveContinents from './component/FiveContinents';
import Continent from './component/Continent';
import Search from './component/Search';
import Play from './component/Play';


function App() {
    const [countries , setCountries] = useState([])
    const {visited, wished} = useContext(ThemeContext);
  
    let url = 'https://restcountries.com/v2/all';

    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const response = await fetch (url);
          const data = await response.json();
          //console.log(data);
          
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
      
          <header >
            <h1 className='mb-4 '>🇦🇪🇦🇷 Countries and Regions in the World 🇩🇪🇩🇯</h1>
            <Navigation countries={countries}/> 
            
          </header>
          <div className='container'>
              <Routes>
                  <Route path = 'World-Countries/' 
                        element = {<Home/>}/>

                  <Route path = 'World-Countries/all_countries/:landName' 
                     element = {<div className='land-details'>
                       <Country countries={countries}/></div>}/>   
                               
                  <Route path = 'World-Countries/all_countries' 
                        element = 
                        {<MyGrid countries={countries}/>}/>
                 

              <Route path = 'World-Countries/continent/' 
                     element = {<div className='home-items'> <FiveContinents/></div>}/>
              <Route path = 'World-Countries/continent/:name' 
                     element = {<Continent countries={countries}/>}/>

              <Route path = 'World-Countries/search/'
                     element = {<div className='home-items'><Search countries={countries}/></div>}/>
              

              <Route path = 'World-Countries/visited/'
                     element = {<MyGrid countries={visited}/>}/>
              <Route path = 'World-Countries/to_visit/'
                     element = {<MyGrid countries={wished}/>}/>
              <Route path = 'World-Countries/play' 
                        element = {<Play countries={countries}/>}/>
                                    
              </Routes>
          </div>
          
         
        </div>
    </Router>
    
  );
}

export default App;

