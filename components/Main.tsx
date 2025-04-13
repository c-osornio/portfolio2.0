'use client'
import Python from '@/assets/img/logo/icons8-python-48.png'
import R from '@/assets/img/logo/icons8-r-project-48.png'
import Tableau from '@/assets/img/logo/icons8-tableau-software-48.png'
import Bi from '@/assets/img/logo/icons8-power-bi-48.png'
import MySQL from '@/assets/img/logo/icons8-mysql-48.png'
import Java from '@/assets/img/logo/icons8-java-48.png'
import JS from '@/assets/img/logo/icons8-javascript-48.png'
import AWS from '@/assets/img/logo/icons8-aws-48.png'
import JN from '@/assets/img/logo/icons8-jupyter-48.png'
import Other1 from '@/assets/img/all-images/others/others1.png'
import Elements1 from '@/assets/img/elements/elements1.png'
import Arrow from '@/assets/img/icons/arrow1.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Main = () => {
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
      <div id="home">
        <div className="hero-heading-area heading1">
          <h5 data-aos="fade-left" data-aos-duration={800}>
            <Image src={Sublogo1} alt="" />
            Hi, I’m Carlos, Data Analyst and Software Developer
          </h5>
          <div className="space24" />
          <h1 data-aos="fade-left" data-aos-duration={900}>
            Transforming Data
          </h1>
          <div className="space24" />
          <h1 className="head" data-aos="fade-left" data-aos-duration={1000}>
            Into <span>Breakthroughs</span>
          </h1>
          <div className="space24" />
          {/* <div color='white'>
          <h3 color='white' data-aos="fade-left" data-aos-duration={1100}>
            With expertise spanning from predictive analytics to full-stack web development, I specialize in bridging the gap between raw data and business value. Through my work, I've helped organizations not just understand their data, but leverage it to make informed decisions and achieve measurable results.
          </h3>
          </div> */}
          <div className="space24" />
          <div className="arrow" data-aos="fade-left" data-aos-duration={1200}>
              {/* <Link href="">
                <Image src={Elements1} alt="" className="elements1 keyframe5" />
                <Image src={Arrow} alt="" className="arrow1" />
              </Link> */}
              <Image src={Python} alt="python" />
              <Image src={Java} alt="java" padding-left='20pt'/>
              <Image src={JS} alt="javascript" padding-left='20pt'/>
              <Image src={R} alt="r" padding-left='20pt'/>
              <Image src={JN} alt="jupyter notebook" padding-left='20pt'/>
              <Image src={Tableau} alt="tableau" padding-left='20pt'/>
              <Image src={Bi} alt="powerBi" padding-left='20pt'/>
              <Image src={MySQL} alt="MySQL" padding-left='20pt'/>
              <Image src={AWS} alt="AWS" padding-left='40pt'/>
          </div>
          <div className="space24" />
          <div className="main-btn-area" data-aos="fade-up" data-aos-duration={1200}>
            <Link href="#portfolio">
              My Projects
              <span>
                <FaArrowRight className="fa-solid" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
