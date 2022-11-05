import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import hero from "../assets/hero2.png"
import project1 from "../assets/p1.png"
import project2 from "../assets/p2.png"
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper"
const Projects = () => {
  const projects = [
    {img: project1, name: "NFTSharks Web App", github_link: "https://github.com/11-albert/NFT-/tree/main/nftsharks.club", live_link: "https://nftsharks.club/"},
    {img: project2, name: "Portfolio Web App", github_link: "", live_link: ""},
    

  ]
  return (
    <section id='projects' className='py-10 text-white'>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold '>
                My <span className='text-cyan-600'>Projects</span>
            </h3>
            <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
        </div>
        <br />
        <div className='flex max-w-6xl px-5 mx-auto items-center relative '>
            <div className='lg:w-2/3 w-full '>
              <Swiper slidesPerview={1.2} spaceBetween={20} breakpoints={{ 
                768:{
                  slidesPerView: 2,
                }
              }} 
              loop={true} autoplay={{
                delay:3000
              }}
              pagination={{
                clickable:true
              }}
              modules={[Pagination, Autoplay]}
              >
                {
                  projects.map((project_info,i)=>(
                    <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={project_info.img} alt="" className='rounded-lg ' />
                    <h3 className='text-xl my-3'>{project_info.name}</h3>
                    <div className='flex gap-3'>
                      <a href={project_info.github_link} target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                      <a href={project_info.live_link} target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>
                    </div>
                  </div>
                </SwiperSlide>
                // <SwiperSlide>
                //   <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                //     <img src={hero} alt="" className='rounded-lg ' />
                //     <h3 className='text-xl my-3'>Movie App</h3>
                //     <div className='flex gap-3'>
                //       <a href="" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                //       <a href="" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>
                //     </div>
                //   </div>
                // </SwiperSlide>
                  ))
                  }
              </Swiper>
            </div>
            <div className='lg:block hidden'>
              <img src={hero} alt="" className='h-95 ml-4'/>
            </div>
        </div>
    </section>
  )
}

export default Projects