import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Response = () => {
    return(
        <div>
            <Header/>
                <main >
                    <h1>Parabéns!</h1>
                    <p>Seu lote será avaliado pelos nossos algoritmos e em breve entraremos em contato!</p>

                    <Link to="/"><button>Teste nosso formulário outra vez</button></Link>
                </main>
            <Footer/>
        </div>
        
    );
}

export default Response;