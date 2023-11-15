import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Children, useEffect, useState } from 'react';
import logo from '../assets/logo.png'

// import './NavComponent.css';
export const NavComponent = () => {
    const links = [
        {
            href: "#home",
            title: "Home"
        },
        {
            href: "#about",
            title: "About"
        },
        {
            href: "#service",
            title: "Service"
        },
        {
            href: "#experience",
            title: "Experience"
        },
        {
            href: "#portfolio",
            title: "Portfolio"
        },
        {
            href: "#prices",
            title: "TechHerStory"
        },
        {
            href: "#review",
            title: "Testimonials"
        },
        {
            href: "#team",
            title: "Contact"
        },
        // {
        //     href: "#blog",
        //     title: "Blog"
        // },
        // {
        //     href: "#contact",
        //     title: "Contact"
        // },
    ];

    // const event = useRef();
    const [sticky, setSticky] = useState<"top"|undefined>();
    const [fixed, setFixed] = useState<"top"|undefined>("top")
    
    // Sticky Navbar
    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        if (document.body.scrollTop > 0) {
            setSticky("top");
            setFixed(undefined);
            // document.getElementById("myImg").className = "slideUp";
          }else{
            setSticky(undefined);
            setFixed("top");
          }
      })
    
      return () => {
        // window.removeEventListener(event.current, ()=>{})
      }
    }, [])
    
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 0) {
    //         $('.navbar').addClass('nav-sticky');
    //     } else {
    //         $('.navbar').removeClass('nav-sticky');
    //     }
    // });
  return (
    <Navbar expand="lg" className="" sticky={sticky} fixed={fixed}>
        <Container fluid>
        <Navbar.Brand href="#home" className='brand'>
          <img className='' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Children.toArray(links.map(value=><Nav.Link href={value.href}>{value.title}</Nav.Link>))}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
