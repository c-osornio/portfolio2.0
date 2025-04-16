'use client'
import Bars from '@/assets/img/icons/bars-icons1.svg'
import Arrow from '@/assets/img/icons/arrow1.svg'
import Mail1 from '@/assets/img/icons/mail1.svg'
import Logo from '@/assets/img/logo/data.svg'
import Logo2 from '@/assets/img/logo/logo2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Form, Offcanvas, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle'

const TopNav = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <header>
        <div className="header-area homepage1 header header-sticky " id="header">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements">
                  <div className="site-logo">
                    {/* <h3><Link href="/">
                      <Image src={Logo} alt="" />
                    </Link>
                    </h3> */}
                  </div>
                  <div className="btn-area d-lg-flex">
                    <ThemeToggle />
                    {/* <Link href="/" className="vl-btn1">
                      HIRE ME&nbsp;
                      <span>
                        <Image src={Mail1} alt="" />
                      </span>
                    </Link> */}
                    <button onClick={handleShow} className="hamburger_menu" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasMenu">
                      <Image src={Bars} alt="" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} className="header-site-icon hero-heading-area arrow">
        <div className="slide-bar slide-bar1" style={{ padding: '50px'}}>
        <button className='arrow1'
        onClick={handleClose} 
        style={{ 
          color: 'white',
          background: 'none', 
          border: 'none', 
          fontSize: '24px', 
          position: 'absolute', 
          top: '10px', 
          right: '15%', 
          cursor: 'pointer' 
        }} 
        aria-label="Close"
      >
        <Image src={Arrow} alt="" />
      </button>
          <div className="sidebar-info">
            <div className="sidebar-logo">
              {/* <Link href="/">
                <Image src={Logo2} alt="logo" />
              </Link> */}
            </div>
            <div className="sidebar-content">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
                {/* <li>
                  <a href="#list-item-3">service</a>
                </li> */}
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                {/* <li>
                  <a href="#list-item-6">Testimonial</a>
                </li>
                <li>
                  <a href="#list-item-7">Blogs</a>
                </li>
                <li>
                  <a href="#list-item-8">Contact</a>
                </li> */}
              </ul>
            </div>
            <div className="space32" />
            <div className="space16" />
            <div className="btn-area">
              {/* <Link href="" className="vl-btn1">
                Get in touch now <Image src={Mail1} alt="" />
              </Link> */}
            </div>
            <div className="space40" />
            <div className="social-link-area">
              {/* <h3 className="sidebar-heading">Social Links</h3>
              <ul>
                <li>
                  <Link href="">
                    <FaFacebook className="fa-brands" />
                  </Link>
                  <Link href="">
                    <FaInstagram className="fa-brands" />
                  </Link>
                  <Link href="">
                    <FaLinkedinIn className="fa-brands" />
                  </Link>
                  <Link href="">
                    <FaPinterestP className="fa-brands" />
                  </Link>
                  <Link href="">
                    <FaYoutube className="fa-brands" />
                  </Link>
                </li>
              </ul> */}
            </div>
            <div className="space40" />
            {/* <div className="form-area" style={{ width: '90%' , height:'100%'}}>
              <h3>Subscribe To Newsletter</h3>
              <Form>
                <input type="text" placeholder="Email Address*" />
                <button type="submit" className="vl-btn1" style={{ fontSize: '15px' }}>
                  subscribe
                </button>
              </Form>
            </div> */}
          </div>
        </div>
      </Offcanvas>
    </>
  )
}

export default TopNav
