import React from "react";

const Hero = () => {
    return (
        <div className="grid grid-cols-6 gap-10 h-min my-auto flex-grow p-12">
            <div className="col-span-1"></div>
            <div className="col-span-2 text-start grid content-between h-full">
                <div className="flex flex-col gap-5">
                    <h1>Namaskar, I am <br />Madhav Dhall</h1>

                    <p className="text-gray-600">I am a Full-Stack Developer based in Punjab, India. I am currently doing my undergrad(B.Tech. Energy Engineering) at IIT Roorkee. Apart from Web Dev, I like to share my experiences at Quora and meeting new people.</p>

                    <a href="" className="theme-btn w-fit">Send A Message!</a>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    <div className="stat rounded-l-md">
                        <h4>2 Yr+</h4>
                        <p>Experience</p>
                    </div>
                    <div className="stat">
                        <h4>5+</h4>
                        <p>Projects made</p>
                    </div>
                    <div className="stat rounded-r-md">
                        <h4>2L +</h4>
                        <p>Quora views</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2">
                <img src="" alt="Madhav Dhall" />
            </div>
        </div>
    )
}

export default Hero;