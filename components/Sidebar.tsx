'use client'
import Hero from '@/assets/img/all-images/hero/hero-img1.png'
import Download from '@/assets/img/icons/download1.svg'
import Sicon1 from '@/assets/img/icons/s-icon1.svg'
import Sicon2 from '@/assets/img/icons/s-icon2.svg'
import Sicon3 from '@/assets/img/icons/s-icon3.svg'
import Sicon4 from '@/assets/img/icons/s-icon4.svg'
import Sicon5 from '@/assets/img/icons/s-icon5.svg'
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
  return (
    <>
      <div className="reveal-item  rounded img1 image-anime" data-aos="reveal-item">
        <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
        <Image className="w-100" src={Hero} alt="image" />
      </div>
      <div className="space18" />
      <h3>Alex Carry</h3>
      <div className="space16" />
      <p>Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.</p>
      <div className="space32" />
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
      <div className="space44" />
      <div className="btn-area1 text-center">
        <Link href="" target="_blank" download className="vl-btn1">
          Download Now <Image src={Download} alt="" />
        </Link>
      </div>
      <div className="space30" />
      <p>© {currentYear} OVRO. All Rights Reserved.</p>
    </>
  )
}

export default SidebarPage
