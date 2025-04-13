'use client'
import Skill1 from '@/assets/img/logo/icons8-python-48.png'
import Skill2 from '@/assets/img/logo/icons8-java-48.png'
import Skill3 from '@/assets/img/logo/icons8-javascript-48.png'
import Skill4 from '@/assets/img/logo/icons8-r-project-48.png'
import Skill5 from '@/assets/img/logo/icons8-jupyter-48.png'
import Skill6 from '@/assets/img/logo/icons8-tableau-software-48.png'
import Skill7 from '@/assets/img/logo/icons8-power-bi-48.png'
import Skill8 from '@/assets/img/logo/icons8-mysql-48.png'
import Skill9 from '@/assets/img/logo/icons8-aws-48.png'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Skills = () => {
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
      <div id="skills">
        <div className="skill-section-area">
          <Container>
            <Row>
              <Col gl={12}>
                <div className="skill-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <Image src={Sublogo1} alt="" />
                    My Skills
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    The Tools Behind
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    Analytical <span>Excellence</span>
                  </h2>
                </div>
                <div className="space80" />
                <Row>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={900}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill1} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={94} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>Python</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill2} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={80} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>Java</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1100}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill3} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={80} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>JavaScript</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1200}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill4} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={80} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>R</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill5} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={96} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>Jupyter Notebook</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill6} alt="" className="Wordpress" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={92} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>Tableau Software</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1200}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill7} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={90} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>Microsoft PowerBi</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill8} alt="" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={92} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>SQL Relational Databases</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill9} alt="" className="Wordpress" />
                      </div>
                      {/* <div className="space24" />
                      <h3>
                        <span className="counter">
                          <CountUp duration={3} start={0} end={82} />
                        </span>
                        %
                      </h3> */}
                      <div className="space16" />
                      <p>AWS</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Skills
