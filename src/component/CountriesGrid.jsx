import React, { useContext, useState , useEffect } from "react";
import Country from "./Country";
import {Link} from 'react-router-dom'
import { ThemeContext } from "../context/ThemeContext";


const CountriesGrid = ({landName , flag , idLand , countries})=>{
    const {landLayout} = useContext(ThemeContext);
    const { istDark , hell , dark } = landLayout;
    const layout = istDark ? dark : hell ;
    
    const [land, setLand] = useState([]);
     const [visited , setVisited]= useState([]);
     const [wished, setWished] = useState([]);

    console.log('visited' , visited);
    console.log('wished' , wished);
    

    useEffect(()=>{
            let oldWishList = localStorage.getItem('wished');
            let parsedWishList = JSON.parse(oldWishList);
            setWished(parsedWishList)
        },[]);

    useEffect( () => {
        localStorage.setItem('wished', JSON.stringify(wished))
    }, [wished]);
    
    const visitedLand = (id , name)=>{
        let countriesCopy = countries && countries.map((land)=>{
            return land.area === id ? ({...land , isVisited : true}) : (land)
        });
        setLand(countriesCopy)
        setVisited([...visited , name])
    }

    const wishedLand = (id , name)=>{
        let countriesCopy = countries && countries.map((land)=>{
            return land.area === id ? ({...land , isWished : true}) : (land)
        });
        setLand(countriesCopy)
        setWished([...wished , name])
    }

    return(
        <div className="lands-card card" 
                     style={{color: layout.text, background: layout.hintergrund , filter: layout.filter}}>

            <Link to={'/all_countries/'+landName} > 
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
                        console.log(landName);
                        visitedLand(idLand ,landName)
                    }} 
                    >Visited</button>

                    <button className='btn btn-outline-secondary m-1'
                    onClick={(e)=>{
                        e.preventDefault()
                        console.log('idLand',idLand);
                        wishedLand(idLand ,landName)
                    }}
                    >wish to visit</button>

                    </div>
                </div>
            </div>
            
        )
        
}

export default CountriesGrid
