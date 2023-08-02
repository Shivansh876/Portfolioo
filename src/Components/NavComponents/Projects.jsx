import React from 'react'
import { ProjectData } from '../../data/ProjectData'
import ProjectCard from '../common/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col w-11/12 mx-auto'>
            <div className='flex flex-col mx-auto text-center my-12'>
                <p className='text-puregreys-50 text-4xl'>My recent <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-5 to-orange-25 font-semibold'>works</span></p>
                <p className='text-puregreys-50 my-2'>Here are few project's I've worked on recently.</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    ProjectData.map((Project, index) => (
                        <div key={index}>
                            <ProjectCard image={Project.image} title={Project.title} desc={Project.desc} link={Project.link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects