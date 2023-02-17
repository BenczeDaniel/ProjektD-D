import React from 'react'
import bg from '../background/bg.mp4'
import { useQuery } from 'react-query'
import { getOpening } from './getData'
import ListGroup from 'react-bootstrap/ListGroup';




export const  Contact=()=> {

  const {data,status}=useQuery('opening',getOpening)

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

 

    </div>
    <p className='position2'> ❗️  Kedves Ügyfeleink, Érdeklődők ❗️  <br /> <br />
Ügyfélszolgálatunk minden nap 10-16 óráig érhető el. <br />
Amennyiben kérdésed vagy észrevételed van keress minket bizalommal elérhetőségeink valamelyikén:
<br /> <br />

📩 E-mail: D&DGYM@gmail.com <br /> <br />


☎️ Telefon: +36-70-000-1111
<br /> <br />
🕘 A Terem nyitvatartása 🕘 :
<br />
<ListGroup>
     {status == 'success' && data.data.map(obj=>(
       <ListGroup.Item className='list'>{obj.day}:      {obj.start}-{obj.end} </ListGroup.Item>
     ))
       }


      </ListGroup>

</p>

    </>
    
    


    
  )
}


