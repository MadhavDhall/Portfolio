import React from "react";
import styles from "./style/Hero.module.css";
import photo from "../assets/Madhav-Dhall.jpeg"

const Hero = () => {
    return (
        <div className="grid grid-cols-10 gap-10 h-min my-auto flex-grow p-3 content-center lg:px-0">
            <span className="hidden lg:block lg:col-span-1"></span>
            <div className="col-span-10 md:col-span-5 lg:col-span-4 text-start grid content-around gap-5 h-full">
                <div className="flex flex-col gap-5">
                    <h1>Namaskar, I am <br />Madhav Dhall</h1>

                    <p className="text-gray-600">I am a Full-Stack Developer based in Punjab, India. I am currently doing my undergrad(B.Tech. Energy Engineering) at IIT Roorkee. Apart from Web Dev, I like to share my experiences at Quora and meeting new people.</p>

                    <a href="#contact-me" className="theme-btn w-fit">Send A Message!</a>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <div className={styles.stat + " rounded-l-md"}>
                        <h4>2 Yr+</h4>
                        <p>Experience</p>
                    </div>
                    <div className={styles.stat}>
                        <h4>5+</h4>
                        <p>Projects made</p>
                    </div>
                    <div className={styles.stat + " rounded-r-md"}>
                        <h4>2L +</h4>
                        <p>Quora views</p>
                    </div>
                </div>
            </div>
            <span className="hidden lg:block lg:col-span-1"></span>
            <div className="md:col-span-5 lg:col-span-3 hidden md:block">
                <img src={photo} alt="Madhav Dhall" className="rounded-2xl" />
            </div>
        </div>
    )
}

export default Hero;