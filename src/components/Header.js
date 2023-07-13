import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './styles/Header.css';

const Header = ({props,isLoggedIn, setIsLoggedIn, userName}) => {
    const handleLogOut = () => {

        setIsLoggedIn(false);
        console.log('111');
    };

    return (
        
        <header className="Header">
            {
                isLoggedIn ?
                <nav className="nav">
                    <h3 className="welcome">Добро пожаловать, {userName}!</h3>
                    <Link className="navl"  exact to="/login" onClick={handleLogOut}>
                        Выход
                    </Link>
                </nav>
                : <h3 className="welcome">Добро пожаловать</h3>
            }
        </header> 
        
        
    );
}

export default Header;