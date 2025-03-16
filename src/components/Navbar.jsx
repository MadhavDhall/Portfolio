import React, { useEffect } from "react";
import "./style/Navbar.css"
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
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
                <a href="/" className="text-4xl">Madhav Dhall</a>

                <ul className="hidden md:flex md:flex-row md:justify-around list-none gap-10">
                    <li><a href="/">Home</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact" className="theme-btn">Contact</a></li>
                </ul>
                <LuMenu className="md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </div>

            <ul className={"flex-col justify-center text-center md:hidden list-none gap-5 my-4" + (isOpen ? " flex" : " hidden")}>
                <li><a href="/">Home</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact" className="theme-btn my-5">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;