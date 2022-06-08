import React from "react";

import {Link} from 'react-router-dom'

const Navigation = ()=>{
    
    
    return(
       
        <div className="nav">
            <div>
                <button className="btn" id="home">
                    <Link to={'World-Countries/'}>🏠 HOME</Link></button>
                <button className="btn">
                    <Link to={'World-Countries/all_countries'}>🗺 All Countries</Link></button>

                <button className="btn cont-btn">
                    <Link to={'World-Countries/continent'}>🌎 Continent</Link>
                        <ul className="cont-sub-list">        
                            <li ><Link to={'World-Countries/continent/Africa'}>Africa</Link></li>
                            <li ><Link to={'World-Countries/continent/Americas'}>The Americas</Link></li>
                            <li ><Link to={'World-Countries/continent/Asia'}>Asia</Link></li>
                            <li ><Link to={'World-Countries/continent/Europe'}>Europe</Link></li>
                            <li ><Link to={'World-Countries/continent/Oceania'}>Oceania</Link></li>
                            
                        </ul>
                </button>
            </div>

            <button className="btn border">
                    <Link to={'World-Countries/search'}>🇸​​​​​🇪​​​​​🇦​​​​​🇷​​​​​🇨​​​​​🇭​​​​​ 🔎</Link></button>

            <div>
                <button className="btn btn-outline-info"
                        onClick={()=>{
                            localStorage.getItem('wished');
                            
                        }}
                ><Link to={'World-Countries/visited'}>Visited Countries 🛩</Link></button>
                <button className="btn btn-outline-info mx-2">
                    <Link to={'World-Countries/to_visit'}>wish to visit 🏖</Link></button>
            </div>

            <button className="btn" id="home">
                    <Link to={'World-Countries/play'}>🅿🅻🅰🆈</Link></button>
                
        </div>
       
    )
}

export default Navigation
