import React from 'react'   
import bg from '../background/bg.mp4'
import lab from '../edzeskepek/lab.jpg'
import hat from '../edzeskepek/hat.jpg'
import vall from '../edzeskepek/vall.jpg'
import triceps from '../edzeskepek/triceps.jpg'
import biceps from '../edzeskepek/biceps.jpg'
import mell from '../edzeskepek/mell.jpg'

import {Card,CardBody,CardTitle,Button,CardSubtitle,CardText} from 'reactstrap'


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
        <h1 className='text-center text-white'>Edzés tervek</h1>

<div className='container '>
  <div className='row justify-content-center'>
    <div className='col-md-4  text-center d-flex justify-content-center ass'>
  <Card className=''
  style={{
    width: '18rem'
  }}
>
  <img
   
    src={biceps} className='imagetraining'
  />
  <CardBody>
    <CardTitle tag="h5">
      Biceps
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Edzésről röviden:
    </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a biceps izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
  </CardBody>
</Card></div>


<div className='col-md-4 text-center d-flex justify-content-center ass'>
<Card className=''
  style={{
    width: '18rem'
  }}
>
  <img
  
    src={triceps} className='imagetraining'
  />
  <CardBody>
    <CardTitle tag="h5">
      Triceps
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Edzésről röviden:
    </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a triceps izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
  </CardBody>
</Card></div>

<div className='col-md-4 text-center d-flex justify-content-center ass'>
<Card className=''
  style={{
    width: '18rem'
  }}
>
  <img
   
    src={vall} className='imagetraining'
  />
  <CardBody>
    <CardTitle tag="h5">
      Váll
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Edzésről röviden:
    </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a váll izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
  </CardBody>
</Card></div></div>


<div className="row justify-content-center">
<div className='col-md-3 text-center d-flex justify-content-center ass'>
<Card className=''
  style={{
    width: '18rem'
  }}
>
  <img
   
    src={hat} className='imagetraining'
  />
  <CardBody>
    <CardTitle tag="h5">
      Hát
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Edzésről röviden:
    </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a hát izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
  </CardBody>
</Card></div>
<div className='col-md-3 text-center d-flex justify-content-center ass'>
<Card className=''
  style={{
    width: '18rem'
  }}
>
  <img

    src={mell} className='imagetraining'
  />
  <CardBody>
    <CardTitle tag="h5">
      Mell
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Edzésről röviden:    
      </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a mell izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
    
  </CardBody>
</Card></div>

<div className='col-md-3 text-center d-flex justify-content-center ass'>
<Card className=''
  style={{
    width: '18rem'
  }}
>
  <img className='imagetraining'
    src={lab} 
  />
  <CardBody>
    
    <CardTitle tag="h5">
      Láb
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Edzésről röviden:
    </CardSubtitle>
    <CardText>
    Ez az edzésterv kifejezetten a láb izomcsoporta vonatkozik
    </CardText>
    <Button>
      Részletek
    </Button>
  </CardBody>
</Card>

</div>
</div></div>

    </div>

    </>
  )
}
