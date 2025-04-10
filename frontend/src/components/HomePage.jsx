import './Header';
import './Footer';
import './NavBar';
import './Services';
import './Slider';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Slider from './Slider';
import Services from './Services';
function HomePage() {
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
export default HomePage;