import React from 'react'
import { useHistory } from 'react-router-dom';
import './About.css'
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';

function About() {
    const history = useHistory();
    const handleLinkedInJoshClick = (e) => {
        let path = window.open('https://www.linkedin.com/in/hyunki-chae-08b43a157/');
        history.push(path);
    };

    const handleGitJoshClick = (e) => {
        let path = window.open('https://github.com/Joshchae?tab=repositories');
        history.push(path);
    }

    const handleLinkedInFranziClick = (e) => {
        let path = window.open('https://www.linkedin.com/in/franziska-luig/');
        history.push(path);
    };

    const handleGitFranziClick = (e) => {
        let path = window.open('https://github.com/zuzuc');
        history.push(path);
    }

    const handleLinkedInJoldonClick = (e) => {
        let path = window.open('https://www.linkedin.com');
        history.push(path);
    };

    const handleGitJoldonClick = (e) => {
        let path = window.open('https://www.github.com');
        history.push(path);
    }

    return (
        <>
            <div className='linkedin-github'>
                <h3>Josh</h3>
                    <li><IoLogoLinkedin onClick={handleLinkedInJoshClick} /></li>
                    <li><IoLogoGithub onClick={handleGitJoshClick} /></li>
                <h3>Franzi</h3>
                    <li><IoLogoLinkedin onClick={handleLinkedInFranziClick} /></li>
                    <li><IoLogoGithub onClick={handleGitFranziClick} /></li>
                <h3>Joldon</h3>
                    <li><IoLogoLinkedin onClick={handleLinkedInJoldonClick} /></li>
                    <li><IoLogoGithub onClick={handleGitJoldonClick} /></li>
            </div>
        </ >
    )
}

export default About;

