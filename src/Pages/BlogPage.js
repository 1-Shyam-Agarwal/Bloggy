import React from 'react' ;
import Blogsection from '../Components/BlogsSection';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './BlogPage.css';

function BlogPage() {

    const NavigateTo = useNavigate();

    return(

        <div>
            <Header/>
            
            <div>
                <button className="backButton" onClick={()=>NavigateTo(-1)}>
                    Back
                </button>
            </div>

            <Blogsection/>
            <Footer/>
        </div>
    );
}

export default BlogPage;