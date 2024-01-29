import Typewriter from 'typewriter-effect'
import {BsCalendar3} from 'react-icons/bs'
import './About.css';
import 'aos/dist/aos.css';

const About = () => {
   
    return ( 
        <div className='about'>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <h2 className='about-head'>ABOUT ME</h2>
            <div className="about-content">
                <div className="ab-left " data-aos="fade">
                <div class="lg-square b2"></div>
                    <h2>I'm <span>Athik Mohamed</span> and I'm a &nbsp;</h2>
                    <h2 className='ab-motion-text'><Typewriter options={{autoStart : true,loop :true,delay :50,strings:["Web Developer","Software Developer","Web Designer"]}}/></h2>
                    <p>100X Engineer crafting solutions to conquer real-world challenges in software Engineering</p>
                    <div className="ab-table" >
                        <table>
                            <tr>
                                <td><b>Birthday</b></td>
                                <td>21 Jan 2002</td>
                            </tr>
                            <tr>
                                <td><b>Phone</b></td>
                                <td>+91-9092353985</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>athik.sde@gmail.com</td>
                            </tr>
                            <tr>
                                <td><b>From</b></td>
                                <td>Salem, Tamil Nadu - 636001</td>
                            </tr>
                            <tr>
                                <td><b>Language</b></td>
                                <td>Tamil, English</td>
                            </tr>
                        </table>
                    </div>
                    <button className='cc-button ab-button '>Download CV</button>
                </div>
                <div className="ab-right" data-aos="zoom-in">
                <div class="lg-square b1"></div>
                <div class="lg-square b2"></div>
                <div class="lg-square b3"></div>
                <div class="lg-square b4"></div>
                <div class="lg-square b5"></div>
                <h2>Education</h2>
                <div className="ab-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="about-card">
                        <div className="cal">
                        <div className="about-logo">
                                <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2021-2024</div>
                        </div>
                            <div className="ab-card-content">
                                <h3>B.E. Computer Science</h3>
                                <p>Currently pursuing a Bachelor's degree in Computer Science from Government College of Engineering, Salem, maintaining a CGPA of 9.4 up to the sixth semester.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="about-logo">
                            <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2018-2021</div>
                            </div>
                            <div className="ab-card-content">
                                <h3>Diploma Engineering</h3>
                                <p>Completed my  Diploma in Computer Science from Thiagarajar Polytechnic Collefe, with an aggregate of 97.8%.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="about-logo">
                                <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2017-2018</div>
                            </div>
                            <div className="ab-card-content">
                                <h3>SSLC</h3>
                                <p>Completed my Secondary Education from Holy Cross Matriculation Higher Secondary School, with an aggregate of 90.05%.            </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                
        </div>
     );
}
 
export default About;