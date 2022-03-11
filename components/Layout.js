import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layour = ({ children, pagina, guitarra }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name='description' content='Sitio Web de Venta de Guitarras' />
            </Head>
            
            <Header
                guitarra={guitarra}
            />
            
            {children}

            <Footer />
        </div>
    );
}

Layour.defaultProps = {
    guitarra: null
}
 
export default Layour;