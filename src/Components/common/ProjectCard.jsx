import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { GoLinkExternal } from 'react-icons/go'

const ProjectCard = ({image, title, desc, link}) => {

  const truncatedText = desc.slice(0, 200) + '...';

  return (
    <div className='flex flex-col max-w-[370px] bg-pureblack-500 border-[1px] border-puregreys-700 rounded-xl p-5 m-2'> 
        
        <img src={image} alt="" width={400} className='rounded-xl'/> 
        
        <div>
            <div className='flex justify-between text-puregreys-50 text-xl font-semibold py-3 items-center'>
                <p>{title}</p>
                <a href={link} target='_blank' className='w-[45px] h-[45px] aspect-square rounded-full bg-orange-5 px-[11px] py-3 text-richblack-5'>
                    <AiOutlineLink />
                </a>
            </div>
            <p className='text-puregreys-100'>{truncatedText}</p>
        </div>

        <div className='flex justify-between text-puregreys-5 mt-10'>
          <button className='flex items-center border-[1px] border-orange-5 rounded-lg p-3 gap-x-2 '>
            GitHub 
            <AiFillGithub size={22}/>
          </button>

          <button className='flex items-center p-3 gap-x-2'>
            View 
            <GoLinkExternal />
          </button>
        </div>
    </div>
  )
}

export default ProjectCard