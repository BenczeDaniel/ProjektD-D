import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export const ModalDetails=({modal,setModal,description})  =>{
 



  const toggle = () => setModal(!modal);


 
  return (

    
  
    <div >
      <Modal  isOpen={modal} toggle={toggle}>
        <ModalHeader className='text-white ' toggle={toggle}>Videó az edzésről!</ModalHeader>
        <ModalBody className='videotext '  > 
        
        <iframe className='videoborder' id="video" width="500" height="350"
                                    src={description}
                                    
 
                                    frameborder="0" allowfullscreen>
                            </iframe>

   
        </ModalBody > 

      </Modal>
    </div>
  );
}
