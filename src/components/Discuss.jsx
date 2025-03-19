import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Discuss = () => {
    return (
        <section className="px-5 py-10 md:p-20 bg-gray-900 flex flex-col gap-6 text-center">
            <h1 className="text-white">Do you have Project Idea? <br />
                Let's discuss your project!</h1>

            <p className="text-gray-300">Bring your vision to life with a tailored solution.</p>

            <a href="#contact-me" className="theme-btn w-fit flex flex-row mx-auto">Let's Work Together <FaArrowRight className="my-auto ms-2" /></a>
        </section>
    )
}

export default Discuss