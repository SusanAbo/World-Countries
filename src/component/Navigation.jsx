import React from "react";

import {Link} from 'react-router-dom'

const Navigation = ()=>{
    
    
    return(
       
        <div className="nav">
            <div>
                <button className="btn">
                    <Link to={'/'}>🏠 HOME</Link></button>
                <button className="btn">
                    <Link to={'/all_countries'}>🗺 All Countries</Link></button>

                <button className="btn cont-btn">
                    <Link to={'/continent'}>🌎 Continent</Link>
                        <ul className="cont-sub-list">        
                            <li ><Link to={'/continent/Africa'}>Africa</Link></li>
                            <li ><Link to={'/continent/Americas'}>The Americas</Link></li>
                            <li ><Link to={'/continent/Asia'}>Asia</Link></li>
                            <li ><Link to={'/continent/Europe'}>Europe</Link></li>
                            <li ><Link to={'/continent/Oceania'}>Oceania</Link></li>
                            
                        </ul>
                </button>
            </div>

            <button className="btn border">
                    <Link to={'/search'}>🇸​​​​​🇪​​​​​🇦​​​​​🇷​​​​​🇨​​​​​🇭​​​​​ 🔎</Link></button>

            <div>
                <button className="btn btn-outline-info"
                        onClick={()=>{
                            localStorage.getItem('wished');
                            
                        }}
                ><Link to={'/visited'}>Visited Countries 🛩</Link></button>
                <button className="btn btn-outline-info mx-2">
                    <Link to={'/to_visit'}>wish to visit 🏖</Link></button>
            </div>
                 

                
        </div>
       
    )
}

export default Navigation
/*
/

*/