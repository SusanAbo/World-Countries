import React, {useParams , useState} from 'react';



const Search = ({countries})=>{
    let {search} = useParams()
    const [inputValue , setInputValue] = useState('')
    

    return(
        
            <div className='home-items'>
                <form className="d-flex">
                    <input className="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search"
                        onChange={(e)=>setInputValue(e.target.value)} 
                        value={inputValue}/>
                       
                    <button className="btn btn-outline-secondary" type="submit"></button>
                </form>
                {/* <div>
                {
                  countries && countries.filter(land=>land.name.toLowerCase() === search.toLowerCase()).map(countr => <div >{countr.name}</div>)
                 }
                </div> */}
            </div>
        
    )
    
}

export default Search

/*

    //-----------------
    <button class="btn btn-outline-secondary" type="submit">
                        <Link to={'/search/'+ inputValue}>Search</Link>
                    </button>






   import { useSearchParams } from 'react-router-dom';


const Search = ({countries})=>{
    const [searchParams , setSearchParams] = useSearchParams();
    const searchLand = searchParams.get('searchName') || '';

    const handleSearch = ((e)=>{
        const searchName = e.target.value;
        if(searchName){ 
            setSearchParams({searchName});
        }else {
            setSearchParams({});
        }
    })

    return(
        <div>
            <form class="d-flex">
                    <input class="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search"
                        onChange={handleSearch} 
                        value={searchLand}/>
            </form>

            <ul>
                {countries.filter(land=>land.toLowerCase().includes(searchLand).toLowerCase())
                 .map((searched,i)=>(
                     <li key={i}>{searched}</li>
                 ))
                }
            </ul>
        </div>
    )
    
}

export default Search


*/