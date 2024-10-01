import Box from '@Components/Box'
import Skills from './Skills'
import Anchor from '@Components/Text/Anchor'
import Heading from '@Components/Text/Heading'

const About = () => {
  return (
    <Box id="about">
      <Heading as={'h2'}>ABOUT</Heading>
      <div
        className="flex max-lg:flex-col gap-8 w-full mt-8
          lg:items-start
          lg:justify-between
          xl:gap-20"
      >
        <div
          className="flex flex-col gap-5 text-white text-base
          lg:text-lg
          xl:max-w-[36%]"
        >
          <p>
            Heey, how are you?! My name is Luis Fernando, I am a Computer
            Engineering student at the University of Sorocaba, where at the same
            time I take web development courses at Rocketseat / Udemy. In
            addition to these trainings, I have a technician in Systems
            Development from the institution ETEC- Rubens de Faria e Souza.
          </p>
          <p>
            I currently have no professional experience and I am looking for my
            first job in the Front-end developer area, as an internship, Junior
            or Trainee, to gain professional experience and advance my career.
            Furthermore, through personal projects, I was able to acquire a
            considerable amount of knowledge. To check out my projects you can
            access the{' '}
            <Anchor to="/Projects" className="inline-block">
              Projects
            </Anchor>{' '}
            section here on my Portfolio, or take a look at my{' '}
            <Anchor
              className="underline inline-block"
              to="https://github.com/luisMorato"
              target="_blank"
              rel="external"
              referrerPolicy="no-referrer"
            >
              Github
            </Anchor>
            .
          </p>
        </div>
        <Skills />
      </div>
    </Box>
  )
}

export default About
