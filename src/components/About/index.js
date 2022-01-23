import React from 'react';
import ProfessionalMe from "../../assets/images/portrait2022.jpg"

function About() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={ProfessionalMe} className="d-block rounded-circle mx-lg-auto img-fluid" alt="" width="80%"
                        height="400" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: '#004e89' }}>My Journey</h1>
                    <p className="lead" style={{ color: '#1a659e' }}>Here are some of my finished projects! Please feel free to reach out.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="mailto: newabelmartinez@gmail.com" type="button" className="btn btn-lg px-4 me-md-2" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Reach Out</span></a>
                        <a href="https://github.com/codenameabel" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-outline-secondary btn-lg px-4">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 