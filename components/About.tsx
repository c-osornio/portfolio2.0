'use client'
import Home2 from '@/assets/img/icons/home2.svg'
import Home3 from '@/assets/img/icons/home3.svg'
import Home4 from '@/assets/img/icons/home4.svg'
import Home5 from '@/assets/img/icons/home5.svg'
import Sicon1 from '@/assets/img/icons/s-icon1.svg'
import Sicon2 from '@/assets/img/icons/s-icon2.svg'
import Sicon3 from '@/assets/img/icons/s-icon3.svg'
import Sicon4 from '@/assets/img/icons/s-icon4.svg'
import Sicon5 from '@/assets/img/icons/s-icon5.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

const About = () => {
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
      <div id="list-item-2">
        <div className="about-section-area">
          <div className="heading1">
            <h5 data-aos="fade-left" data-aos-duration={800}>
              <Image src={Sublogo1} alt="" />
              About Us
            </h5>
            <div className="space24" />
            <h1 data-aos="fade-left" data-aos-duration={1000}>
              Crafting Seamless
            </h1>
            <div className="space24" />
            <h1 className="head" data-aos="fade-left" data-aos-duration={1100}>
              User <span>Experiences</span>
            </h1>
          </div>
          <div className="space60" />
          <div className="about-boxarea">
            <Row>
              <Col lg={12} data-aos="fade-left" data-aos-duration={1200}>
                <div className="about-main-boxes">
                  <h4>Alex Carry</h4>
                  <div className="space24" />
                  <p>
                    Hi, I’m Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize
                    in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical
                    skills, I deliver solutions that not only look great but also function seamlessly.
                  </p>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={900}>
                <div className="about-boxes2">
                  <Image src={Home2} alt="" />
                  <div className="content-area">
                    <h4>UI/UX Design</h4>
                    <div className="space16" />
                    <p>Designing intuitive, user-focused interfaces that prioritize functionality &amp; seamless navigation.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1000}>
                <div className="about-boxes2">
                  <Image src={Home3} alt="" />
                  <div className="content-area">
                    <h4>User Research &amp; Prototyping</h4>
                    <div className="space16" />
                    <p>Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1100}>
                <div className="about-boxes2">
                  <Image src={Home4} alt="" />
                  <div className="content-area">
                    <h4>Responsive Web Design</h4>
                    <div className="space16" />
                    <p>Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1200}>
                <div className="about-boxes2">
                  <Image src={Home5} alt="" />
                  <div className="content-area">
                    <h4>Wireframing &amp; Visual Design</h4>
                    <div className="space16" />
                    <p>Creating detailed wireframes and visually stunning designs to bring ideas into focus.</p>
                  </div>
                </div>
              </Col>
              <div className="soace20" />
              <Col lg={6} md={6}>
                <h3>Work Experience</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">2015-2020</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">UI/UX Designer</Link>
                  </h4>
                  <div className="space16" />
                  <p>Creative Spark Agency</p>
                  <div className="space32" />
                  <Link href="">2020 - Present</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Senior UI/UX Designer </Link>
                  </h4>
                  <div className="space16" />
                  <p>Visionary Tech</p>
                </div>
                <div className="about-others-box text-center" data-aos="zoom-in" data-aos-duration={1000}>
                  <h4>Stay With Me </h4>
                  <div className="space18" />
                  <ul>
                    <li>
                      <Link href="">
                        <Image src={Sicon1} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={Sicon2} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={Sicon3} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={Sicon4} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="m-0">
                        <Image src={Sicon5} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h3>Education</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">2010 - 2013</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Bachelor's Degree in Graphic Design</Link>
                  </h4>
                  <div className="space16" />
                  <p>University of California</p>
                  <div className="space32" />
                  <Link href="">2013 - 2015</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Master's Degree in User Experience Design</Link>
                  </h4>
                  <div className="space16" />
                  <p>Massachusetts Institute of Technology (MIT)</p>
                </div>
              </Col>
              <div className="space20" />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
