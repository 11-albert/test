import React from 'react'
import hero from '../assets/sayhello.png'

const HireMe = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white '>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold '>
                Hire <span className='text-cyan-600'>Me</span>
            </h3>
            <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
        </div>
        <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row  flex-col-reverse items-center'>
            <div>
                <h2 className='text-2xl font-semibold '>Do you want any work from me?</h2>
                <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>Client never get bored of my works as I come up with different thoughts
                and imaginations to make my work appealing to the customers. so, of course, It is your best advantage to hire me as your co-worker. </p>
               
               <a href='#contact'>
                 <button className='btn-primary mt-10'>Say Hello</button>
               </a>
                 
                
            </div>
            <img src={hero} alt="" className='lg:h-[32rem] h-80 lg:absolute bottom-0 -right-10 object-cover' />
        </div>
    </section>
  )
}

export default HireMe