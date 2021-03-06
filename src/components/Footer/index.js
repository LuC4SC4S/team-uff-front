import React from 'react';
import './styles.css';

const Footer = () => {
    return(
        <footer>
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li><span>Team UFF</span></li>
                    <a href="https://www.linkedin.com/in/calebe-roberto/"><li>Calebe Roberto</li></a>
                    <a href=""><li>Ana Carolina Lopes</li></a>
                    <a href="https://www.linkedin.com/in/lucas-candido-390904177/"><li>Lucas Candido</li></a>
                    <a href=""><li>Matheus Fumian</li></a>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;