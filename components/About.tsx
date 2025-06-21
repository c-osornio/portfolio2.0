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
      <div id="about">
        <div className="about-section-area">
          <div className="heading1">
            <h5 data-aos="fade-left" data-aos-duration={800}>
              <Image src={Sublogo1} alt="" />
              About Me
            </h5>
            <div className="space24" />
            <h1 data-aos="fade-left" data-aos-duration={1000}>
              Charting New Territory
            </h1>
            <div className="space24" />
            <h1 className="head" data-aos="fade-left" data-aos-duration={1100}>
              With <span>Self-Belief</span>
            </h1>
          </div>
          <div className="space60" />
          <div className="about-boxarea">
            <Row>
              <Col lg={12} data-aos="fade-left" data-aos-duration={1200}>
                <div className="about-main-boxes">
                  {/* <h4>Carlos Osornio Enriquez</h4> */}
                  {/* <div className="space24" /> */}
                  <p>
                  Welcome to my portfolio where I showcase my work in the fields of data analytics and software development! Here is a little bit of my background... 
                  </p>
                  <div className="space24" />
                  <p>
                  Based in Anaheim, CA, I turned a setback into a gateway for innovation by betting on myself and embracing tech as my true calling. After an unexpected career twist, I dove headfirst into two intensive bootcamps in full stack web development and data analysis. I returned to school to complete my Bachelor of Science degree, graduating summa cum laude, and now I'm a proud graduate candidate for the Master of Science in Analytics program at the Georgia Institute of Technology for Fall 2025. Combining bootcamp experience, self-taught skills, and rigorous academic training, I'm channeling my passion into breakthrough solutions. Join me as I break new ground and redefine what's possible in technology! 🚀
                  </p>
                  <div className="space24" />
                  <p>
                  When I'm not coding or analyzing data, you'll find me spending quality time with my four-legged best friend, Kai 🐕, or cheering on my favorite teams (Go Seahawks, Dodgers, and Lakers! 🏈 ⚾ 🏀). I love the strategic thinking of poker, the camaraderie of playing softball with friends, and the precision of bowling. These passions not only keep me balanced but also mirror the skills I bring to tech: strategy, teamwork, and consistent execution. 🎯
                  </p>
                </div>
              </Col>
              {/* <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={900}>
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
              </Col> */}
              <div className="soace20" />
              <Col lg={6} md={6}>
                <h3>Work Experience</h3>
                <div className="space16" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">June 2025 - Present</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Financial Analyst</Link>
                  </h4>
                  <p>HomeXpress Mortgage Corp | Santa Ana, CA</p>
                  <div className="space16" />
                    <p>
                      ● Leading the rollout and integration of Prudent AI, the company’s new artificial intelligence underwriting platform, to modernize income analysis and accelerate loan decisioning.
                    </p>
                    <div className="space8" />
                    <p>
                      ● Conducting in-depth financial data analysis using bank statements and other financial documentation to assess borrower qualifications for complex non-QM mortgage scenarios.
                    </p>
                    <div className="space8" />
                    <p>
                    ● Designing and maintaining scalable income analysis models in Excel, used by underwriting and sales teams to ensure consistency and efficiency across loan files.
                    </p>
                    <div className="space8" />
                    <p>
                    ● Partnering with cross-functional teams to streamline documentation workflows, improve data quality, and identify automation opportunities within the loan origination process.
                    </p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">April 2025 - June 2025</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Data Analyst Intern</Link>
                  </h4>
                  <p>Snow Data Science | Remote</p>
                  <div className="space16" />
                    <p>
                      ● Conducted end-to-end analysis of U.S. data analyst job listings, focusing on location trends, per-capita rankings, and tool-specific demand (Excel, SQL, Python, Power BI).
                    </p>
                    <div className="space8" />
                    <p>
                      ● Performed data cleaning and exploratory analysis in Python; built interactive geospatial dashboards and visualizations in Tableau.
                    </p>
                    <div className="space8" />
                    <p>
                    ● Led project coordination, task delegation, and cross-functional collaboration in a six-member team.
                    </p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">September 2019 - April 2022</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Mortgage Underwriter</Link>
                  </h4>
                  <p>Better Mortgage | Irvine, CA</p>
                  <div className="space16" />
                    <p>
                      ● Analyzed 200+ monthly mortgage applications using statistical methods and financial modeling to assess risk.
                    </p>
                    <div className="space8" />
                    <p>
                      ● Utilized Power Bi and Tableau to present and visualize complex mortgage data trends and patterns to stakeholders.
                    </p>
                    <div className="space8" />
                    <p>
                    ● Valedictorian of Better Mortgage’s Underwriting University class of 2020 
                    </p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">January 2015 - September 2019</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Senior Loan Consultant </Link>
                  </h4>
                  <p>
                    Ally Financial I Aliso Viejo, CA
                  </p>
                  <div className="space16" />
                  <p>
                  ● Assessed applicants' financial details to determine their eligibility and credit worthiness for auto loans.
                  </p>
                  <div className="space8" />
                  <p>
                  ● Collaborated with data analysts to optimize and refine sales strategies by leveraging customer data.
                  </p>
                  <div className="space8" />
                  <p>
                  ● Utilized technical skills to manage loan applications and ensure compliance with industry regulations.
                  </p>
                  <div className="space8" />
                  <p>
                  ● Maintained Property and Casualty Broker License 
                  </p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">November 2015 - January 2019</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">IT Consultant </Link>
                  </h4>
                  <p>
                  IrvineWebWorks, Inc | Lake Forest, CA
                  </p>
                  <div className="space16" />
                  <p>
                  ● Managed JIRA for IT issue tracking and project oversight, utilizing data analysis to identify trends, patterns, and areas for improvement, ensuring efficient issue resolution and streamlined project flow.
                  </p>
                  <div className="space8" />
                  <p>
                  ● Configured and maintained hardware and software systems, including servers, desktops, laptops, printers, and mobile devices, ensuring that they were optimized for performance and security. 
                  </p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">May 2011 - November 2012</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Quality Assurance Team Lead </Link>
                  </h4>
                  <p>
                  Alta Resources | Brea, CA
                  </p>
                  <div className="space16" />
                  <p>
                  ● Analyzed call center performance data to identify trends and optimize operations for healthcare providers such as Kaiser Permanente, Blue Shield of California, UnitedHealthcare, and Aetna, leading to a 15% reduction in errors.
                  </p>
                  <div className="space8" />
                  <p>
                  ● Streamlined the dispatch process for durable medical equipment, primarily CPAP machines and ventilators, reducing delivery times and improving patient outcomes through data-driven decision making and coordination with respiratory therapists. 
                  </p>
                </div>
                {/* <div className="about-others-box text-center" data-aos="zoom-in" data-aos-duration={1000}>
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
                </div> */}
              </Col>
              <Col lg={6} md={6}>
                <h3>Education & Certifications</h3>
                <div className="space16" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">August 2025 - Present</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Master of Science, Analytics</Link>
                  </h4>
                  <div className="space8" />
                  <p>Georgia Institute of Technology</p>
                  <div className="space8" />
                  <p>Top-5 Nationally Ranked Data Science & Analytics Program</p>
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">Class of November 2024</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Bachelor of Science, Business Administration</Link>
                  </h4>
                  <p>Management Information Systems</p>
                  <div className="space8" />
                  <p>Southern New Hampshire University</p>
                  <p>4.0 GPA Summa cum laude</p>
                  <div className="space8" />
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">April 2024 - March 2025</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Data Analyst Career Track Bootcamp</Link>
                  </h4>
                  <p>Springboard in Partnership with Microsoft</p>
                  <div className="space8" />
                  <p>
                  Project-based data analysis material with 1:1 industry expert mentor oversight. Mastering skills in Python, SQL, Excel, Power BI, Tableau, Business Analysis, Financial Analysis, Data Visualization, and Storytelling. 
                  </p>
                  <div className="space8" />
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">April 2022 - January 2023</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Full-Stack Software Development Bootcamp</Link>
                  </h4>
                  <p>Coding Dojo Part of Colorado Technical University</p>
                  <div className="space8" />
                  <p>
                    Project-based learning in full stack software development, mastering three dynamic technology stacks: Python/Flask, Java/Spring Boot, and JavaScript/MERN.
                  </p>
                  <div className="space8" />
                </div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="">Expires March 2027</Link>
                  <div className="space8" />
                  <h4>
                    <Link href="">Certified ScrumMaster</Link>
                  </h4>
                  <p>Scrum Alliance</p>
                  <div className="space8" />
                  <p>
                    ID: 001498283
                  </p>
                  <div className="space8" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
