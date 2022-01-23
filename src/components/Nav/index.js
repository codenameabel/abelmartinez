import React from 'react';
import '../../assets/style/styles.css';
import { FileCodeFill } from 'react-bootstrap-icons';

// function Nav() {
function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="https://codenameabel.github.io/abelmartinez/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <FileCodeFill className="mx-2" style={{ color: '#004e89' }}/>
                    <span className="fs-4 dark-blue" style={{ color: '#004e89' }}>Abel Martinez</span>
                </a>

                <ul className="nav nav-pills">
                    {/* <li className={`nav-item ${projectSelected && 'navActive'}`}><span onClick={() => {setProjectSelected(true); setResumeSelected(false);}}>Projects</span></li> */}
                    {/* <li className={`nav-item ${resumeSelected && 'navActive'}`}><span onClick={() => {setProjectSelected(false); setResumeSelected(true);}}>Resume</span></li> */}
                    <li className="nav-item"><a data-testid='projects' href="#projects" className="nav-link" onClick={() => setContactSelected(false)} style={{ color: '#ff6b35' }}>Projects</a></li>
                    <li className={`nav-item ${contactSelected}`}><a data-testid='reach-out' href="#reach-out" className="nav-link" onClick={() => setContactSelected(true)} style={{ color: '#ff6b35' }}>Credentials</a></li>
                </ul>
            </header>
        </div>
    )
};

export default Nav;
