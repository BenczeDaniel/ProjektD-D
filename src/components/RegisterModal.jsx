import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const MyModal=({modal,setModal}) => {
  

  const toggle = () => setModal(!modal);

  return (
    <div className='mymodal bg-light'>
      <Modal className='regmodal' isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader className='reg1' toggle={toggle}>Regisztráció</ModalHeader>
        <ModalBody className='reg2'>A mezők kitőltése kötelező! <br /> <br /> 

        <label className='regpanel2' for="username"><b>Felhasználónév:</b></label><br />
            <input className='regpanel' type="text" placeholder="Írd be a felhasználó neved" name="username" required/> <br />
            <label className='regpanel2' for="password"><b>Jelszó: <br /> </b></label><br />
            <p>* Olyan jelszót válassz amelyet még nem használtál más felületen, a visszaélések elkerülésének érdekében (az ilyen visszaélésekkel kapcsolatosan nem áll módunkban felelősséget vállalni)!</p>
            <input className='regpanel' type="password" placeholder="Írd be a jelszavad" name="password" required/> <br />
            <label className='regpanel2' for="Email:"><b>E-mail:</b></label><br />
            <input className='regpanel' type="text" placeholder="Írd be az Email-címet" name="email" required/> <br />

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
