import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomePage(){
    const history = useHistory()

    const routeToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div className='home container'>
            <img 
            className='pizza-image'
            src='https://source.unsplash.com/IfQlwNqJqV8'
            alt='This is a pizza'
            />
            <div className="pizzaButton">
                <button onClick={routeToPizza} className='pizzaBtn'>Pizza?</button>
            </div>
        </div>
    )
}