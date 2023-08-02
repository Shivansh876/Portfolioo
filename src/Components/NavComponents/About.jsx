import React from 'react'
import about from "../../Images/about.svg"
import Progress from './Progress'

const languageData = [
  { bgColor: "#dc3545", completed: 90, text: "ReactJs" },
  { bgColor: "#00a968", completed: 90, text: "nodejs" },
  { bgColor: "#6c757d", completed: 90, text: "MongoDb" },
  { bgColor: "#ef6c00", completed: 90, text: "Express js" },
  { bgColor: "#008080", completed: 90, text: "C++" },
]

const toolData = [
  { bgColor: "#1e3a8a", completed: 90, text: "ReactJs" },
  { bgColor: "#00a968", completed: 90, text: "nodejs" },
  { bgColor: "#ffc107", completed: 90, text: "MongoDb" },
  { bgColor: "#ef6c00", completed: 90, text: "Express js" },
  { bgColor: "#008080", completed: 90, text: "C++" },
]

const About = () => {
  return (
    <div className='text-puregreys-50 w-10/12 mx-auto '>
      <div className='flex flex-col text-puregreys-50 lg:w-9/12 md:w-9/12 mx-auto mt-10'>
        <p className='font-bold text-3xl py-5'>About Me</p>
        <p className=''>Hi I am <span className='font-bold'>Shivansh Mahajan</span></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className='flex justify-between text-puregreys-50 md:w-9/12 lg:w-9/12 mx-auto mt-10 flex-wrap gap-20'>
        <div>
          <p className='text-3xl font-semibold'>Languages</p>
          <p className='py-2'>Languages that i have picked up over the years</p>
          <Progress data={languageData} />
        </div>

        <div>
          <p className='text-3xl font-semibold'>Libraries & Frameworks</p>
          <p className='py-2'>Libraries and Frameworks that i prefer to work with</p>
          <Progress data={toolData} />
        </div>

        <div>
          <p className='text-3xl font-semibold'>Libraries & Frameworks</p>
          <p className='py-2'>Libraries and Frameworks that i prefer to work with</p>
          <Progress data={toolData} />
        </div>
      </div>

      <div className="flex justify-between text-puregreys-50 md:w-9/12 lg:w-9/12 mx-auto mt-10 flex-wrap gap-20 py-10 border-[1px] border-puregreys-700">
        <div className='flex flex-col w-11/12 mx-auto'>
          <div className='py-5 '>
            <p className='text-3xl font-semibold'>Student At Chandigarh University</p>
            <p className='text-sm text-puregreys-300 '>2021 - 2025</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, enim magnam distinctio velit ratione vel animi culpa nihil molestiae non, voluptas minus iusto? Neque atque perferendis maxime delectus excepturi libero, numquam accusantium recusandae alias? A, consequatur ex ratione iure sed explicabo quisquam quis cumque soluta ut totam, nihil voluptate corrupti eaque facilis.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About