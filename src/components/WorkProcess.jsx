import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { HiMiniRocketLaunch } from "react-icons/hi2";

const Process = ({ icon, heading, data }) => {
    return (
        <div className="bg-white rounded-lg col-span-2 sm:col-span-1 md:col-span-1 p-6 flex flex-col justify-center gap-5 hover:-translate-y-3 transition-discrete hover:shadow-lg hover:text-white text-purple-500 group" id="work-process">
            <h3 className="bg-[rgb(237,216,255,0.5)] w-fit p-5 rounded-md group-hover:bg-purple-500">
                {React.createElement(icon)}
            </h3>
            <h4 className="text-gray-900">{heading}</h4>
            <p className="text-gray-600 text-sm">
                {data}
            </p>
        </div>
    )
}

const processes = [
    {
        icon: LuNotepadText,
        heading: "Research",
        data: "This involves gathering information, analyzing competitors, and identifying key challenges."
    },
    {
        icon: FaPencilAlt,
        heading: "Design",
        data: "This phase involves wireframing, prototyping, and iterative refinements based on feedback and usability principles."
    },
    {
        icon: CgWebsite,
        heading: "Develop",
        data: "This stage involves front-end and back-end implementation, database integration, and ensuring cross-platform compatibility and responsiveness."
    },
    {
        icon: HiMiniRocketLaunch,
        heading: "Launch",
        data: " It involves thorough testing, debugging, and optimization to ensure a smooth deployment. Post-launch support and gathering user feedback are crucial parts of this phase."
    }
]

const WorkProcess = () => {
    return (
        <section className="grid grid-cols-12 gap-5 bg-gray-50 py-20 px-10 xl:px-0">
            <span className="col-span-1 hidden xl:block"></span>
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col gap-14 my-auto">
                <h2 className="font-bold">Work Process</h2>
                <p className="text-gray-500 text-md">
                    My work process is a comprehensive journey from concept to reality. It begins with in-depth research to understand the project's core needs and challenges. This insight fuels the design phase, where creativity meets functionality to craft engaging user experiences. The development stage brings these designs to life with robust, efficient code, leveraging full-stack expertise. Finally, the launch phase ensures a polished, secure product reaches the users, with ongoing support and improvements based on real-world feedback. <br /> This holistic approach ensures each project not only meets but exceeds expectations, delivering innovative solutions that make a real impact.
                </p>
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-span-5 grid grid-cols-2 gap-5">

                {
                    processes.map(({ icon, heading, data }, key) => {
                        return <Process icon={icon} heading={key + 1 + ". " + heading} data={data} key={key} />

                    })
                }

            </div>
            <span className="col-span-1 hidden xl:block"></span>
        </section>
    )
}

export default WorkProcess