import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonial = () => {
  return (
    <div className="testimonial fadeInUp" data-aos="fade-up" data-aos-delay="0.1s" id="review">
            <div className="container">
                <div className="testimonial-icon">
                    <i className="fa fa-quote-left"></i>
                </div>
                <OwlCarousel className="testimonials-carousel" loop margin={10} nav items={1}>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-1.jpg" alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-2.jpg" alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-3.jpg" alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
  )
}

export default Testimonial