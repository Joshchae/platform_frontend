import React from 'react'
import { useHistory } from 'react-router-dom';
import './About.css'
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { Card, CardDeck } from 'react-bootstrap';

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
        <div className='blue-box'>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptates. Fuga, ullam ut voluptas, harum, dolore ducimus voluptate voluptatibus aliquid nesciunt aut provident. Nisi maxime quibusdam aut ab omnis porro?

            </h4>
        </div>
        <div>
            <div className='about-box'>
            <CardDeck expand="sm">
                <Card style={{ height: '15rem', cursor: 'default' }}>
                    <Card.Body>
                    <Card.Title>Josh</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        <li><IoLogoLinkedin onClick={handleLinkedInJoshClick} /></li>
                        <li><IoLogoGithub onClick={handleGitJoshClick} /></li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ height: '15rem', cursor: 'default' }}>
                    <Card.Body>
                    <Card.Title>Franzi</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        <li><IoLogoLinkedin onClick={handleLinkedInFranziClick} /></li>
                        <li><IoLogoGithub onClick={handleGitFranziClick} /></li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ height: '15rem', cursor: 'default' }}>
                    <Card.Body>
                    <Card.Title>Joldon</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        <li><IoLogoLinkedin onClick={handleLinkedInJoldonClick} /></li>
                        <li><IoLogoGithub onClick={handleGitJoldonClick} /></li>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </div>
        </>
    )
}

export default About;

// /* <div className='linkedin-github'>
//     <h3>Josh</h3>
//         <li><IoLogoLinkedin onClick={handleLinkedInJoshClick} /></li>
//         <li><IoLogoGithub onClick={handleGitJoshClick} /></li>
//     <h3>Franzi</h3>
//         <li><IoLogoLinkedin onClick={handleLinkedInFranziClick} /></li>
//         <li><IoLogoGithub onClick={handleGitFranziClick} /></li>
//     <h3>Joldon</h3>
//         <li><IoLogoLinkedin onClick={handleLinkedInJoldonClick} /></li>
//         <li><IoLogoGithub onClick={handleGitJoldonClick} /></li>
// </div> */