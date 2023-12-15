import ImageGallery from "react-image-gallery";
import Modal from "./Modal";
import { Children, useState } from "react";
import photos from '../Data/photo';
import videos from '../Data/video';
import codes from '../Data/code';
import graphics from '../Data/graphics';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

import { Video } from 'react-video-ts'
import 'react-video-ts/dist/index.css'

// import { LinkPreview } from "@dhaiwat10/react-link-preview";
const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [section, setSection] = useState("");
    const handleOpen = (folder: string) => {
        setIsOpen(true)
        setSection(folder);
    }
    const [currentVideo, setCurrentVideo] = useState<number>(0);

    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-1">Web Design</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                            <li data-filter=".filter-3">Game Dev</li>
                        </ul>
                    </div>
                </div> */}
                <Modal isOpen={isOpen} onClose={(ev: boolean | ((prevState: boolean) => boolean)) => setIsOpen(ev)}>
                    {section === "graphics" && <ImageGallery items={graphics} />}
                    {section === "articles" && <div className="row article-carousel">
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="https://senaaondonajulia.medium.com/5-tips-that-have-helped-me-avert-profound-depression-4772222bf8f5" className="article-link">
                                <img src="img/articles/nation.png" alt="medium depression alticle" className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">Empowering Future Innovators: The Slate Center Unleashes Robotics Gurus and Celebrity Tutors to Ignite Children's Skills this Summer! - The Nation Newspaper</span>
                                    <span className="article-site">thenationonlineng.net</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="https://senaaondonajulia.medium.com/5-tips-that-have-helped-me-avert-profound-depression-4772222bf8f5" className="article-link">
                                <img src="img/articles/depression.jpg" alt="medium depression alticle" className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">5 Tips That Have Helped Me Avert profound Depression.</span>
                                    <span className="article-site">senaaondonajulia.medium.com</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="https://senaaondonajulia.medium.com/5-tips-that-have-helped-me-avert-profound-depression-4772222bf8f5" className="article-link">
                                <img src="img/articles/youtube.jpg" alt="medium depression alticle" className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">How to Record on YouTube TV with DVR Feature</span>
                                    <span className="article-site">senaaondonajulia.medium.com</span>
                                </div>
                            </a>
                        </div>
                    </div>}
                    {section === "christmas" && <div className="container">
                        <div className="bg-white pt-2 px-4">
                            <h3>Chrismas Camp</h3>
                            <div className="row article-carousel g-2">
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Christmas/TSC_PROMOTIONAL_STRATEGY.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">TSC Promotional Strategy</span>
                                            {/* <span className="article-site">thenationonlineng.net</span> */}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Christmas/SOCIAL_MEDIA CALENDAR_FOR_TSL_COMPLETED.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Social Media Calendar for TSL</span>
                                            {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Christmas/CHRISTMAS_CAMP_CONTENT_PLAN.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Christmas Camp Content Plan</span>
                                            {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <h3>Summer Camp</h3>
                            <div className="row article-carousel g-2">
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_CALENDAR.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Summer at the Slate 2021 Content Calendar</span>
                                            {/* <span className="article-site">thenationonlineng.net</span> */}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_PLAN.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Summer at the Slate 2021 Content Plan</span>
                                            {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="img/strategy/Summer/TSC_SUMMER_2021_PROMOTIONAL_STRATEGY.pdf" className="article-link">
                                        <img src="img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">TSC Summer 2021 Promotional Strategy</span>
                                            {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>}
                    {section === "photo" && <ImageGallery items={photos} />}
                    {section === "video" && <div className="position-relative w-100">
                        <div className="video-wrapper">
                            <Video video={videos[currentVideo].src} >
                            </Video>
                        </div>

                        <div className="video-playlist">
                            <OwlCarousel className="testimonials-carousel" loop margin={10} nav items={12} autoplay style={{height: "100%"}}>
                                {Children.toArray([1,2,3,4,5,6,7,8].map(value=>(<img onClick={()=>setCurrentVideo(value-1)} className="img-thumbnail" style={{height: "100%"}} src={`img/videos/video_${value}.jpg`} alt="Image not found" />)))}
                            </OwlCarousel>
                        </div>
                    </div>

                    }
                    {section === "code" && <ImageGallery items={codes} />}
                </Modal>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" data-aos="fade-up" data-aos-delay="0.0s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("graphics")}>
                            <div className="portfolio-img">
                                <img src="img/graphics/graphics.png" style={{ minHeight: '252px' }} alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Graphics</h3>
                                <a href="#" className="btn plus">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("articles")}>
                            <div className="portfolio-img">
                                <img src="img/articles/article.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Articles</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3" data-aos="fade-up" data-aos-delay="0.4s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("christmas")}>
                            <div className="portfolio-img">
                                <img src="img/strategy/strategy.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Marketing Strategy</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" data-aos="fade-up" data-aos-delay="0.6s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("photo")}>
                            <div className="portfolio-img">
                                <img src="img/photography/camera.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Photography</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2" data-aos="fade-up" data-aos-delay="0.8s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("code")}>
                            <div className="portfolio-img">
                                <img src="img/web/webdev.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Web Development</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3" data-aos="fade-up" data-aos-delay="1s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("video")}>
                            <div className="portfolio-img">
                                <img src="img/videos/video.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Videography</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio