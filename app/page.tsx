import IconVertical from '@/components/IconVertical'
import { default as SidebarPage } from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import { Col, Container, Row } from 'react-bootstrap'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Portfolio from '@/components/Portfolio'
import Service from '@/components/Service'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonials'

const Home = () => {
  return (
    <>
      <div className="body1">
        <TopNav />
        <div className="space50" />
        <div className="main-hero-area5 parallaxie">
        <video className="body-overlay" muted autoPlay loop>
            <source src="/video5.mp4" type="video/mp4" />
          </video>
          <Container>
            <Row>
              <Col lg={4}>
                <div className="personal-contact-box" data-aos="fade-right" data-aos-duration={1000}>
                  <IconVertical />
                  <SidebarPage />
                </div>
              </Col>
              <Col lg={8}>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <div className="space50" />
                  <Main />
                  <div className="space50" />
                  <About />
                  {/* <Service /> */}
                  <div className="space50" />
                  <Skills />
                  <div className="space30" />
                  <Portfolio />
                  {/* <div className="space30" /> */}
                  {/* <Testimonial /> */}
                  {/* <div className="space30" /> */}
                  {/* <Blog /> */}
                  <div className="space60" />
                  <Contact />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home

