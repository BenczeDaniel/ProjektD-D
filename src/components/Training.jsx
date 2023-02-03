import React from 'react'   
import bg from '../background/bg.mp4'
export const  Training=()=> {
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
        <h1>Edző tervek</h1>
    </div>

    </>
  )
}
