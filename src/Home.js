import './main.css'
import './home.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Home () {
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();

    const toContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        const audio = document.getElementById('audio');
        audio.volume = 0.05;

        // Cleanup
        return () => {
            audio.pause();
        };
    }, []);

    const toggleAudio = () => {
        const audio = document.getElementById('audio');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Play failed:", error);
                setIsPlaying(false);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <main id="Home">
            <nav id="mobile_menu">
                <a href="/" className="cur_nav">Home</a>
                <a href="/skills" className="nav">Skills</a>
                <a href="/portfolio" className="nav">Portfolio</a>
                <a href="/contact" className="nav">Contact</a>
            </nav>
            <div id="home" className="flex_row wrapper">
                <img id="img1" src={process.env.PUBLIC_URL + '/art_profile.png'} alt="My profile pic" width="400" height="360"/>
                <aside style={{ margin: 'auto' }}>
                    <h1 id="title">Hi 👋🏻 I am Junhui (Will) Wen</h1>
                    <span id="intro">
                        As a recent graduate from UC San Diego with BS/MS degrees in Computer Science, I am passionate
                        about Software Development and Artificial Intelligence. With four years of experience in
                        computer science, I’ve explored areas ranging from full-stack development to AI/ML, always
                        driven by a desire to turn ideas into impactful solutions.
                        <br /><br />
                        During my time at UCSD, I served as a Tech Lead for the Chinese Computer Community, refining my
                        leadership and technical skills while fostering a collaborative engineering culture. Now, as I
                        embark on my career journey at Google, I’m excited to apply my expertise, continue learning,
                        and contribute to cutting-edge innovations in the tech industry.
                      </span>
                    <div id="icons">
                        <a href="https://www.linkedin.com/in/junhui-wen-73141421a/">
                            <img src={process.env.PUBLIC_URL + "/linkedin.svg"} alt="Link to my LinkedIn page" />
                        </a>
                        <a href="https://github.com/willwen96">
                            <img src={process.env.PUBLIC_URL + "/github.svg"} alt="Link to my github page" />
                        </a>
                        <a href="https://www.facebook.com/will.wen.313">
                            <img src={process.env.PUBLIC_URL + "/facebook.svg"} alt="Link to my Facebook page" />
                        </a>
                    </div>
                    <div id="home_button" className="flex_row" style={{ marginTop: '2em' }}>
                        <form action={process.env.PUBLIC_URL + "/Junhui WEN Resume.pdf"} method="get" style={{ margin: '0 2em 0 2em' }}>
                            <button>Resume</button>
                        </form>
                        <form>
                            <button onClick={() => toContact()}>Contact Me</button>
                        </form>
                    </div>
                </aside>
            </div>
            <audio id="audio" preload="metadata">
                <source src={process.env.PUBLIC_URL + "/polaroid.mp3"} type="audio/MP3" />
            </audio>
            <button
                className={`music-control ${isPlaying ? 'spinning' : ''}`}
                onClick={toggleAudio}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
                {isPlaying ? '❚❚' : '▶'}
            </button>
        </main>
    );
}

export default Home;
