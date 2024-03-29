import '../Skills/Skills.css'
import React from 'react';
import 'aos/dist/aos.css';
const Skills = () => {
    return ( 
        <div className="skills">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="sk-content">
                <h1>SKILLS</h1>
                <div className="sk-box">
                    
                    <div className="sk-left" data-aos="zoom-in">
                        <div class="lg-square b1"></div>
                        <div class="lg-square b2"></div>
                        <div class="lg-square b3"></div>
                        <div class="lg-square b4"></div>
                        <div class="lg-square b5"></div>
                        <div className="sk-left-content">
                        <h2 className='tech-head'>Technical Skills</h2>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-html'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-css'></span>
                                </div>
                            </div>
                           
                            <div className="skill-bar">
                                <div className="label">
                                    <span>React</span>
                                    <span>65%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-react'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>Node/Express</span>
                                    <span>20%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-node'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>FireBase</span>
                                    <span>70%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-firebase'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>Java</span>
                                    <span>70%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-java'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>C/C++</span>
                                    <span>40%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-cpp'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>Python</span>
                                    <span>30%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-python'></span>
                                </div>
                            </div>
                            <div className="skill-bar">
                                <div className="label">
                                    <span>JavaScript</span>
                                    <span>30%</span>
                                </div>
                                <div className="bar">
                                    <span className='bar-per bar-per-js'></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="sk-right" data-aos="zoom-in">
                        <div class="lg-square b1"></div>
                        <div class="lg-square b2"></div>
                        <div class="lg-square b3"></div>
                        <div class="lg-square b4"></div>
                        <div class="lg-square b5"></div>
                        <div className="sk-right-content">
                        <h2 className='professional'>Professional Skills</h2>
                            <div className="circle-card">
                                <div className="card">
                                    <div className="dot"></div>
                                    <div className="percent">
                                        <svg>
                                            <circle cx="80" cy="80" r="80"/>
                                            <circle cx="80" cy="80" r="80"/>
                                        </svg>
                                        <div className="num">
                                            <h2>70<span>%</span></h2>
                                            <p>Communication</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card2">
                                    <div className="dot dot2"></div>
                                    <div className="percent percent2">
                                        <svg>
                                            <circle cx="80" cy="80" r="80"/>
                                            <circle cx="80" cy="80" r="80"/>
                                        </svg>
                                        <div className="num">
                                            <h2>80<span>%</span></h2>
                                            <p>Team Work</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card3">
                                    <div className="dot dot3"></div>
                                    <div className="percent percent3">
                                        <svg>
                                            <circle cx="80" cy="80" r="80"/>
                                            <circle cx="80" cy="80" r="80"/>
                                        </svg>
                                        <div className="num">
                                            <h2>75<span>%</span></h2>
                                            <p>Creativity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card4">
                                    <div className="dot dot4"></div>
                                    <div className="percent percent4">
                                        <svg>
                                            <circle cx="80" cy="80" r="80"/>
                                            <circle cx="80" cy="80" r="80"/>
                                        </svg>
                                        <div className="num">
                                            <h2>70<span>%</span></h2>
                                            <p>Designing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;