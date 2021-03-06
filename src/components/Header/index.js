import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from "../../img/Classificaço Sem Fundo.png";

const Header = () => {
    return(
        <header>
            <Link to="/"><img src={Logo} alt="Classificaço Logo"></img></Link>
        </header>
    );
}

export default Header;