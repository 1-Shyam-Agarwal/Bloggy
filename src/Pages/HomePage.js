import React from 'react' ;
import Header from '../Components/Header';
import Blogsection from '../Components/BlogsSection';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';

function HomePage() {

    return(
        <div>
            <Header/>
            <HeroSection/>
            <Blogsection/>
            <Footer/>
        </div>
    );
}

export default HomePage;