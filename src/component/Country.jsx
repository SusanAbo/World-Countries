import React from 'react';
import { useParams } from 'react-router-dom';

const Country = ({countries})=>{
    let {landName} = useParams() 
    let {name , region , capital , flag , languages , nativeName , area , population } = countries && countries.find(e=>e.name ===landName )
    return (
        
        <div className="card">
            <div className="card-img" >
                    <img className="card-img-top" src={flag} alt='land-flag' width={'40%'}/>
            </div>
            <div className="card-body ">
                <h3 className="card-title text-danger">{'📍 '+name}</h3>

                <ul className="card-ul">
                        <li>Region : <b>{region}</b> </li>
                        <li>Capital : <b>{capital}</b></li>
                        <li>NativeName : <b>{nativeName}</b></li>
                        <li>Area : <b>{area}</b></li>
                        <li>population : <b>{population}</b></li>
                        <li>Languages : <b>{languages.map(e=>(e.name+' '))}</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Country