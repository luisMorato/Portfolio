import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="w-4/5 mx-auto border-b border-b-white/30 pb-8">
        <h2 
          className="relative text-4xl tracking-[2px] font-medium inline-block text-white
          after:absolute
          after:content-['']
          after:h-[2px]
          after:w-full
          after:bg-[#7000FF]
          after:top-full
          after:left-0
          after:mt-2
          sm:text-5xl"
        >ABOUT</h2>
        <div 
          className="flex flex-col gap-y-8 w-full mt-8
          md:w-4/5
          lg:flex-row
          lg:items-center
          lg:justify-between
          xl:gap-x-32"
        >
            <div className="text-white text-base w-[90%]
            lg:text-lg
            lg:max-w-[50%]
            xl:text-base
            2xl:text-lg">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem ducimus eum! Earum, ratione impedit fugit corporis nesciunt molestias rem tenetur et facere laboriosam ipsam nulla, maxime expedita placeat commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reprehenderit placeat modi explicabo dignissimos, dicta delectus vel voluptatem, asperiores alias doloribus commodi nesciunt qui enim quisquam esse nihil tempore. Omnis?uidem reprehenderit placeat modi explicabo dignissimos, dicta delectus vel voluptatem, asperiores alias doloribus commodi nesciunt qui enim quisquam esse nihil tempore. Omnis?
                </p>
            </div>
            <Skills />
        </div>
    </section>
  )
}

export default About