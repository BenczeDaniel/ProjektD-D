import React from 'react'   
import bg from '../background/bg.mp4'
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

        <Card className='kinezet row-col-md-6'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
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
</Card>
<Card className='kinezet row-col-md-4'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
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
</Card>
<Card className='kinezet row-col-md-4'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
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
</Card>
<Card className='kinezet row-col-md-4'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
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
</Card>
<Card className='kinezet row-col-md-4'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
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
</Card>
<Card className='kinezet row-col-md-4'
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Láb
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    </div>

    </>
  )
}
