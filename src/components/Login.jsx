import React from 'react'   
import bg from '../background/bg.mp4'
import Background from './background'
export const  Login=()=> {
  return (
<>
    <video
    autoPlay
    loop
    muted
    style={{
      zIndex: "-1",
    }}
  >
    <source src={bg} type="video/mp4" />
  </video>


    
    <div>
    
    </div>

    </>
  )
}
