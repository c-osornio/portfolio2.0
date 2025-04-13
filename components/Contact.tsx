'use client'
import Mail1 from '@/assets/img/icons/mail1.svg'
import Sublogo from '@/assets/img/icons/sublogo1.svg'
import Logo1 from '@/assets/img/logo/logo1.png'
import { currentYear } from '@/helper/constants'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
    return () => {
      Aos.refresh()
    }
  }, [])
  return (
    <>
      <div id="list-item-8">
        <div className="contact-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                {/* <div className="contact-heading heading1">
                  <h5 data-aos="fade-left" data-aos-duration={900}>
                    <Image src={Sublogo} alt="" />
                    Contact Me
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Have Any Projects in
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    Mind, <span>Please connect</span>
                  </h2>
                </div> */}
                {/* <div className="space50" />
                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                  <h3>Let’s Work Together!</h3>
                  <div className="space12" />
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="input-area">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="input-area">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="input-area">
                        <input type="number" placeholder="Phone Number" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="input-area">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <input type="text" placeholder="Your Budget (optional)" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <textarea placeholder="Message" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <button type="submit" className="vl-btn1">
                          Send <Image src={Mail1} alt="" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div> */}
              </Col>
              <Col lg={12}>
                <div className="space50" />
                <div className="footer-area">
                  <div className="btn-area1">
                    {/* <Link href="/">
                      <Image src={Logo1} alt="" />
                    </Link> */}
                  </div>
                  <p>© {currentYear} OsoTech. All Rights Reserved.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Contact
