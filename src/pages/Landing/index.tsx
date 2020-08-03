import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/heart.png';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img 
                        src={logoImg} 
                        alt="Logotipo"
                    />
                    <h2>Your online study platform.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Study Platform" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>

                    <Link to="/teach" className="teach">
                        <img src={teachIcon} alt="Teach"/>
                        Teach
                    </Link>
                </div>

                <span className="total-connections">
                    Total of XXX connections made <img src={heartIcon} alt="Heart icon"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;