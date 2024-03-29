import { 
    ChangeEvent, 
    FormEvent, 
    useState 
} from "react";
import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import Input from "./InputsAndButtons/Input";
import Button from "./InputsAndButtons/Button";

const ContactForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.name === "name" ? setName(e.target.value) : setEmail(e.target.value);
    }
  
    return (
        <div className="-translate-y-3 w-full
        md:w-2/3
        lg:w-3/5
        xl:w-3/5
        xl:-translate-x-16
        xl:mr-4
        2xl:translate-x-0
        2xl:mr-8
        ">
            <h2 className="text-2xl mb-6">Get In Touch</h2>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-5 items-end">
                    <div className="flex flex-col gap-y-5 w-full">
                        <div 
                            className="flex flex-col gap-y-5
                            lg:gap-y-0
                            lg:flex-row
                            lg:gap-x-5"
                        >
                            <Input
                                label="Name"
                                name="name"
                                id="name"
                                type="text"
                                value={name}
                                required
                                onInputChange={(e) => handleChange(e)}
                            />
                            <Input
                                label="Email"
                                name="email"
                                id="email"
                                type="email"
                                value={email}
                                required
                                onInputChange={(e) => handleChange(e)}
                            />
                        </div>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            className="w-full bg-transparent border border-white/50 py-2 px-4 placeholder:text-white/70 focus:outline-none min-h-[150px] max-h-[150px]"
                        ></textarea>
                    </div>
                    <Button 
                        text="Send"
                        type="submit"
                        icon={<IoIosSend />}
                        iconPosition="right"
                        action={() => {}}
                    />
                </form>
            </div>
            <div className="flex flex-col gap-y-5 mt-8">
                <span className="flex items-center gap-x-3">
                <FaPhone size={15} className="rotate-90"/>
                <p>Phone: +55 (15) 9 8181-8866</p>
                </span>
                <span className="flex items-center gap-x-3">
                <IoLocationSharp size={20}/>
                <p>Location: Brazil, Sorocaba - SP</p>
                </span>
            </div>
        </div>
    )
}

export default ContactForm