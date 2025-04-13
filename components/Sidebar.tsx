'use client'
import Hero from '@/assets/img/all-images/hero/portfolio.jpeg'
import Download from '@/assets/img/icons/download1.svg'
import Sicon1 from '@/assets/img/icons/s-icon1.svg'
import Sicon2 from '@/assets/img/icons/s-icon2.svg'
import Sicon3 from '@/assets/img/icons/s-icon3.svg'
import Sicon4 from '@/assets/img/icons/s-icon4.svg'
import Sicon5 from '@/assets/img/icons/github.svg'
import { currentYear } from '@/helper/constants'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const SidebarPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
    return () => {
      Aos.refresh()
    }
  }, [])

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Osornio_Enriquez.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Osornio_Enriquez.pdf';
            alink.click();
        })
    })
  }

  return (
    <>
      <div className="reveal-item  rounded img1 image-anime" data-aos="reveal-item">
        <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
        <Image className="w-100" src={Hero} alt="image" />
      </div>
      <div className="space18" />
      <h3><i>Carlos Osornio Enriquez</i></h3>
      <div className="space16" />
      <p>Dedicated data analyst and software developer with 10+ years of experience in mortgage underwriting, automotive finance, and IT consulting.</p>
      <div className="space32" />
      <ul>
        {/* <li>
          <Link href="">
            <Image src={Sicon1} alt="" />
          </Link>
        </li> */}
        {/* <li>
          <Link href="">
            <Image src={Sicon2} alt="" />
          </Link>
        </li> */}
        {/* <li>
          <Link href="">
            <Image src={Sicon3} alt="" />
          </Link>
        </li> */}
        <li>
          <Link target='_blank' href="https://www.linkedin.com/in/carlos-osornio/">
            <Image src={Sicon4} alt="" />
          </Link>
        </li>
        <li>
          <Link target='_blank' href="https://github.com/c-osornio" className="m-0">
            <Image src={Sicon5} alt="" />
          </Link>
        </li>
      </ul>
      <div className="space44" />
      <div className="btn-area1 text-center">
        <button className="vl-btn1" onClick={onButtonClick}>
          Download CV <Image src={Download} alt="" />
        </button>
      </div>
      <div className="space30" />
      <p>© {currentYear} OsoTech. All Rights Reserved.</p>
    </>
  )
}

export default SidebarPage
