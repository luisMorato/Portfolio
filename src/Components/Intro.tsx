import { useNavigate  } from "react-router-dom";

import Button from "./InputsAndButtons/Button";

const Intro = ( { smoothScrollTo }: {smoothScrollTo: (id: string) => void}) => {
    const navigate = useNavigate();
    return (
        <section className="relative flex items-center justify-center h-[65vh]
        sm:justify-start
        sm:h-screen
        sm:mb-10
        md:mb-0
        md:h-[60vh]
        lg:h-[80vh]
        xl:h-screen">
            <img 
                src="/Images/country-musicians-lifestyle-indoors.jpg" 
                alt="intro-bg-image"
                className="absolute top-0 left-0 -z-10 hidden w-full
                md:block
                md:h-[55vh]
                lg:h-[75vh]
                xl:h-[95vh]
                "
            />
            <img 
                src="/Images/computer-monitors-showing-source-code.png" 
                alt="intro-bg-image"
                className="absolute top-0 left-0 -z-10 hidden w-full brightness-75
                sm:block
                sm:h-screen
                md:hidden
                "
            />
            <div 
                className="translate-x-2
                sm:translate-x-24
                lg:translate-x-48"
            >
                <h1 
                    className="text-white text-4xl mb-2
                    sm:text-6xl
                    md:text-4xl
                    lg:text-6xl
                    "
                >Luis</h1>
                <h2 
                    className="text-white text-5xl font-bold tracking-[4px]
                    sm:text-7xl
                    md:text-5xl
                    lg:text-7xl
                    "
                >Fernando</h2>
                <h3 
                    className="text-white text-xl text-nowrap tracking-[8px]
                    sm:text-4xl
                    md:text-2xl
                    lg:text-4xl"
                >
                    <span className="text-[#7000FF]" style={{fontFamily: "kameron"}}>
                        Full
                    </span>
                    Stack Developer
                </h3>
                <div 
                    className="flex gap-x-5 mt-8
                    sm:mt-5"
                >
                    <Button
                        text="Contact Me"
                        type="button"
                        action={() => {smoothScrollTo("contact")}}
                    />
                    <Button 
                        text="My Projects"
                        type="button"
                        animation="animate-bounce"
                        action={() => {navigate("/Projects")}}
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro;