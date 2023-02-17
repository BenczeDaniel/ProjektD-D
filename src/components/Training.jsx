import React, { useState } from 'react'
import bg from '../background/bg.mp4'
import { ModalDetails } from './ModalDetails'
import { getTrainings } from './getData'
import { useQuery } from 'react-query'


import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText } from 'reactstrap'


export const Training = () => {
  const [description,setdescription] = useState("")
  const [modal, setModal] = useState(false);
  const { data, status } = useQuery('Tranings', getTrainings)
  const toggle = (desc) => {
    setModal(!modal);
    setdescription(desc)
  }
  status == "success" && console.log(data.data)

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
           
              {status == 'success' && data.data.map(obj =>
                 <div className='col-md-4  text-center d-flex justify-content-center ass'>
                <Card className=''
                  style={{
                    width: '18rem'
                  }}
                >
                  <img

                    src={"img/"+obj.img} className='imagetraining' alt='kép'
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {obj.title}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {obj.subtitle}
                    </CardSubtitle>
                    <CardText>
                      {obj.details}
                    </CardText>
                    <Button onClick={()=>toggle(obj.description)}>
                      Részletek
                    </Button>
                  </CardBody>
                </Card></div>
              )}
            </div>
            <ModalDetails modal={modal} setModal={setModal} description={description}/>

          
          </div>

      </div>

    </>
  )
}
