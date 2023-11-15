import whatsapp from '../assets/whatsapp.png';
const Social = () => {
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>My Socials</p>
                    {/* <h2>Expert Team Members</h2> */}
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Sena Aondona</h2>
                                <h4>Digital Strategist/Marketer | Website Developer/Manager | IT Support</h4>
                                <p>
                                    Connect with me!
                                </p>
                                <div className="team-social">
                                    <a className="btn" target='_blank' href="http://linkedin.com/in/sena-aondona"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href="mailto:senaaondonajulia@gmail.com"><i className="fa fa-envelope "></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={whatsapp} alt="Whatsapp" />
                            </div>
                            <div className="team-text">
                                <h2>My whatsapp Link</h2>
                                {/* <h4>Web Developer</h4> */}
                                <p>
                                    Scan this code with your whatsapp camera or click <a target='_blank' href="https://wa.me/2347087567397?text=I+would+like+to+know+more+about+the+service+you+offer">here</a> to connect with me
                                </p>
                                {/* <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Jennifer Page</h2>
                                <h4>Apps Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <h4>Apps Developer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Social