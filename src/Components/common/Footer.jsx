import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { DiCode } from 'react-icons/di'

const Footer = () => {
    return (
        <div className='py-5 backdrop-blur-lg  mt-10'>
            <div className='flex flex-col items-center justify-between text-puregreys-400  text-lg w-11/12 mx-auto '>

                <div className='flex items-center'>
                    <DiCode size={22}/>
                    <p className='text-sm font-bold'> with love by <span>Shivansh Mahajan</span></p>
                </div>

                <div> 
                    <div className='flex gap-x-3 pt-1'>
                        <p>
                            <AiFillLinkedin size={18}/>
                        </p>
                        <p>
                            <AiFillGithub size={18}/>
                        </p>
                        <p>
                            <CiTwitter size={18}/>
                        </p>
                        <p>
                            <AiOutlineInstagram size={18}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer