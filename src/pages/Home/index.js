import React, { useState, useMemo } from 'react';

import { useHistory } from 'react-router-dom';
import { useDropzone } from "react-dropzone"

import api from '../../services/api';
import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Home() {
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
    
    const [files, setFiles] = useState([])
    

    const history = useHistory();

    const { 
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject } = useDropzone({
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

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'black',
        borderStyle: 'dashed',
        backgroundColor: '#EEFFF7',
        color: '#black',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const activeStyle = {
        borderColor: '#2196f3'
      };
      
      const acceptStyle = {
        borderColor: '#00e676'
      };
      
      const rejectStyle = {
        borderColor: '#ff1744'
      };

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), []);
    

    async function HandleSubmit(e){
        e.preventDefault();

        const data = {
            nome,
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
                            <div className="field" {...getRootProps({style})}>
                                <label htmlFor="files">Fotos do Lote</label>
                                <input 
                                    {...getInputProps()} 
                                    name="files"
                                    id="files"
                                    value={files}
                                    className="field-files"
                                    onChange = {e => setCnpj(e.target.value)}
                                />{
                                    isDragActive ?
                                        <p>Jogue as Fotos Aqui</p> :
                                        <p>Arraste algumas fotos aqui ou clique para selecionar</p>
                                }
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