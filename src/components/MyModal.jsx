import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const MyModal=({modal,setModal}) => {
  

  const toggle = () => setModal(!modal);

  return (
    <div className='mymodal bg-light'>
      <Modal className='regmodal' isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader className='reg1' toggle={toggle}>Regisztráció</ModalHeader>
        <ModalBody className='reg2'>A mezők kitőltése kötelező!
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Regisztrálok
          </Button>{' '}
          <Button color="danger" onClick={toggle}>
            Bezárás
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
