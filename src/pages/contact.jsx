import React from 'react';
import Menu from '../components/Menu';
import Layout from '../components/Layout';
import Card from '../components/Card';

const Contact = () => {
        const text =  'meu texto Contact';

        return(
            <Layout>
                <Menu />
                <h1>Contact</h1>
                <h2>{text}</h2>
                <Card />
            </Layout>
        )
    }

export default Contact