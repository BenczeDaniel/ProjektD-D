import React from 'react'
import bg from '../background/bg1.mp4'





export const Background  =()=> {
  return (
    <video
    autoPlay
    loop
    muted
    style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1",
    }}
  >
    <source src={bg} type="video/mp4" />
  </video>
    
  )
}

export default Background