import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './styles/Header.css';
import imgSrc from '../img/logo.svg';

const Header = ({props,isLoggedIn, setIsLoggedIn, userName}) => {
    const handleLogOut = () => {

        setIsLoggedIn(false);
        //console.log('111');
    };

    return (
        
        <header className="Header">
            {
                isLoggedIn ?
                <nav className="nav">
                    <img className="logo" src={imgSrc} alt="логотип" />
                    <h3 className="welcome">Добро пожаловать, {userName}!</h3>
                    <Link className="navl"  exact to="/login" onClick={handleLogOut}>
                        Выход
                    </Link>
                </nav>
                : <nav className="nav">
                    <img className="logo" src={imgSrc} alt="логотип" />
                    <h3 className="welcome">Добро пожаловать</h3>
                    <Link className="navl" exact to="/login">
                        Вход
                    </Link></nav>
            }
        </header> 
    );
}

export default Header;