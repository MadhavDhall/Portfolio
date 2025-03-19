import React from "react";

const Testimonial = () => {
    return (
        <div className="flex flex-col gap-3 mt-10">
            <p className="text-gray-700 text-center italic">
                "Madhav Dhall is a talented developer with a keen eye for detail and a passion for delivering high-quality solutions. His dedication to understanding client needs and his ability to innovate make him a standout in the field."
            </p>

            <h5 className="text-center font-semibold">~ Anonymous</h5>
        </div>
    )
}

const Testimonials = () => {
    return (
        <section className="py-20 px-5 md:px-20 lg:px-40" id="testimonials">
            <h1 className="text-center">Testimonials</h1>

            <Testimonial />
        </section>
    )
}

export default Testimonials