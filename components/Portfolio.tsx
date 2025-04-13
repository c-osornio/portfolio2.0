'use client'
import Portfolio1 from '@/assets/img/all-images/portfolio/nfl_ground_game.png'
import Portfolio2 from '@/assets/img/all-images/portfolio/aemr.png'
import Portfolio3 from '@/assets/img/all-images/portfolio/Tackling_Theft.png'
import Portfolio4 from '@/assets/img/all-images/portfolio/chemcorp.png'
import Portfolio5 from '@/assets/img/all-images/portfolio/just4kicks.jpg'
import Portfolio6 from '@/assets/img/all-images/portfolio/kringle.jpg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Portfolio = () => {
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
      <div id="portfolio">
        <div className="portfolio-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="portfolio-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <Image src={Sublogo1} alt="" />
                    My Portfolio
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Turning Vision
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    Into <span>Reality</span>
                  </h2>
                </div>
              </Col>
              <div className="space50" />
              <Col lg={12} data-aos="fade-left" data-aos-duration={1000}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/TheNFLGroundGame/TheNFLGroundGame">
                      <Image src={Portfolio1} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">The NFL Ground Game</Link>
                </div>
              </Col>
              {/* <Col lg={6} md={6} data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea2 click-here">
                  <div className="img1">
                    <Link href="">
                      <Image src={Portfolio3} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">Academy - Sales Career</Link>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-left" data-aos-duration={1200}>
                <div className="portfolio-boxarea2 click-here">
                  <div className="img1">
                    <Link href="">
                      <Image src={Portfolio4} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">Leadlogic- Dashboard Design</Link>
                </div>
              </Col> */}
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/AEMRCaseStudy_17359878159940/AMERCaseStudy">
                      <Image src={Portfolio2} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">American Energy Market Regulator</Link>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/TacklingVehicleTheftinLosAngeles/TacklingVehicleTheftinLosAngeles">
                      <Image src={Portfolio3} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">Tackling Vehicle Theft in Los Angeles</Link>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/ChemCorpInc__17230653878990/ChemCorpInc">
                      <Image src={Portfolio4} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">ChemCorp Incorporated</Link>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://github.com/Coding-Dojo-Group-3/jocs">
                      <Image src={Portfolio5} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">Just 4 Kicks</Link>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <Link target='_blank' href="https://github.com/c-osornio/SecretSanta-MERN">
                      <Image src={Portfolio6} alt="" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="">Kringle</Link>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Portfolio
