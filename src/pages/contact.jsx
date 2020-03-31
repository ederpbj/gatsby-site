import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Contact = () => {
    const text =  "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito"

        return(
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-4">
                            <h1>Contact</h1>
                            <p>{text}</p>
                            <Card />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

export default Contact