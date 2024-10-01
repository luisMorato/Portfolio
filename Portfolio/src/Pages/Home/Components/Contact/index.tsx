import Box from '@Components/Box'
import Socials from './Socials'
import Heading from '@Components/Text/Heading'
import ContactForm from './ContactForm'

import Styles from './styles/Contact.module.css'

const Contact = () => {
  return (
    <Box id="contact">
      <Heading as={'h2'}>Contact</Heading>
      <div
        className="flex max-md:flex-col justify-between w-full mt-12
        lg:w-[90%]
        xl:w-3/4
        2xl:w-2/3"
      >
        <Socials />
        <ContactForm />
        <div
          className={`absolute right-3 bg-mainViolet hidden
            xl:block
            xl:size-[300px]
            2xl:size-[400px]
            ${Styles.shapelessDiv}
          `}
        >
          <img
            src="/Images/guy-draw.png"
            alt="guy-image"
            className="brightness-75"
          />
        </div>
      </div>
    </Box>
  )
}

export default Contact
