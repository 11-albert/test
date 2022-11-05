import React, { useRef, useLayoutEffect } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'


const Up = styled.div`
width: 3rem;
height: 3rem;
box-sizing: border-box;
margin: 0;
padding: 0;
color: #fff;
background-color: #2e91f9;
font-size: 12px;
position: fixed;
right: 1rem;
bottom: 1rem;
cursor: pointer;
display: none;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: all .3s ease;

&:hover{
    transform: scale(1.2);
}
&:active{
    transform: scale(0.9);
}

`
const ScrollTop = () => {

    const ref = useRef(null);
    const {y} = useWindowScroll();


    const scrollToTop = ()=>{
        let element = document.getElementById("nav");
    
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
          
        })
      }

      useLayoutEffect(()=> {
          if( y > 200 ){
              ref.current.style.display = "flex"
          }else{
            ref.current.style.display = "none"
          }
      }, [y])
  return (
    <Up ref={ref} onClick={()=> scrollToTop()} className="cursor-pointer">
        &#x2191;
    </Up>
  )
}

export default ScrollTop