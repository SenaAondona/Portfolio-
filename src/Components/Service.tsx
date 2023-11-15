// import AOS from 'aos';
// import 'aos/dist/aos,css';

import { Children } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

// import { useEffect } from 'react';
const Service = () => {
    const services = [
        {
            title: "Digital Strategy",
            icon: "fa fa-atlas",
            text: "Analytical Skills, Content Strategy, Market Research, UX/UI Understanding, Technology Aptitude, Project Management, Budgeting and ROI Analysis, Business Acumen.",
            skills: 95
        },
        {
            title: "Digital Marketing",
            icon: "fa fa-ad",
            text: "Social media management/marketing, Search engine optimization (SEO), Content Creation/Marketing, Email marketing, Influencer Marketing, Pay-per-click (PPC) advertising, Copy writing,",
            skills: 95
        },
        {
            title: "Video Creation/Editing",
            icon: "fa fa-video",
            text: "Editing Software: (Davinchi Resole, Capcut), Storytelling, Transitions and Effects, Color Correction and Grading, Audio Editing and Mixing,Storyboarding and Scripting, File Management and Organization, Knowledge of Copyright Laws",
            skills: 80
        },
        {
            title: "Data Analysis (Social Media/Google Analytics)",
            icon: "fa fa-table",
            text: "Analytical Skills, Analytics Tools: (Google analytics, social media analytics platforms), Qualitative Analysis, Data Visualization, Quantitative Analysis, Business Acumen, Critical Thinking,  Social Media Metrics, A/B Testing,Social Media Algorithms.",
            skills: 70
        },
        {
            title: "Web Development/Maintenance",
            icon: "fa fa-code",
            text: "Front-end programming ( HTML, CSS, JavaScript), Back-end Programming (PHP), Database Management(SQL and NoSQL),Responsive Design, Content Management Systems (CMS) WordPress, Web hosting and Domain management, Web analytics tools, Troubleshooting, Security monitoring/implementing security updates.",
            skills: 60
        },
        {
            title: "IT Support",
            icon: "fa fa-users-cog",
            text: "System Administration, Hardware and Software Troubleshooting, Operating Systems, Technical Knowledge, Customer Service, Problem-solving, IT Security Awareness, Remote Support, End-User Training, Documentation and Reporting.",
            skills: 65
        },
        {
            title: "Graphics Design",
            icon: "fa fa-image",
            text: "Software Proficiency:Canva, Typography, Layout Design, Image Editing and Manipulation, Print Design.",
            skills: 50
        },
        {
            title: "Soft Skills",
            icon: "fa fa-shapes",
            text: " Creative Thinking, Adaptability and Learning Agility, Leadership and Collaboration, Problem-Solving Skills, Communication Skills.",
            skills: 95
        },
    ]
    return (
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="row">
                    {Children.toArray(services.map(value => <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className={value.icon}></i>
                                <div className="service-progress-wrapper">
                                    <CircularProgressbar styles={buildStyles({pathColor: "#ec6bac"})} className="service-progress" value={value.skills} /* text={`${value.skills}%`} *//>
                                </div>
                            </div>
                            <div className="service-text">
                                <h3>{value.title} {value.skills}%</h3>
                                <p style={{ fontSize: '14px' }}>
                                    {value.text}
                                </p>
                                
                            </div>
                        </div>
                    </div>))}
                </div>
                {/* <Waypoint
                    onEnter={() => handleProgress("second", 95)}
                    onLeave={() => handleProgress("second", 0)}
                /> */}
            </div>
        </div>
    )
}

export default Service