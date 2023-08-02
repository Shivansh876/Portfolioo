import React from 'react'
import TypingAnimation from './TypingAnimation'
import StudentImage from "../../Images/sample.webp"
import { TfiLinkedin } from "react-icons/tfi"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import Shivansh from "../../Images/Shivansh.jpg"
import homeImage from "../../Images/home.jpg"

const Home = () => {

  const backgroundStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };


  return (
    <div className='flex flex-col text-puregreys-50 w-11/12 mx-auto'>
      {/* section 1 */}
      <div className={`flex flex-col lg:flex-row items-center justify-between h-screen `} >
        <div className='my-10 text-puregreys-50 pl-10'>
          <p className='text-4xl py-4'>Hi There! 👋🏻</p>
          <p className='text-4xl '>I'M Shivansh Mahajan.</p>
          <TypingAnimation />
        </div>

        <div className=' mx-auto lg:mx-20 relative'>
          <div className={`absolute codeblock2 w-100 h-100 shadow-white shadow-[0_5px_20px_20px] opacity-12`}>

          </div>
          <img src={StudentImage} alt="" height={500} width={500} />
        </div>
      </div>

      {/* section 2 */}
      <div className='flex flex-col text-puregreys-50 w-11/12 mx-auto max-[1024px]:mt-[200px]'>
        <div className='flex lg:flex-row flex-col gap-x-20 justify-between items-center'>
          <div>
            <p className='text-4xl text-center'>LET ME INTRODUCE MYSELF</p>
            <div className='my-10 flex flex-col gap-3 max-w-[800px] text-puregreys-100 '>
              <p>
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              </p>
              <p>
                I am fluent in classics like C++, Javascript and Go.
              </p>
              <p>
                My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.
              </p>
              <p>
                Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js
              </p>
            </div>
          </div>

          <div className='my-10'>
            <img src={Shivansh} alt="" width={300} height={300} className='aspect-square rounded-full' />
          </div>
        </div>

        <div className='flex flex-col items-center py-10 my-20 '>
          <p className='text-4xl text-puregreys-50'>FIND ME ON</p>
          <p className='py-2'>Feel free to connect with me on </p>
          <div className='flex gap-x-10 my-5'>
            <p className='bg-richblack-5 text-orange-5 p-3 rounded-full cursor-pointer hover:shadow-md hover:shadow-orange-5'><TfiLinkedin size={22} /></p>
            <p className='bg-richblack-5 text-orange-5 p-3 rounded-full cursor-pointer hover:shadow-md hover:shadow-orange-5'><BsTwitter size={22} /></p>
            <p className='bg-richblack-5 text-orange-5 p-3 rounded-full cursor-pointer hover:shadow-md hover:shadow-orange-5'><BsGithub size={22} /></p>
            <p className='bg-richblack-5 text-orange-5 p-3 rounded-full cursor-pointer hover:shadow-md hover:shadow-orange-5'><AiFillInstagram size={22} /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home