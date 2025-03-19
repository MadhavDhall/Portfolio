import React, { useEffect } from "react";
import "./style//Navbar.module.css"
import { LuMenu } from "react-icons/lu";

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        function handleResize() {
            console.log(window.innerWidth)

            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return window.removeEventListener('resize', handleResize)
    })
    return (
        <nav className="p-5">
            <div className="flex flex-row justify-around">
                <a href="/" className="text-xl flex flex-row gap-2 items-center mb-auto">
                    <span className="bg-purple-500 rounded-full text-white p-2">MD</span>
                    <span>Madhav Dhall</span>
                </a>

                <ul className="hidden md:flex md:flex-row md:justify-around list-none gap-10">
                    {
                        links.map(({ title, href, btn }, key) => {
                            return (
                                <li key={key}><a href={href} className={btn ? "theme-btn" : ""}>{title}</a></li>
                            )
                        })
                    }
                </ul>
                <LuMenu className="md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </div>

            <ul className={"flex-col justify-center text-center md:hidden list-none gap-5 my-4" + (isOpen ? " flex" : " hidden")}>
                {
                    links.map(({ title, href, btn }, key) => {
                        return (
                            <li key={key}><a href={href} className={btn ? "theme-btn" : ""}>{title}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;