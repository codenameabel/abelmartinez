import React from 'react';
import project1 from "../../assets/images/project1.png";
import hausKeepr from "../../assets/images/hauskeepr.png";
import webkitPic from "../../assets/images/webkit.png";
import Uru from "../../assets/images/UruSite.png";

function Projects() {
    return (
        <div>
            {/* hauskeepr */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-7 p-3 mx-lg-6 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1" style={{ color: '#004e89' }}>hausKeepr</h1>
                        <p className="lead" style={{ color: '#1a659e' }}>hausKeepr is an app where you can hire professionals for any task you need done.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="https://hauskeepr-mvp.herokuapp.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Click here to see!</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow">
                        <img src={hausKeepr} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>
            
            {/* budget tracker */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-4 p-0 overflow-hidden shadow">
                        <img src={webkitPic} className="rounded-lg-3" alt="" width="320"/>
                    </div>
                    
                    <div className="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-end" style={{ color: '#004e89' }}>Budget Tracker</h1>
                        <p className="lead text-end" style={{ color: '#1a659e' }}>If you want to keep track of your money in a easier style, checkout the budget tracker app.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4 mb-lg-3">
                            <a href="https://budget-tracker-new.herokuapp.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Budget Tracker</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* project 1 */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-7 p-3 mx-lg-6 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1" style={{ color: '#004e89' }}>Project Aqua Nauticus</h1>
                        <p className="lead" style={{ color: '#1a659e' }}>PAN or Project Aqua Nauticus is a weather application that keeps track of weather conditions and gives you recent enviromental news about the searched city. This project was done with two class mates during bootcamp.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="https://patricklago21.github.io/ucberk-project-1/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Check It Out</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow">
                        <img src={project1} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>

            {/* Final Project */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-4 p-0 overflow-hidden shadow">
                        <img src={Uru} className="rounded-lg-3" alt="" width="320"/>
                    </div>
                    
                    <div className="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-end" style={{ color: '#004e89' }}>URU</h1>
                        <p className="lead text-end" style={{ color: '#1a659e' }}>If you're looking for a therapist who specializes from yoga to even music for your child, look no further. Uru is an app just for that. Log in and scroll through the many thereapist.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4 mb-lg-3">
                            <a href="https://uru.herokuapp.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>URU</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Projects;