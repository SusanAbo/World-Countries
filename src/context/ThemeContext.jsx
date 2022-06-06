import React , {useState , createContext} from "react";

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


    return(
        <ThemeContext.Provider value={{landLayout , toggleLayout}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider