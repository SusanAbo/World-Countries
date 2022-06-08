import React , {useState , createContext, useEffect} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props)=>{
    const [landLayout , setLandLayout] = useState({
        istDark : false ,
        dark: {
            text : 'gray',
            hintergrund: 'lightgray',
            filter: 'saturate(0)'
        },
        hell:{
            text : 'red',
            hintergrund: 'white',
            filter: 'saturate(1)'
        }   
    })

    const toggleLayout = (id)=>{
        
        setLandLayout({...landLayout , istDark : ! landLayout.istDark})
    }
 
    let visitedStorage = JSON.parse(localStorage.getItem('visited'))
    let wishedStorage = JSON.parse(localStorage.getItem('wished'))


    const [visited , setVisited]= useState(visitedStorage);
    const [wished, setWished] = useState(wishedStorage);

  

    useEffect( () => {
         localStorage.setItem('wished', JSON.stringify(wished))
         console.log(wished)
         console.log(localStorage)
    }, [wished]);

    useEffect( () => {
        localStorage.setItem('visited', JSON.stringify(visited))
   }, [visited]);


    return(
        <ThemeContext.Provider value={{landLayout , toggleLayout, visited, setVisited, wished, setWished}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider