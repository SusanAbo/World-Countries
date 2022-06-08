import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { ThemeContext } from "../context/ThemeContext";


const CountriesGrid = ({landName , flag , idLand, country })=>{
    const {wished, setWished, visited, setVisited} = useContext(ThemeContext);


    return(
        <div className="lands-card card"  >

            <Link to={landName} > 
                    <div className="card-img">
                    <img className="card-img-top" src={flag} alt='land-flag' style={{maxWidth:'100%',maxHeight:'100%'}}/>
                    </div>
            </Link>
                    <div className="card-body" style= {{position:'relative' , button: 0}}>
                    <h3 className="card-title text-danger ">{'📍 '+landName}</h3> 
                    <p><small className="text-muted">id :{idLand}</small></p>
            

                    <div className="card-footer bg-transparent">
                    
                    <button className='btn btn-outline-success m-1'
                        onClick={(e)=>{ 
                            e.preventDefault()
                            let newVisited = [...visited]
                            newVisited.push(country)
                            setVisited(newVisited)
                        }} 
                    >Visited</button>

                    <button className='btn btn-outline-secondary m-1'
                        onClick={(e)=>{
                            e.preventDefault()
                            let newWished = [...wished]
                            newWished.push(country)
                            setWished(newWished)
                            //wishedLand(idLand ,landName)
                        }}
                    >wish to visit</button>

                    </div>
                </div>
        </div>
         
        )
        
}

export default CountriesGrid


//  style={{color: layout.text, background: layout.hintergrund , filter: layout.filter}}