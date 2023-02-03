import React from 'react'   
import bg from '../background/bg.mp4'
export const  Prices=()=> {
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
        <h1>Árak</h1>
    </div>

    </>
  )
}
