import ImageGallery from "react-image-gallery";
import Modal from "./Modal";
import { useState } from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import OwlCarousel from "react-owl-carousel";
const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [section, setSection] = useState("");
    const graphics = [
        {
            original: "img/graphics/image1.jpeg",
            thumbnail: "img/graphics/image1.jpeg",
        },
        {
            original: "img/graphics/image2.png",
            thumbnail: "img/graphics/image2.png",
        },
        {
            original: "img/graphics/image3.jpeg",
            thumbnail: "img/graphics/image3.jpeg",
        },
        {
            original: "img/graphics/image4.jpeg",
            thumbnail: "img/graphics/image4.jpeg",
        },
        {
            original: "img/graphics/image5.jpeg",
            thumbnail: "img/graphics/image5.jpeg",
        },
        {
            original: "img/graphics/image6.jpeg",
            thumbnail: "img/graphics/image6.jpeg",
        },
        {
            original: "img/graphics/image7.jpeg",
            thumbnail: "img/graphics/image7.jpeg",
        },
        {
            original: "img/graphics/image8.png",
            thumbnail: "img/graphics/image8.png",
        },
        {
            original: "img/graphics/image9.jpeg",
            thumbnail: "img/graphics/image9.jpeg",
        },
        {
            original: "img/graphics/image10.png",
            thumbnail: "img/graphics/image10.png",
        },
    ];
    const articles = [
        {
            links: <LinkPreview url='https://thenationonlineng.net/empowering-future-innovators-the-slate-center-unleashes-robotics-gurus-and-celebrity-tutors-to-ignite-childrens-skills-this-summer/' width='400px' />
        },
        {
            links: <LinkPreview url='https://senaaondonajulia.medium.com/5-tips-that-have-helped-me-avert-profound-depression-4772222bf8f5' width='400px' />
        },
        {
            links: <LinkPreview url='https://senaaondonajulia.medium.com/how-to-record-on-youtube-tv-with-dvr-feature-1f1f46d14304' width='400px' />
        }
    ];
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    const handleOpen = (folder: string) => {
        setIsOpen(true)
        setSection(folder);
    }
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
                    {section === "christmas" && <div className="row article-carousel">
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Christmas/TSC_PROMOTIONAL_STRATEGY.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">TSC Promotional Strategy</span>
                                    {/* <span className="article-site">thenationonlineng.net</span> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Christmas/SOCIAL_MEDIA CALENDAR_FOR_TSL_COMPLETED.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">Social Media Calendar for TSL</span>
                                    {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Christmas/CHRISTMAS_CAMP_CONTENT_PLAN.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">Christmas Camp Content Plan</span>
                                    {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                </div>
                            </a>
                        </div>
                    </div>}
                    {section === "summer" && <div className="row article-carousel">
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_CALENDAR.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">Summer at the Slate 2021 Content Calendar</span>
                                    {/* <span className="article-site">thenationonlineng.net</span> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_PLAN.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">Summer at the Slate 2021 Content Plan</span>
                                    {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a target="_blank" href="img/strategy/Summer/TSC_SUMMER_2021_PROMOTIONAL_STRATEGY.pdf" className="article-link">
                                <img src="img/strategy/pdf.png" alt="" style={{height: "auto"}} className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">TSC Summer 2021 Promotional Strategy</span>
                                    {/* <span className="article-site">senaaondonajulia.medium.com</span> */}
                                </div>
                            </a>
                        </div>
                    </div>}
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
                                <h3>Christmas Camp Marketing Strategy</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" data-aos="fade-up" data-aos-delay="0.6s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("summer")}>
                            <div className="portfolio-img">
                                <img src="img/strategy/office.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Summer Camp Marketing Strategy</h3>
                                <a className="btn plus" href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2" data-aos="fade-up" data-aos-delay="0.8s">
                        <div className="portfolio-wrap">
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
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/videos/video.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Videos</h3>
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