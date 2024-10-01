import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@Components/Button'

const HeroSection = () => {
  const navigate = useNavigate()

  const [firstTypedText, setFirstTypedText] = useState('');
  const [secondTypedText, setSecondTypedText] = useState('');

  const smoothScrollTo = (id: string) => {
    const div = document.getElementById(id)

    div?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  const typer = (text: string, stateFn: Dispatch<SetStateAction<string>>) => {
    const TextSplittedByLetter = text.split('')

    let typedText = ''

    TextSplittedByLetter.forEach((letter, i) => {
      setTimeout(() => {
        typedText += letter
        stateFn(typedText)
      }, i * 200)
    })
  }

  useEffect(() => {
    const FirstText = 'Full'
    const secondText = ' Stack Developer'

    typer(FirstText, setFirstTypedText)
    setTimeout(() => {
      typer(secondText, setSecondTypedText)
    }, FirstText.length * 200)
  }, [])

  return (
    <section
      // Fix the CSS
      id="home"
      className="relative h-[300px] w-full
      md:h-[600px]
      xl:h-[900px]"
    >
      <img
        src="/Images/country-musicians-lifestyle-indoors.jpg"
        alt="intro-bg-image"
        className="hidden w-full h-full object-cover max-h-[900px]
        md:block"
      />
      <div 
        className="absolute left-[12%] flex flex-col text-white top-10
        md:translate-y-1/2
        xl:translate-y-full"
      >
        <span
          className="text-4xl mb-2
          sm:max-md:text-6xl
          lg:text-6xl"
        >
          Luis
        </span>
        <span
          className="text-5xl font-bold tracking-[4px]
          sm:max-md:text-7xl
          lg:text-7xl"
        >
          Fernando
        </span>
        <div 
          className='text-xl text-wrap tracking-[8px]
          sm:text-4xl
          md:text-2xl
          lg:text-4xl'
        >
          <span className="text-mainViolet" style={{ fontFamily: 'kameron' }}>{firstTypedText}</span>
          <span>{secondTypedText}</span>
        </div>
        <div
          className="flex gap-5 mt-8
          sm:mt-5"
        >
          <Button
            type="button"
            onClick={() => {
              smoothScrollTo('contact')
            }}
          >
            Contact Me
          </Button>
          <Button
            type="button"
            onClick={() => {
              navigate('/Projects')
            }}
            className="animate-bounce"
          >
            My Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
