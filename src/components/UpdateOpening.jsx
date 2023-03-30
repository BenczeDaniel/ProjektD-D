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

    
<ListGroup>
<ListGroup.Item>Nyitva tartás:</ListGroup.Item>
     {status == 'success' && data.data.map(obj=>(
       <ListGroup.Item className='list'>{obj.day}:      {obj.start}-{obj.end} </ListGroup.Item>
     ))
       }


      </ListGroup>



    </>
    
    


    
  )
}


