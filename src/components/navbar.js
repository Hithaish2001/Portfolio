import React, {useState} from "react"
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {GrMail, GrTwitter} from 'react-icons/gr';
import './navbar.css'


const Navbar=()=>{
    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav);
    return(
       <main className="w-screen h-24">
            <div className="nav static backdrop-blur-2xl  flex text-black justify-between drop-shadow-2xl bg-white">
                    <div className="w-screen flex justify-between items-center h-24">
                        <div className="logo flex">
                            <h1 className="  text-2xl font-semibold px-16">Portfolio.</h1>
                        </div>
                    <div className=" hidden md:flex font-medium pt-6 px-5">
                        <li className="list-none px-5"><a href="#home" id="home" className="links">HOME</a></li>
                        <li className="list-none px-5"><a href="#about" id="about" className="links">ABOUT</a></li>
                        <li className="list-none px-5"><a href="#projects" id="projects" className="links">PROJECTS</a></li>
                        <li className="list-none px-5"><a href="#contact" id="contact" className="links">CONTACT  ME</a></li>
                        <li className="list-none px-5">TOGGLE</li>
                    </div>
                </div>
                


                {/* mobile navbar */}
                <div onClick={handleclick} className="md:hidden z-10 text-zinc-500">
                        {!nav ? <FaBars/> : <FaTimes/>}
                </div>

                <ul className={!nav ? "hidden" : "absolute text-zinc-500 top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col justify-center items-center"}>
                <li className="list-none py-4"><a href="#home" id="home">HOME</a></li>
                    <li className="list-none py-4"><a href="#about" id="about">ABOUT</a></li>
                    <li className="list-none py-4"><a href="#projects" id="projects">PROJECTS</a></li>
                    <li className="list-none py-4"><a href="#contact" id="contact">CONTACT  ME</a></li>
                    <li className="list-none py-4">TOGGLE</li>
                </ul>
            </div>


            {/* social accout reach-outs */}
            <div className="social hidden lg:flex fixed flex-col left-0 top-[350px]">
            <ul>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hithaish-n-shetty-698a45227">LinkedIn <BsLinkedin size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5" target="_blank" rel="noreferrer" href="https://github.com/Hithaish2001">Github <FaGithub size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5" target="_blank" rel="noreferrer" href="mailto:shetty9606@gmail.com">Email <GrMail size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5" target="_blank" rel="noreferrer" href="https://twitter.com/Hithaish01">Twitter <GrTwitter size={35}/></a>
                </li>
            </ul>
            </div>
       </main>
    )
}

export default Navbar