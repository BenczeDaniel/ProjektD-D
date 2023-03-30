import React from 'react'
import bg from '../background/bg.mp4'
import { useQuery } from 'react-query'
import { getOpening } from './getData'
import ListGroup from 'react-bootstrap/ListGroup';




export const  UpdateOpening=()=> {

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

  <div className="holderMain">
      <div >
        <h1 className="text-center text-white">Nyitvatartás</h1>
      </div>

  <div className="list1">
        <div className="xhold holder bg-white ">
          <div align="center">Nap</div>
          <div align="center">Nyitás</div>
          <div align="center">Zárás</div>
          <div align="center">Törlés</div>
          <div align="center">Módosítás</div>
        </div>
        {status == "success" &&
          data.data.map((obj) => (
            <div className="holder" key={obj.id}>
              <div align="center">{obj.day} </div>
              <div align="center">{obj.start}:00 </div>
              <div align="center">{obj.end}:00 </div>
              <div align="center"><i class="text-danger fa-regular fa-trash-can"></i></div>
              <div align="center"><i class="text-warning fa-solid fa-pen-to-square"></i></div>
            </div>
          ))}
      </div>
      </div>



    </>
    
    


    
  )
}


