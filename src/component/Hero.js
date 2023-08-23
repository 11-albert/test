import React, {us} from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  
  const socialMedia= [
    {link: "https://github.com/11-albert", logo: 'logo-github' },
    {link: "https://www.facebook.com/syedalirazanaqvi101", logo: 'logo-facebook' },
    {link: "https://www.linkedin.com/in/syed-ali-raza-naqvi-b91bb9227", logo: 'logo-linkedin' },
    // {link: "", logo: 'logo-twitter' },
  ]
  
  return (
    <section id='home' className="md:h-screen h-auto flex py-10 md:flex-row flex-col items-center">
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt="" className='w-1/2 md:mb-0 mb-4 h-full object-cover md:mt-0 mt-4' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              {/* Hello! */}Universal Crypto
              <br />
            </span>
            {/* My name is */} Is An Educational And <span>{/*Ali Raza*/}Promtional Community</span>  
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-10 mt-2 font-bold text-gray-600'>
            {/* Fullstack Developer */}We'll promote your project by AMA session. Our complete process is channel post.
          </h4>
          <a href='#contact'>
            <button className='btn-primary mt-4'>Contact Me</button>
          </a>
          
          <div className='mt-6 text-3xl flex items-center md:justify-start justify-center gap-5'>
            {
              socialMedia?.map((icon,i)=>(
                <div key={i} className="text-gray-400 hover:text-white cursor-pointer">
                  <a href={icon.link} target="_blank">
                     <ion-icon name={icon.logo}></ion-icon>
                  </a>
                  
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero