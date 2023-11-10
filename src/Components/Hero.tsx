import { useRef } from "react";
// import Typed from "typed.js";

export const Hero = () => {
    // Typed Initiate

    // Create Ref element.
    const el = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: ["Web Designer","Web Developer", "Front End Developer", "Apps Designer", "Apps Developer"], // Strings to display
    //         // Speed settings, try diffrent values untill you get good results
    //         startDelay: 300,
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         // backDelay: 100,
    //         smartBackspace: false,
    //         loop: true
    //     });

    //     // Destropying
    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);
    // if ($('.hero .hero-text h2').length == 1) {
    //     var typed_strings = $('.hero .hero-text .typed-text').text();
    //     var typed = new Typed('.hero .hero-text h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }
    return (
        <section className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Sena</h1>
                                <h2 ref={el}></h2>
                                {/* <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                            </div>
                            <div className="hero-btn">
                                <a className="btn" style={{borderRadius: 0}} href="">Hire Me</a>
                                <a className="btn" style={{borderRadius: 0}} href="">Contact Me</a>
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
