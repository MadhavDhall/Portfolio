import React from "react";

const Footer = ({ links }) => {
    return (
        <section className="col-span-12 col-start-1 row-span-2 row-start-11 lg:row-start-5 lg:pt-10 px-20 xl:px-40 bg-gray-800 grid grid-rows-5">
            <div className="row-start-4 row-span-1 grid grid-cols-4 content-center">
                <a href="/" className="text-lg lg:flex flex-row gap-2 items-center hidden lg:col-span-1 text-white">
                    <span className="bg-purple-500 rounded-full text-white p-2">MD</span>
                    <span>Madhav Dhall</span>
                </a>


                <ul className="list-none my-auto lg:flex flex-row gap-5 hidden lg:col-span-2 text-center justify-center text-gray-50">
                    {
                        links.map(({ title, href }, key) => {
                            return (
                                <li key={key}><a href={href}>{title}</a></li>
                            )
                        })
                    }
                </ul>

                <h6 className="my-auto col-span-4 lg:col-span-1 text-gray-50 text-center">Copyright © {new Date().getFullYear()} Madhav Dhall</h6>
            </div>
        </section>
    )
}

export default Footer;