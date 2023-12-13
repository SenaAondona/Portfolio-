import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import peace from '../assets/peace.jpeg';
import maduka from '../assets/maduka.jpg';
import joy from '../assets/joy.jpg';
const Testimonial = () => {
    return (
        <div className="testimonial fadeInUp" data-aos="fade-up" data-aos-delay="0.1s" id="review">
            <div className="container">
                <div className="testimonial-icon">
                    <i className="fa fa-quote-left"></i>
                </div>
                <OwlCarousel className="testimonials-carousel" loop margin={10} nav items={1} autoplay>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={peace} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Working alongside Ms. Sena has been a game-changer. Her strategic
                                prowess in digital marketing is unmatched. Her ability to craft
                                innovative campaigns and drive exceptional results has not only
                                impressed me but elevated our team's performance
                            </p>
                            <h3>Peace Amaugo</h3>
                            <h4>Digital marketer</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={maduka} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Working with Ms. Sena has been transformative for Madigon Music. Her digital
                                marketing expertise and IT support have been instrumental in elevating our
                                online presence and boosting our streaming platform. Thanks to Her innovative
                                strategies, our company's visibility has soared, and we've experienced remarkable
                                growth. Highly recommend
                            </p>
                            <h3>Maduka Donas</h3>
                            <h4>Farmer</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={joy} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Ms. Sena Aondona significantly boosted my online presence and bookings
                                as a makeup artist. Her expertise in creating excellent content, professional
                                video editing, and advertising services transformed my digital presence. Highly
                                recommended for any digital marketing needs!
                            </p>
                            <h3>Joy Iwu</h3>
                            <h4>Make up artist</h4>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial