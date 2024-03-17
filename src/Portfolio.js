import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import './portfolio.css';
import './Effect';

function Portfolio() {
    const location = useLocation();

    useEffect(() => {
        // Track the page view when the component is mounted
        ReactGA.pageview(location.pathname);
    }, [location.pathname]);

    return (
        <main id="Portfolio">
            <nav id="mobile_menu">
                <a href="/" className="nav">Home</a>
                <a href="/skills" className="nav">Skills</a>
                <a href="/portfolio" className="cur_nav">Portfolio</a>
                <a href="/contact" className="nav">Contact</a>
            </nav>
            <div id="main_page" className="wrapper">
                <h1>My Portfolio</h1>
                <section className="work">
                    <details open>
                        <summary><strong>CyberArch Warehouse Intern</strong></summary>
                        <p>Provide a sustainable approach to preserve knowledge of endangered cultural heritage sites
                            via virtual and augmented reality.</p><br/>
                        {/* <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Goal Tritons Logo" style="position: relative; display: inline-block; margin-bottom: 1rem"><br> */}
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role: </b>Plugins Developer</p>
                            <p><b>Tools:</b> Unreal Engine 5, C++, React, Node.js</p>
                        </div>
                        <section className={"flex_row"} style={{display: 'flex'}}>
                            <a style={{width: '360px'}} href="https://today.ucsd.edu/story/students-showcase-their-work-in-augmented-and-virtual-reality-at-the-qualcomm-institute" target="_blank">
                                <img src={process.env.PUBLIC_URL + "/QiDemo.jpeg"} alt="Demo Day Report on UC San Diego Today"/>
                            </a>
                            <a style={{flex: 6, alignSelf: 'center', color: '#0077BE'}} href="https://today.ucsd.edu/story/students-showcase-their-work-in-augmented-and-virtual-reality-at-the-qualcomm-institute" target="_blank">
                                <p className={'report'}>
                                    UC San Diego Today: Students Showcase Their Work in Augmented and Virtual Reality
                                    at the Qualcomm Institute
                                </p>
                            </a>
                        </section>
                    </details>
                </section>
                <section className="work">
                    <details open style={{width: '100%'}}>
                        <summary><strong>Snap Map</strong></summary>
                        <p>A mobile app that aims to inspire wanderlust, foster meaningful connections, and create a global community of passionate travelers.</p><br/>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role: </b>Product Manager & Tech Lead</p>
                            <p><b>Tools:</b> React Native, MongoDB, Netlify, AWS, Ably</p>
                        </div>
                        <section className={"flex_row"} style={{justifyContent: 'space-evenly', width: '100%'}}>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/map_demo1.png"} alt="demo1"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/map_demo2.png"} alt="demo2"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/map_demo3.png"} alt="demo3"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/map_demo4.png"} alt="demo4"/>
                        </section>
                        <i>Fig. 1 - Medium-fidelity prototypes with full functions implemented</i>
                    </details>
                </section>
                <section className="work">
                    <details open style={{width: '100%'}}>
                        <summary><strong>UCal San Diego</strong></summary>
                        <p>A comprehensive calorie and nutrition tracker application to help users easily track their daily food intake and monitor nutritional information.</p><br/>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role: </b>Co-leader, Scrum Master</p>
                            <p><b>Tools:</b> React Native Expo, MongoDB, Netlify </p>
                        </div>
                        <section className={"flex_row"} style={{justifyContent: 'space-evenly', width: '100%'}}>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/profile.jpg"} alt="demo1"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/dashboard.PNG"} alt="demo2"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/stats.PNG"} alt="demo3"/>
                            <img style={{ margin: "10px 10px", width: '23%'}} src={process.env.PUBLIC_URL + "/foods.PNG"} alt="demo4"/>
                        </section>
                        <i>Fig. 2 - Medium-fidelity prototypes with full functions implemented</i>
                    </details>
                </section>
                <section className="work">
                    <details open>
                        <summary><strong>Goal Tritons</strong></summary>
                        <p>A highly accessible & integrated informational website for career-finding among UCSD students</p><br/><br/>
                        {/* <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Goal Tritons Logo" style="position: relative; display: inline-block; margin-bottom: 1rem"><br> */}
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role: </b> Tech Lead</p>
                            <p><b>Tools:</b> Vue, AWS, SpringBoot, Node.js</p>
                        </div>
                        <a href="https://dynamic-crisp-4efd82.netlify.app/" target="_blank"><img src={process.env.PUBLIC_URL + "/GT_home.svg"} alt="Goal Tritons' Home Page" width="680px" height="510px" loading="lazy" style={{marginLeft: "50px"}}/></a>
                    </details>
                </section>
                <section className="work">
                    <details>
                        <summary><strong>Birds of a Feather</strong></summary>
                        <p>Concise Android App for connecting students with others who take the same courses as them</p><br/><br/>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role:</b> Co-leader </p>
                            <p><b>Tools:</b> Java, Android Studio, Robolectric</p>
                        </div>
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/BOF.png"} alt="Birds of a Feather Wireframe" />
                            <figcaption><i>Fig. 3 - One of the wireframes we drew</i></figcaption>
                        </figure>
                    </details>
                </section>
            </div>
        </main>
    );
}

export default Portfolio;
