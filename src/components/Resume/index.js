import React from 'react';
import resume from "../../assets/images/Resume-Picture.png";
import resumeDoc from "../../assets/documents/abel-martinez-resume.pdf";
import { Github, Linkedin } from 'react-bootstrap-icons';

function Resume() {
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-5 fw-bold" style={{ color: '#004e89' }}>Resume</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" style={{ color: '#1a659e' }}>Looking for new opportunities to grow my career as a web engineer!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href={resumeDoc} download="patrick-lago-resume" type="button" className="btn btn-lg px-4 me-sm-3"  style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Download Here</span></a>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5">
                    <img src={resume} className="img-fluid border rounded-3 shadow-lg" alt="Resume"
                        width="700" height="500" loading="lazy" />
                </div>
            </div>
            
            <h1 className="display-5 fw-bold mt-5" style={{ color: '#004e89' }}>Resources</h1>
            <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Linkedin className="mx-2" style={{ color: '#004e89' }}/><a href="https://www.linkedin.com/in/abel-martinez-309097209/" className="text-decoration-none" style={{ color: '#1a659e' }} target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
                        <li className="list-group-item"><Github className="mx-2" style={{ color: '#004e89' }}/><a href="https://github.com/codenameabel" className="text-decoration-none" style={{ color: '#1a659e' }} target="_blank" rel="noopener noreferrer" >codenameabel</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume; 