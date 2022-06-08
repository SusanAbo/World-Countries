import React from "react";



const SearchedLandCard = ({foundLand})=>{

    return(
        <div className="card" >
            <div className="card-img" >
                    <img className="card-img-top" src={foundLand.flag} alt='land-flag' width={'40%'}/>
            </div>
            <div className="card-body ">
                <h3 className="card-title text-danger">{'📍 '+foundLand.name}</h3>

                    <ul className="card-ul">
                            <li>Region : <b>{foundLand.region}</b> </li>
                            <li>Capital : <b>{foundLand.capital}</b></li>
                            <li>NativeName : <b>{foundLand.nativeName}</b></li>
                            <li>Area : <b>{foundLand.area}</b></li>
                            <li>population : <b>{foundLand.population}</b></li>
                            <li>Languages : <b>{foundLand.languages.map(e=>(e.name+' '))}</b></li>
                    </ul>
                    
                    <button className="btn btn-outline-info">
                    <a href={'https://www.google.com/maps/place/'+foundLand.name} target='blank'>Go to the Map 🌎</a></button>
            </div>
        </div>
    )
}

export default SearchedLandCard

// 