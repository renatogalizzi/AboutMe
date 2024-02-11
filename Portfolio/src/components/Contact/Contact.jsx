import React from 'react';

const Contact = () => {
    return (
        <div className='text-center p-5 text-center mt-5 w-25 mx-auto rounded-3 d-flex'>
            {/* <h2 className='text-white opacity-100'>Under Construction...Here you can send me an email...</h2> */}
            <div className="d-flex flex-column w-50 mx-auto">
                <button type="button" className="btn btn-lg btn-dark mt-3">
                <a href="/Renato Galizzi.pdf" download="Renato Galizzi.pdf" target="_blank" className="text-white link-white">Descargar CV</a>
                </button>
                <button type="button" className="btn btn-lg btn-dark mt-3">
                <a href="/CV Renato Galizzi.pdf" download="Renato Galizzi.pdf" target="_blank" className="text-white">Download CV</a>
                </button>
            </div>
        </div>
    );
};

export default Contact;