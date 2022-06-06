import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeLand = ()=>{
    const {toggleLayout} = useContext(ThemeContext);

    return(
        <button className='btn border my-2 p-0 home-items'
                style={{fontSize : '2rem'}}
                    onClick={toggleLayout} 
                    >💡</button>
    )
}

export default ThemeLand


