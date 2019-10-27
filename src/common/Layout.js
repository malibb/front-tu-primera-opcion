import React from 'react';
import Navbar from './Navbar';
import Head from './Head';


function Layout({head,subhead,cover,children,subtitle}){

    return(
        <>
            <Navbar title = "Tu primera opción." />
            <Head title={head} subhead={subhead} subtitle={subtitle} cover={cover}/>
            {children}
        </>
    )

}

export default Layout;
