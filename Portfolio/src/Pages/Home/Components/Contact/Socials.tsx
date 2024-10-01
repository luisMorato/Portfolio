import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import facebookLogo from '@assets/facebook.svg'
import whatsappLogo from '@assets/whatsapp.svg'
import instagramLogo from '@assets/instagram.png'
import linkedinLogo from '@assets/linkedin.png'
import githubLogo from '@assets/github.svg'

import Styles from './styles/Contact.module.css'
import { env } from 'src/Schemas/envSchema'

type SocialsProps = {
  src: string
  translatepercent: number
  link: string
}[]

const Socials = () => {
  const socials: SocialsProps = useMemo(
    () => [
      {
        src: facebookLogo,
        translatepercent: 0,
        link: '#',
      },
      {
        src: whatsappLogo,
        translatepercent: 90,
        link: `https://wa.me/${env.VITE_PHONE_NUMBER}/`,
      },
      {
        src: instagramLogo,
        translatepercent: 140,
        link: 'https://www.instagram.com/l0u1s_f3r/',
      },
      {
        src: linkedinLogo,
        translatepercent: 90,
        link: 'https://www.linkedin.com/in/luis-fernando-morato-da-conceição-985123223/',
      },
      {
        src: githubLogo,
        translatepercent: 0,
        link: 'https://github.com/luisMorato',
      },
    ],
    [],
  )

  const [windowSize, setWindowSize] = useState<number>()

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth)
  })

  return (
    <div className="max-md:mb-8">
      <ul
        className={`flex flex-row gap-y-5 translate-x-0 gap-5
                md:flex-col
                md:translate-x-8
                ${Styles.circularMenu}`}
      >
        {socials.map((socialImg, index) => (
          <li
            key={index}
            className="rounded-full size-10 overflow-hidden cursor-pointer"
            style={
              windowSize && windowSize < 768
                ? { transform: `translateX(0)` }
                : { transform: `translateX(${socialImg.translatepercent}%)` }
            }
          >
            <Link to={socialImg.link} rel="external" target="_blank">
              <img
                src={socialImg?.src}
                alt={`social-image`}
                className="flex-shrink-0 flex-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
