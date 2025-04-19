'use client'
import Portfolio1 from '@/assets/img/all-images/portfolio/nfl_ground_game.png'
import Portfolio2 from '@/assets/img/all-images/portfolio/aemr.png'
import Portfolio3 from '@/assets/img/all-images/portfolio/Tackling_Theft.png'
import Portfolio4 from '@/assets/img/all-images/portfolio/chemcorp.png'
import Portfolio5 from '@/assets/img/all-images/portfolio/just4kicks.jpg'
import Portfolio6 from '@/assets/img/all-images/portfolio/kringle.jpg'
import Portfolio7 from '@/assets/img/all-images/portfolio/SWC.png'
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
              <Col lg={12} data-aos="fade-left" data-aos-duration={1200}>
                <div className="portfolio-boxarea click-here">
                  <div className="about-section-area" >
                    <div className="img1">
                      <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/TheNFLGroundGame/TheNFLGroundGame">
                        <Image src={Portfolio1} alt="" />
                      </Link>
                    </div>
                    <div className="space8" />
                    <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>The NFL Ground Game</i></h4>
                        <div className="space8" />
                        <p>Tableau | Python | Jupyter Notebook | Pandas | Numpy | Seaborn | Matplotlib | Correlation | Data Merging 
                            <div className="space8" />
                            <p>● Leveraged NFL player tracking data to analyze movement patterns across different playing surfaces, developed data-driven
                            insights on injury prevention and interactive Tableau visualizations of player movement metrics and injury correlations.</p>
                            <p>● <Link href='https://github.com/c-osornio/THE_NFL_GROUND_GAME/blob/main/The_NFL_Ground_Game.ipynb'><h6>Link to my jupyter notebook</h6></Link> </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space24" />
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
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1300}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/AEMRCaseStudy_17359878159940/AMERCaseStudy">
                      <Image src={Portfolio2} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>American Energy Market Regulator</i></h4>
                        <div className="space8" />
                        <p>Tableau | SQL | Statistical Analysis | Dashboard Design | Strategic Analysis | Operational Analytics 
                            <div className="space8" />
                            <p>● Comprehensive analysis of the American Energy Market Regulator's outage data using SQL and Tableau to enhance domestic energy network reliability. Developed interactive dashboards and strategic recommendations that led to identifying critical patterns in outage management, resulting in targeted solutions for high-risk participants and a framework for reducing the 30.6% year-over-year increase in outage duration.</p>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1300}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://github.com/c-osornio/southern_water_corp/blob/main/Southern_Water_Corp_OLS_Case_Study.ipynb">
                      <Image src={Portfolio7} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>Southern Water Corperation</i></h4>
                        <div className="space8" />
                        <p>Python | Pandas | NumPy | Matplotlib | Seaborn | Regression | EDA | Correlation | Descriptive Statistics | Outlier Detection | Inferential Statistics | Validating Predictions
                            <div className="space8" />
                            <p>● Spearheaded an end-to-end Python analysis of Southern Water Corp's pump data, implementing advanced statistical techniques including outlier detection, correlation analysis, and linear regression modeling. Created dynamic visualizations using dual axes plots and heatmaps that transformed raw operational data into actionable insights, while developing automated data cleaning processes.</p>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1400}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/TacklingVehicleTheftinLosAngeles/TacklingVehicleTheftinLosAngeles">
                      <Image src={Portfolio3} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>Tackling Vehicle Theft in Los Angeles</i></h4>
                        <div className="space8" />
                        <p>Tableau | Cluster Analysis | Statistical Analysis | Time-Series Analysis | Geospatial Analysis 
                            <div className="space8" />
                            <p>● Utilized Tableau software to create interactive crime analysis dashboards leveraging geospatial mapping, time series analysis, and multi-dimensional
                            filtering to visualize Los Angeles vehicle theft patterns from 2010 to 2023. </p>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1500}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://public.tableau.com/app/profile/carlos.osornio.enriquez/viz/ChemCorpInc__17230653878990/ChemCorpInc">
                      <Image src={Portfolio4} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes' >
                        <h4><i>ChemCorp Incorporated Case Study</i></h4>
                        <div className="space8" />
                        <p>Tableau | SQL | Market Analysis | Profit Margin Analysis | Geographic Analysis | Revenue Forecasting
                            <div className="space8" />
                            <p>● Leveraged SQL and Tableau to dissect ChemCorp's chemical portfolio and customer revenue data, identifying key growth opportunities and divestment strategies to reduce customer attrition. The project revealed strategic insights on high-performing sectors, geographic revenue drivers, and targeted opportunities to optimize product focus and enhance profitability.</p>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1600}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://github.com/Coding-Dojo-Group-3/jocs">
                      <Image src={Portfolio5} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>Just 4 Kicks</i></h4>
                        <div className="space8" />
                        <p>JavaScript | React | Redux | MongoDB | Express | Node.js | Tailwind | CSS 
                            <div className="space8" />
                            <p>●	Developed responsive single page application with React/Redux, integrated PayPal API for seamless payment processing, and deployed with AWS EC2 for enhanced performance and scalability. </p>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1700}>
                <div className="portfolio-boxarea click-here about-section-area">
                  <div className="img1">
                    <Link target='_blank' href="https://github.com/c-osornio/SecretSanta-MERN">
                      <Image src={Portfolio6} alt="" />
                    </Link>
                  </div>
                  <div className="space8" />
                  <div className="about-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                      <div className='about-main-boxes'>
                        <h4><i>Kringle</i></h4>
                        <div className="space8" />
                        <p>JavaScript | React | useContext/useReducer | MongoDB | Mongoose | Express | Node.js | Bootstrap
                            <div className="space8" />
                            <p>●	Developed a feature-rich, JavaScript full-stack application for organizing Secret Santa gift exchanges using React, useContext/useReducer for global state management, and deployed through AWS EC2 for future scalability.</p>
                        </p>
                      </div>
                    </div>
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
