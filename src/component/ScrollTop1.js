import React, { useEffect, useState } from 'react'

const ScrollTop1 = () => {
    const [isvisible, setIsvisible] = useState(false)
    const goUp = () =>{
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }
    const listenToScroll = () =>{
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setIsvisible(true)
        }else{
            setIsvisible(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", listenToScroll)
        return ()=> window.removeEventListener("scroll", listenToScroll)
    },[])
  return (
    <div>
    
    {
        isvisible && (
            
            <div className='flex fixed bottom-5 right-5 justify-center items-center bg-slate-400 p-4 rounded-full w-10 h-10 cursor-pointer text-white' onClick={goUp}>
                &#x2191;
            </div>
        )
    }
    </div>
  )
}


export default ScrollTop1