import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import '../styles/Welcome.css';
import to_do from '../img/to_do.svg'

const Welcome = () => {

    const welcomePanelRef = useRef()

    // useEffect(() => {
    //     welcomePanelRef.current.style.animation = "transitionOpacity .1s both"
    //     console.log(welcomePanelRef)
    // })

    return (
        <div ref={welcomePanelRef} className="welcome-panel">
            <img src={to_do} alt="girl with to do list" />
            <NavLink to={'/tasks'}>
                <button> Let's start</button>
            </NavLink>
            <p>Simple TO DO APP | &copy; Mateusz Lengiewicz </p>
        </div>
    );
}

export default Welcome;