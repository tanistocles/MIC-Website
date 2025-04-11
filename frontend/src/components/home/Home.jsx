
import React from 'react';
import { Header, Footer, NavBar, Slider } from '../UI-shared';
import Services from './Services';

function Home() {
    return(

        <div>
            <Header/>
            <Slider/>
            <NavBar/>
            <Services/>
            <Footer/>
        </div>
    )
}
export default Home;