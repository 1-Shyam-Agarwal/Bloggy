import React from 'react' ;
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Footer.css';
import { useLocation } from 'react-router-dom';


function Footer() {

    const{currentpage , 
            totalpages ,
            nextPageHandler,prevPageHandler ,
            setNextbuttonvisibility ,
            setPrevbuttonvisibility,
            nextbuttonvisibility,
            prevbuttonvisibility } = useContext(AppContext);

            if (currentpage === 1) {
                setPrevbuttonvisibility(false);
                setNextbuttonvisibility(true);
            } else if (currentpage === totalpages) {
                setNextbuttonvisibility(false);
                setPrevbuttonvisibility(true);
            } else {
                setPrevbuttonvisibility(true);
                setNextbuttonvisibility(true);
            }
            
    return(
        <div className='footer-wrapper'>
            <div className='footer'>
                <div className='buttonsection'>
                    {
                        prevbuttonvisibility ? <button onClick={prevPageHandler} className='prevbutton'>Previous</button> : <div></div>
                    }
                    {
                        nextbuttonvisibility? <button onClick={nextPageHandler} className='nextbutton'>Next</button> :<div></div>
                    }
                </div>
                <p className='pageprofile'><span>{currentpage}</span> out of <span>{totalpages}</span></p>
            </div>
        </div>
    );
}


export default Footer;
