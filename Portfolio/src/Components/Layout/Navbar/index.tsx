import { useLocation, useNavigate } from 'react-router-dom'

import Anchor from '@Components/Text/Anchor'
import { useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const smoothScrollTo = (id: string) => {
    const div = document.getElementById(id)

    if (id === 'home' && location.pathname !== '/') {
      navigate('/')
    } else {
      div?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.id
          const link = document.getElementById(`link-${sectionName}`)
          const classes = [
            'relative',
            'after:absolute',
            'after:content-[""]',
            'after:h-[2px]',
            'after:w-full',
            'after:bg-mainViolet',
            'after:top-full',
            'after:left-0',
          ]

          if (link) {
            entry.isIntersecting
              ? link.classList.add(...classes)
              : link.classList.remove(...classes)
          }
        })
      },
      { threshold: 0.9 },
    )

    const sections = ['home', 'about', 'contact']

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) observer.unobserve(section)
      })
    }
  })

  return (
    <nav>
      <ul
        className="flex justify-end gap-x-5 text-white text-base
        sm:text-lg"
      >
        <li>
          <Anchor id="link-home" to="#" onClick={() => smoothScrollTo('home')}>
            Home
          </Anchor>
        </li>
        {location.pathname !== '/Projects' && (
          <>
            <li>
              <Anchor
                id="link-about"
                to="#"
                className="transition-all duration-150"
                onClick={() => smoothScrollTo('about')}
              >
                About
              </Anchor>
            </li>
            <li>
              <Anchor to="/Projects">Projects</Anchor>
            </li>
            <li>
              <Anchor
                to="#"
                id="link-contact"
                onClick={() => smoothScrollTo('contact')}
              >
                Contact
              </Anchor>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
