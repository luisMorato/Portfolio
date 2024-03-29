import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Styles from "../Styles/Contact.module.css";

type SocialsProps = {
    src: string,
    translatepercent: number,
    link: string
}[];

const Socials = () => {
    const socials: SocialsProps = useMemo(() => [
        {
            src:"/Icons/facebook.png",
            translatepercent: 0,
            link: ""
        },
        {
            src:"/Icons/whatsapp.png",
            translatepercent: 90,
            link: ""
        },
        {
            src:"/Icons/instagram.png",
            translatepercent: 140,
            link: "https://www.instagram.com/l0u1s_f3r/"
        },
        {
            src:"/Icons/linkedin.png",
            translatepercent: 90,
            link: "https://www.linkedin.com/in/luis-fernando-morato-da-conceição-985123223/"
        },
        {
            src:"/Icons/github.png",
            translatepercent: 0,
            link: "https://github.com/luisMorato?tab=repositories"
        }
    ], []);

    const [windowSize, setWindowSize] = useState<number>();

    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
    });

    return (
        <div 
            className="mb-8
            md:mb-0"
        >
            <ul 
                className={`flex gap-y-5 translate-x-0 flex-row gap-x-5
                md:flex-col
                md:translate-x-8
                ${Styles.circularMenu}`}
            >
                {socials.map((socialImg, index) => (
                    <li key={index} className="rounded-full max-w-10 max-h-10 bg-white overflow-hidden cursor-pointer"
                    style={windowSize && windowSize < 768 ? {transform: `translateX(0)`} : {transform: `translateX(${socialImg.translatepercent}%)`}}>
                        <Link to={socialImg.link} rel="external" target="_blank">
                            <img
                                src={socialImg?.src}
                                alt="social-image"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Socials