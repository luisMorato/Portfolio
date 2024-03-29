import ContactForm from "./ContactForm"
import Socials from "./Socials"

import Styles from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <div  id="contact" className="relative text-white w-4/5 mx-auto border-b border-b-white/30 pb-8 mt-12">
      <h2 className="relative text-5xl tracking-[2px] font-medium inline-block text-white
        after:absolute
        after:content-['']
        after:h-[2px]
        after:w-full
        after:bg-[#7000FF]
        after:top-full
        after:left-0
        after:mt-2
        ">Contact</h2>
        <div className="flex flex-col justify-between w-full mt-12
        md:flex-row
        lg:w-[90%]
        xl:w-3/4
        2xl:w-2/3">
          <Socials />
          <ContactForm />
          <div 
          className={`absolute right-3 bg-[#7000FF] hidden
            xl:block
            xl:max-w-[300px]
            xl:max-h-[300px]
            2xl:max-w-[400px]
            2xl:max-h-[400px]
            ${Styles.shapelessDiv}
          `}><img src="/Images/38729-Photoroom.png-Photoroom.png" alt="guy-image" className="brightness-75"/></div>
        </div>
    </div>
  )
}

export default Contact;