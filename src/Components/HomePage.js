import React from "react";
import { useHistory } from "react-router-dom";


export default function HomePage(){
    const history = useHistory()
    const routeToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div className='home container'>
            <img 
            className='pizza-image'
            src='./Pizza.jpg'
            alt='This is a pizza'
            />
            <button onClick={routeToPizza} className='pizzaBtn'>Pizza?</button>
        </div>
    )
}