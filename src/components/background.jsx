import React from 'react'
import bg from '../background/bg1.mp4'





export const Background  =()=> {
  return (
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
    
  )
}

export default Background