import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineFileText, AiOutlineHome, AiOutlineLinkedin, AiOutlineUser } from "react-icons/ai"
import { LiaLaptopCodeSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`text-puregreys-50 sticky top-0  ${isScrolled ? ' backdrop-blur-lg border-richblack-800 border-b-[1px] ' : 'bg-transparent'}`}>
            <div className='flex flex-wrap items-center justify-between w-11/12 mx-auto my-4'>
                {/* logo */}
                <div className='text-2xl cursor-pointer text-orange-5'>
                    <Link to={"/home"}>Shivansh</Link>
                </div>

                <nav>
                    <ul className='flex gap-x-10 flex-wrap'>
                        <li>
                            <Link to={"/home"} className='flex items-center gap-1 cursor-pointer hover:border-b-[2px] hover:border-orange-5 '>
                                Home <AiOutlineHome size={18} />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} className='flex items-center gap-1 cursor-pointer hover:border-b-[2px] hover:border-orange-5 '>
                                About <AiOutlineUser size={18} />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/projects"} className='flex items-center gap-1 cursor-pointer hover:border-b-[2px] hover:border-orange-5 '>
                                Projects <LiaLaptopCodeSolid size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/resume"} className='flex items-center gap-1 cursor-pointer hover:border-b-[2px] hover:border-orange-5 '>
                                Resume <AiOutlineFileText size={15} />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <ul className='flex gap-x-5 items-center '>
                        <a href="https://github.com/Shivansh876" target='_blank'>
                            <li className='cursor-pointer'>
                                <AiFillGithub size={22} />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/shivansh-mahajan-a8a319217/" target='_blank'>
                            <li className='cursor-pointer'>
                                <AiFillLinkedin size={22} />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar