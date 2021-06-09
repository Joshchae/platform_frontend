import React from 'react';
// import '../../App.css';
import './Footer.css';
// import { Navbar } from 'react-bootstrap';
import Disclaimer from '../../pages/disclaimer/Disclaimer';
import { CgCopyright } from 'react-icons/cg';

function Footer() {
    const iconStyles = { color: ' #00303f', fontSize: "0.8em" };
    return (
        <div className='disclaimer-copyright'>
            <div className='disclaimer'>
                <Disclaimer />Disclaimer
            </div>
            <div className='copyright'>
                <p><CgCopyright style={iconStyles} /> 2021 by Josh, Franzi, Joldon </p>
            </div>
        </div>    
    )
}

export default Footer; 

//<div className="footer_container">
/* <div className="Navbar">
                    <Navbar sticky='bottom' expand='lg' variant='primary' bg='success' > 
                        <div className='disclaimer-copyright'>
                            <div className='disclaimer'>
                                <Disclaimer />Disclaimer
                            </div>
                            <div className='copyright'>
                                <p><CgCopyright style={iconStyles} /> 2021 by Josh, Franzi, Joldon </p>
                            </div>
                        </div>
                    </Navbar>
            </div> */
/* </div> */