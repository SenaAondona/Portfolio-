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
            <div className="about aos fadeInUp" data-aos="fade-up" data-aos-delay="0.1s">
                <div className="container-fluid">
                    <header className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                        <p>Learn About Me</p>
                        <h2>Sena Julia Aondona</h2>
                    </header>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="about-content">
                                {/* <div className="section-header text-left">
                                    <p>Learn About Me</p>
                                    <h2>10 Years Experience</h2>
                                </div> */}
                                <div className="about-text">
                                    <p>
                                        Meet Sena Julia Aondona, a dynamic force in the digital realm with a passion for transforming ideas into online success stories. With a rich tapestry of skills, Sena is not just a digital strategist and marketer; she's a seasoned website manager and developer, as well as a reliable IT support expert.<br />
                                        For over six years, Sena has been navigating the ever-evolving landscape of digital strategy and marketing, consistently delivering impactful results. Her journey began with a fascination for the boundless possibilities of the online world, and since then, she has been on a mission to bring visions to life through innovative digital solutions.<br />
                                        As a digital strategist, Sena is a visionary who thrives on crafting comprehensive plans that seamlessly integrate marketing, technology, and user experience. Her strategic mindset, coupled with a keen understanding of market trends, enables her to stay ahead in the fast-paced digital arena.<br />
                                        But Sena doesn't stop there. She is equally at home in the coding realm, weaving her magic to develop and manage websites that not only look stunning but also function flawlessly. Her commitment to creating user-friendly, aesthetically pleasing online spaces sets her apart in the competitive world of web development.<br />
                                        As an IT support expert, Sena is the go-to person for troubleshooting and problem-solving. Her technical prowess ensures that digital hiccups are swiftly resolved, keeping the virtual gears turning smoothly.<br />
                                        In a world where the digital landscape is often a complex puzzle, Sena Julia Aondona stands out as the skilled strategist, the creative developer, and the reliable IT support expert who weaves magic in the digital realm. With a track record of success and a commitment to staying at the forefront of industry trends.<br />
                                        Not content with personal success alone, Sena is also the visionary founder of "Techherstory," a groundbreaking brand and movement dedicated to empowering women in technology and beyond. Through mentorship, resources, and community support, Techherstory aims to bridge the gender gap in tech and challenge stereotypes.
                                        Sena's commitment to diversity and empowerment makes her not just a digital virtuoso but also a passionate advocate shaping the future of tech through innovation and dedication to positive impact
                                    </p>
                                </div>
                                {/* <div className="skills">
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
                                <a className="btn" href="">Learn More</a> */}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-img">
                                <img src="img/about.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About