import React from 'react';

import Layout from '../components/Layout';
import CardV2 from '../components/CardV2';
import SEO from "../components/seo";


const About = () => {
        const text =  "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito"

        return(
            <Layout>
            <SEO 
                title="About"
                lang="uk"
            />
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-4">
                            <h1>About</h1>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <CardV2
                                nameImage="foto01" 
                                titleCard="Titulo Card 01"
                                textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero). Card 01"
                                colorButton="gatsby"
                                backgroundCard="#e3a617"
                                styledDefault={true}
                             />
                        </div>
                        <div className="col-4">
                            <CardV2
                                nameImage="foto02" 
                                titleCard="Titulo Card 02"
                                textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero). Card 02"
                                colorButton="warning"
                                backgroundCard=""
                                styledDefault={false}
                            />
                        </div>
                        <div className="col-4">
                            <CardV2
                                nameImage="foto03" 
                                titleCard="Titulo Card 03"
                                textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero). Card 03"
                                colorButton="gatsby"
                                backgroundCard="#0000FF"
                                styledDefault={true}
                            />
                        </div>
                    </div>

                    
                </div>
            </Layout>
        )
    }

export default About