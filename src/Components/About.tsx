import ProgressBar from 'react-bootstrap/ProgressBar';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
// import ReactWOW from 'react-wow'

const About = () => {
    const [progress, setProgress] = useState({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
    });

    const handleProgress = (index: string, value: number) => {
        setProgress(pv => ({ ...pv, [index]: value }))
    }

    return (
        <section id="about">
            <div className="about aos fadeInUp" data-aos-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="img/about.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-header text-left">
                                    <p>Learn About Me</p>
                                    <h2>10 Years Experience</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                    </p>
                                </div>
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Web Design</p>
                                        <p>85%</p>
                                    </div>
                                    <div className="">
                                        <Waypoint
                                            onEnter={() => handleProgress("first", 85)}
                                            onLeave={() => handleProgress("first", 0)}
                                        />
                                        <ProgressBar now={progress.first} />
                                        {/* <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div> */}
                                    </div>
                                    <div className="skill-name">
                                        <p>Web Development</p>
                                        <p>95%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("second", 95)}
                                        onLeave={() => handleProgress("second", 0)}
                                    />
                                    <ProgressBar now={progress.second} />
                                    <div className="skill-name">
                                        <p>Apps Design</p>
                                        <p>90%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("third", 90)}
                                        onLeave={() => handleProgress("third", 0)}
                                    />
                                    <ProgressBar now={progress.third} />
                                    <div className="skill-name">
                                        <p>Apps Development</p>
                                        <p>85%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("fourth", 85)}
                                        onLeave={() => handleProgress("fourth", 0)}
                                    />
                                    <ProgressBar now={progress.fourth} />
                                </div>
                                <a className="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About