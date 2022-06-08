import React , {useState , createContext, useEffect} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props)=>{
     
    let visitedStorage = JSON.parse(localStorage.getItem('visited'))
    let wishedStorage = JSON.parse(localStorage.getItem('wished'))


    const [visited , setVisited]= useState([]);
    const [wished, setWished] = useState([]);

  

    useEffect( () => {
         localStorage.setItem('wished', JSON.stringify(wished))
         console.log(wished)
         console.log(localStorage)
    }, [wished]);

    useEffect( () => {
        localStorage.setItem('visited', JSON.stringify(visited))
   }, [visited]);


    return(
        <ThemeContext.Provider value={{ visited, setVisited, wished, setWished}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider