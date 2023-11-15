// import { useRef } from "react";
import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Modal from 'react-bootstrap/Modal';
// import Typed from "typed.js";

// const ReadMore = ({ children }:PropsWithChildren) => {
//     // let text = "";
//     // if(children !== undefined){
//     //     text = children.toString();
//     // }
//     const text = children;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//         setIsReadMore(!isReadMore);
//     };
//     return (
//         <p className="about">
//             {isReadMore ? text!.slice(0, 300) : text}
//             <span
//                 onClick={toggleReadMore}
//                 className="btn btn-primary"
//                 style={{ color: "green" }}
//             >
//                 {isReadMore ? "...Read more" : " Show less"}
//             </span>
//         </p>
//     );
// };

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const paragraphStyle = {
    //     display: '-webkit-box',
    //     WebkitLineClamp: 4,
    //     WebkitBoxOrient: 'vertical',
    //     overflow: 'hidden'

    // };

    const handleClose = () => setIsOpen(false);
    // const handleShow = () => setIsOpen(true);
    return (
        <section className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-sm-12 col-md-6 pb-2">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Sena Aondona</h1>
                                <ReactTypingEffect
                                speed={1}
                                eraseSpeed={1}
                                    className='d-flex'
                                    text={["Digital Strategist/Marketer", "Website Developer/Manager", "IT Support"]}
                                />
                                {/* <h2 ref={el}></h2> */}
                                <p className="about">
                                    Meet Sena Julia Aondona, a dynamic force in the digital realm with a passion for transforming ideas into online success stories. With a rich tapestry of skills, Sena is not just a digital strategist and marketer; she's a seasoned website manager and developer, as well as a reliable IT support expert.
                                </p>
                                {/* <ReadMore>
                                    
                                </ReadMore> */}
                                <Modal show={isOpen} onHide={handleClose} size="lg">
                                    <Modal.Header closeButton>
                                        <Modal.Title>About Sena</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Meet Sena Julia Aondona, a dynamic force in the digital realm with a passion for transforming ideas into online success stories. With a rich tapestry of skills, Sena is not just a digital strategist and marketer; she's a seasoned website manager and developer, as well as a reliable IT support expert.<br />
                                        For over six years, Sena has been navigating the ever-evolving landscape of digital strategy and marketing, consistently delivering impactful results. Her journey began with a fascination for the boundless possibilities of the online world, and since then, she has been on a mission to bring visions to life through innovative digital solutions.<br />
                                        As a digital strategist, Sena is a visionary who thrives on crafting comprehensive plans that seamlessly integrate marketing, technology, and user experience. Her strategic mindset, coupled with a keen understanding of market trends, enables her to stay ahead in the fast-paced digital arena.<br />
                                        But Sena doesn't stop there. She is equally at home in the coding realm, weaving her magic to develop and manage websites that not only look stunning but also function flawlessly. Her commitment to creating user-friendly, aesthetically pleasing online spaces sets her apart in the competitive world of web development.<br />
                                        As an IT support expert, Sena is the go-to person for troubleshooting and problem-solving. Her technical prowess ensures that digital hiccups are swiftly resolved, keeping the virtual gears turning smoothly.<br />
                                        In a world where the digital landscape is often a complex puzzle, Sena Julia Aondona stands out as the skilled strategist, the creative developer, and the reliable IT support expert who weaves magic in the digital realm. With a track record of success and a commitment to staying at the forefront of industry trends.<br />
                                        Not content with personal success alone, Sena is also the visionary founder of "Techherstory," a groundbreaking brand and movement dedicated to empowering women in technology and beyond. Through mentorship, resources, and community support, Techherstory aims to bridge the gender gap in tech and challenge stereotypes.
                                        Sena's commitment to diversity and empowerment makes her not just a digital virtuoso but also a passionate advocate shaping the future of tech through innovation and dedication to positive impact
                                    </Modal.Body>
                                    {/* <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer> */}
                                </Modal>
                                <a className="btn btn-primary" href="#about">
                                    Read More...
                                </a>
                                {/* <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                            </div>
                            <div className="hero-btn">
                                {/* <a className="btn" style={{ borderRadius: 0 }} href="">Hire Me</a> */}
                                <a className="btn" style={{ borderRadius: 0 }} href="#team">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="img/hero.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
