import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDropzone } from "react-dropzone"
import styled from 'styled-components';

//import api from '../../services/api';
import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Home(props) {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [peso, setPeso] = useState(0);
    const [volume, setVolume] = useState(0);
    const [valor_frete, setValor_Frete] = useState(0);
    
    const [files, setFiles] = useState([]);
    

    const history = useHistory();

    const { 
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
        } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
          setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    });

    const getColor = (props) => {
        if (props.isDragAccept) {
            return '#00e676';
        }
        if (props.isDragReject) {
            return '#ff1744';
        }
        if (props.isDragActive) {
            return '#2196f3';
        }
        return '#eeeeee';
    }
      
    const Container = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-width: 2px;
        border-radius: 2px;
        border-color: ${props => getColor(props)};
        border-style: dashed;
        background-color: #fafafa;
        color: #bdbdbd;
        outline: none;
        transition: border .24s ease-in-out;
    `;
    

    async function HandleSubmit(e){
        e.preventDefault();

        const data = {
            nome,
            cnpj,
            cidade,
            estado,
            telefone,
            email,
            descricao,
            tipo,
            peso,
            volume,
            valor_frete,
            files
        };

        try {
            //const response = await api.post('', data);
            localStorage.setItem("Dados", JSON.stringify(data));
            history.push('/response')
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
                                <label htmlFor="nome">Nome</label>
                                <input 
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    value={nome}
                                    onChange = {e => setNome(e.target.value)}
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
                                <label htmlFor="cidade">Cidade</label>
                                <input 
                                    type="text"
                                    name="cidade"
                                    id="cidade"
                                    value={cidade}
                                    onChange = {e => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="estado">Estado</label>
                                <input 
                                    type="text"
                                    name="estado"
                                    id="estado"
                                    value={estado}
                                    onChange = {e => setEstado(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="telefone">Telefone</label>
                                <input 
                                    type="text"
                                    name="telefone"
                                    id="telefone"
                                    value={telefone}
                                    onChange = {e => setTelefone(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange = {e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="descricao">Descrição do Lote</label>
                                <input 
                                    type="text"
                                    name="descricao"
                                    id="descricao"
                                    value={descricao}
                                    onChange = {e => setDescricao(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="tipo">Tipo de Sucata</label>
                                <input 
                                    type="text"
                                    name="tipo"
                                    id="tipo"
                                    value={tipo}
                                    onChange = {e => setTipo(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="peso">Peso do Lote</label>
                                <input 
                                    type="number"
                                    name="peso"
                                    id="peso"
                                    value={peso}
                                    onChange = {e => setPeso(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="volume">Volume</label>
                                <input 
                                    type="number"
                                    name="volume"
                                    id="volume"
                                    value={volume}
                                    onChange = {e => setVolume(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="valor_frete">Valor do Frete</label>
                                <input 
                                    type="number"
                                    name="valor_frete"
                                    id="valor_frete"
                                    value={valor_frete}
                                    onChange = {e => setValor_Frete(e.target.value)}
                                />
                            </div>
                            <div className="container">
                                <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                                    <label htmlFor="files">Fotos do Lote</label>
                                    <input
                                        {...getInputProps()} 
                                        name="files"
                                        id="files"
                                        value={files}
                                        onChange = {e => setFiles(e.target.value)}
                                    />{
                                        isDragActive ?
                                            <p>Jogue as Fotos Aqui</p> :
                                            <p>Arraste algumas fotos aqui.</p>
                                    }
                                </Container>
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