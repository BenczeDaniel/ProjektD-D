import React from 'react'
import bg from '../background/bg.mp4'

export const  Contact=()=> {




  return ( <>


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
   <div></div>





    <div>
    <h1 className='szines'>Elérhetőségünk
    </h1>

 

    </div>
    <p className='position'> ❗️  Kedves Ügyfeleink, Érdeklődők ❗️  <br />
Ügyfélszolgálatunk minden nap 10-16 óráig érhető el. <br />
Amennyiben kérdésed vagy észrevételed van keress minket bizalommal elérhetőségeink valamelyikén:
<br />

📩 E-mail: D&DGYM@gmail.com


☎️ Telefon: 06 70/000-1111


🕘 A Terem nyitvatartása 🕘 : 


</p>
    </>
    
    


    
  )
}


