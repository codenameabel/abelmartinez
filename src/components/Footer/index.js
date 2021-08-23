import React from 'react';
import { FileCode } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-top">
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <a href="mailto: newabelmartinez@gmail.com" className="fs-6 text-decoration-none" style={{ color: '#ff6b35' }}>newabelmartinez@gmail.com</a>
                </div>

                <ul className="nav nav-pills">
                    <li><FileCode className="mx-2" style={{ color: '#004e89' }}/></li>
                </ul>
            </header>
        </div>
    )
};

export default Footer;