import React, { useState} from 'react'; 
import SearchedLandCard from './SearchedLandCard';


const Search = ({countries})=>{
    
    const [inputValue , setInputValue] = useState('')
    const [foundLand , setFoundLand]= useState('')

    const searchFunction = ()=>{
        const gefunden = countries && countries.find((country)=>country.name.toLowerCase() === inputValue.toLowerCase())
        if(gefunden){
            setFoundLand(gefunden)
        }
        console.log('foundLand', foundLand);
    }
    return(
        
            <div className='container' style={{maxWidth : '600px' , marginTop : '50px'}}>
                <form className="d-flex">
                        <input className="form-control me-2" type="search"
                            placeholder="Search for a country 🔎" aria-label="Search"
                            onChange={(e)=>setInputValue(e.target.value)} 
                            value={inputValue}/>
                        
                        <button className="btn btn-outline-secondary" type="submit" 
                            onClick={(e)=>{
                                e.preventDefault()
                                searchFunction()
                                setInputValue('')
                            }
                        }>𝙎𝙚𝙖𝙧𝙘𝙝</button>
                </form>
            <div className='my-3 p-3'>
                {(foundLand && foundLand.name.length>0) ? <SearchedLandCard foundLand= {foundLand} key={Math.random()}/> : <p>Please write a name</p>
                }
                
           </div>
              
        </div>
        
    )
    
}

export default Search

/*





*/
