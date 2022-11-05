import React from 'react'
import hero from "../assets/hero1.png"
import cv from "../assets/cv.jpg"

const About = () => {
  const info=[
    {text: "Years Experience", count: "02"},
    {text: "Completed Projects", count: "24"},
    {text: "Companies Work", count: "06"},
  ]
    
  return (
    <section id='about' className='py-10 text-white '>
      <div className='text-center mt-8 '>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto items-center'>
          <div className=''>
            <div className='text-gray-300 my-3'>
              <p className='text-start leading-7  mx-auto'>
                <span className='text-xl font-semibold text-cyan-600'> go beyond to create special experiences..</span>
                <p className='mb-2'>Hi there! I am a Fullstack Web Developer since the early 2021 I create custom web applications, mobile applications</p>
                <span className='text-lg text-gray-400'>Website Design and Development</span>
                <p className='mb-2'>To build user friendly and mobile first website We have full dedicated team in Karachi
                to grow your online business and get full control over the look and content of your website.</p>
                <span className='text-lg text-gray-400'>Design the interface that works for any device</span>
                <p>Responsive Web design is the approach that make the website design respond to the user environment based on screen size, and I do,
                My website are built responsive to all browsers and devices,</p>
                <p> My clients love working with me because I am reliable, knowledgable, faster, friendly and easy to communicate with..</p>
              </p>
              <div className='flex mt-10 md:justify-start justify-center items-center gap-7'>
                {
                  info.map(content=>(
                  <div key={content.text}> 
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count}<span className='text-cyan-600'>+</span></h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                  ))
                }
                
              </div>
              <br />
              <br />
                <a href={cv} download>
                  <button className='btn-primary'>Download CV</button>
                </a>
            </div>
          </div>
          <div className='flex flex-1 md:mt-0 mt-6 justify-center items-center'>
            <div className='lg:w-72 h-full relative sm:w-10/12 w-2/3  max-w-sm aboutImage'>
              <img src={hero} alt="" className='w-full object-cover bg-cyan-600 rounded-xl md:mb-4 mb-0 md:mt-0 mt-2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About