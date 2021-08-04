import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
            
        });

        return () => {
            window.removeEventListener("scroll")
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix-logo" className="nav__logo" />
        </div>
    );
};

export default Nav;