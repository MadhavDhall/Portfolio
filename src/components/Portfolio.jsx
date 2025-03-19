import React from "react"
import { FaArrowRight } from "react-icons/fa"
import dailyEvents1 from "../assets/projects/daily-events-1.png"
import dailyEvents2 from "../assets/projects/daily-events-2.png"
import spicMacayIITR from "../assets/projects/spic-macay-iitr.png"
import smartInhaler from "../assets/projects/smart-inhaler.png"

const Project = ({ img, title, desc, link }) => {
    return (
        <div className="col-span-8 md:col-span-3 xl:col-span-2 flex flex-col gap-6 rounded-md border border-gray-100">
            <img src={img} alt={title} />
            <div className="flex flex-col p-5 gap-4">
                <h4>{title}</h4>
                <p className="text-gray-600">{desc}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="theme-btn-outline">Check Out <FaArrowRight className="my-auto ms-2" /></a>
            </div>
        </div>
    )
}

const projects = [

    {
        img: spicMacayIITR,
        title: "SPIC MACAY IITR",
        desc: "Designed and Developed the official website of SPIC MACAY IITR chapter along with my team. The IIT Roorkee chapter of SPIC MACAY, established in 1985, has been dedicated to promoting cultural heritage through diverse events.",
        link: "https://www.iitr.ac.in/spicmacay/"
    },
    {
        img: dailyEvents2,
        title: "Daily Events 2.0",
        desc: "Madhav Dhall's Daily Events highlights important dates and holidays. Users can suggest new events, which are reviewed and accepted by an admin.",
        link: "https://madhav-dhall-events.vercel.app/"
    },
    {
        img: dailyEvents1,
        title: "Daily Events 1.0",
        desc: "Madhav Dhall's Daily Events highlights important dates and holidays. The project is open source along with events api.",
        link: "https://madhavdhall.github.io/"
    },
    {
        img: smartInhaler,
        title: "Smart Inhaler Project",
        desc: "The objective of the project is to develop a smart inhaler prototype based on advanced sensor technology and connectivity features, such as an ESP8266 Wi-Fi module, a Hall Effect sensor, an OLED screen, and a magnet. Functionality: The inhaler continuously tracks the patient's breathing pattern and medication use. Actuation is registered using the Hall Effect sensor, while the ESP8266 streams data in real time, allowing immediate feedback for patients and healthcare providers.",
        link: "https://smart-inhaler-try.vercel.app/"
    }
]

const Portfolio = () => {
    return (
        <section className="p-3 md:p-5 lg:p-10" id="portfolio">
            <h2 className="font-bold text-center">Portfolio</h2>

            <div className="grid grid-cols-6 gap-10 mt-20 xl:px-20">
                {
                    projects.map(({ img, title, desc, link }, key) => {
                        return <Project img={img} title={title} desc={desc} key={key} link={link} />
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;