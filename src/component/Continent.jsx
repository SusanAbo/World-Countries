import React , { useState , useEffect }from "react";
import { useParams} from 'react-router-dom'

const Continent = ()=>{

    let {name} = useParams()
    const [continent , setContinent ] = useState([])

    useEffect(()=>{
        const url = 'https://restcountries.com/v3/region/'+ name;
        const fetchData = async ()=>{
            try{
                const response = await fetch (url);
                const data = await response.json();
                console.log('contenent',data);
                if(data) setContinent(data)
            }catch(error){
                console.log("error", error);
            }
        }
        fetchData()
    } , [name])

  

    return(
        <div className="container home-items">
             <h1 className='mt-3 title'>Countries of {name}</h1>

             <div className="countries-container top-50">
        {continent && continent.map((land)=>{
            return(
                  <div className="card w-100 p-1" key={Math.random()}>
                    <h3 className="card-title text-danger mb-2 text-truncate">{land.flag} {land.name.common}</h3>
                    <ul className="card-ul">
                        <li>Region : <b>{land.region}</b> </li>
                        <li>Capital : <b>{land.capital}</b></li>
                        <li>Area : <b>{land.area}</b></li>
                        <li>population : <b>{land.population}</b></li>   
                    </ul>
                  </div>
                
            )
        })}
</div>
        </div>
    )
    
}

export default Continent
