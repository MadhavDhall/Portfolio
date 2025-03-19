import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline, IoSend } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SiQuora } from "react-icons/si";
import "./style/Contact.module.css"

const Detail = ({ icon, heading, desc }) => {
    return (
        <div className="flex flex-row justify-start content-center group p-3 md:p-5 hover:-translate-y-2 transition-discrete hover:shadow-lg hover:inset-shadow-2xs rounded-md gap-5">
            <h4 className="bg-[rgb(237,216,255,0.5)] w-fit p-4 rounded-md group-hover:bg-purple-500 group-hover:text-white text-purple-500">
                {React.createElement(icon)}
            </h4>
            <div className="text-start my-auto">
                <h5 className="text-gray-700 text-start">{heading}:</h5>
                <p className="text-gray-900">{desc}</p>
            </div>
        </div>
    )
}

const Social = ({ icon, link }) => {
    return (
        <a className="w-fit p-5 rounded-md text-2xl hover:bg-purple-500 group" href={link} target="_blank">
            {React.createElement(icon, { className: "text-purple-500 group-hover:text-white" })}
        </a>
    )
}

const details = [
    {
        icon: IoLocationOutline,
        heading: "Address",
        desc: "Ludhiana, Punjab"
    },
    {
        icon: MdOutlineEmail,
        heading: "Email",
        desc: "madhavdhall6@gmail.com"
    },
    {
        icon: BsTelephone,
        heading: "Contact No.",
        desc: "9056212170"
    }
]

const socials = [
    {
        icon: FaInstagram,
        link: "https://www.instagram.com/madhavdhall_/"
    },
    {
        icon: FaLinkedin,
        link: "https://in.linkedin.com/in/madhav-dhall-053897310"
    },
    {
        icon: SiQuora,
        link: "https://www.quora.com/profile/Madhav-Dhall"
    },
    {
        icon: FaGithub,
        link: "https://github.com/MadhavDhall"
    }
]

const Contact = () => {
    const [textareaContent, setTextareaContent] = useState("")

    const submitContactForm = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }

    return (
        <section className="px-10 py-14 md:p-14 rounded-xl shadow-lg inset-shadow-2xs row-start-1 row-span-11 lg:row-start-1 lg:row-span-5 col-start-2 col-span-10 grid grid-cols-2 z-10 bg-white gap-y-10 gap-x-5 content-center" id="contact-me">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 content-around">
                <h2 className="font-bold">Let's discuss your Project</h2>
                <p className="text-gray-400">Let your idea come into reality</p>

                <div className="flex flex-col gap-3 mt-5">
                    {
                        details.map(({ icon, heading, desc }, key) => {
                            return <Detail icon={icon} heading={heading} desc={desc} key={key} />
                        })
                    }
                </div>

                <div className="flex flex-row gap-5 mt-5 p-2 mx-auto md:m-0 justify-center md:justify-start">
                    {
                        socials.map(({ icon, link }, key) => {
                            return <Social icon={icon} link={link} key={key} />
                        })
                    }
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <form method="post" onSubmit={submitContactForm} className="flex flex-col gap-10">
                    <div className="group input-group">
                        <label htmlFor="name">Name*</label>
                        <input type="text" name="name" id="name" required />
                    </div>

                    <div className="group input-group">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" required />
                    </div>

                    <div className="group input-group">
                        <label htmlFor="contact">Contact No.*</label>
                        <input type="number" name="contact" id="contact" required />
                    </div>

                    <div className="grid xl:grid-cols-2 gap-y-10 gap-x-5">
                        <div className="group input-group">
                            <label htmlFor="budget">Budget(in ₹)*</label>
                            <input type="number" name="budget" id="budget" required />
                        </div>

                        <div className="group input-group">
                            <label htmlFor="subject">Subject*</label>
                            <input type="subject" name="subject" id="subject" required />
                        </div>
                    </div>

                    <div className="group input-group">
                        <label htmlFor="message">Message*</label>
                        <textarea name="message" id="message" rows={textareaContent ? "auto" : "1"} value={textareaContent}
                            onChange={(e) => setTextareaContent(e.target.value)} required></textarea>
                    </div>

                    <button type="submit" className="flex flex-row gap-3 theme-btn w-fit">
                        Submit <IoSend className="my-auto" />
                    </button>
                </form>
            </div >
        </section >
    )
}

export default Contact;