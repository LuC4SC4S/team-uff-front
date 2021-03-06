import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Home() {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');

    const history = useHistory();

    async function HandleSubmit(e){
        e.preventDefault();

        const data = {
            name,
            cnpj,
        };

        try {
            const response = await api.post('cadastro', data);

            alert("Cliente cadastrado com sucesso!" + response);
            history.push('/')
        }catch (err){
            alert(err);
        };
    }


    return(
        <div id="page-create">
            <Header />
            <form onSubmit={HandleSubmit}>
                <div id="pseudo-form">
                    <div id="form-main">
                        <div><h3>ClassificAço é uma ferramenta capaz de analisar a qualidade do seu lote atráves de algoritmos. <br/>Tudo que você precisa fazer é preencher os dados abaixo.</h3></div>
                        
                        <fieldset>
                            <div className="field">
                                <label htmlFor="name">Nome</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange = {e => setName(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Empresa</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Cidade</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Estado</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Telefone</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Email</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Descrição do Lote</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Peso do Lote</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Tipo de Sucata</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cnpj">Fotos do Lote</label>
                                <input 
                                    type="text"
                                    name="cnpj"
                                    id="cnpj"
                                    value={cnpj}
                                    onChange = {e => setCnpj(e.target.value)}
                                />
                            </div>
                            
                        </fieldset>
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <Footer />
        </div>
    );
};

export default Home;