import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const LoginModal=({loginmodal,setLoginModal}) => {
  

  const toggle = () => setLoginModal(!loginmodal);

  return (
    <div>
      <Modal isOpen={loginmodal} fade={false} toggle={toggle}>
        <ModalHeader className='reg1' toggle={toggle}>Bejelentkezés</ModalHeader>
        <ModalBody className='reg2'>A bejelentkezési adatokat , kérem helyesen adja meg ! <br /> <br /> <br />

            <label className='logpanel2' for="username"><b>Felhasználónév:</b></label><br />
            <input className='logpanel' type="text" placeholder="Írd be a felhasználó neved" name="username" required/> <br />
            <label className='logpanel2' for="password"><b>Jelszó:</b></label><br />
            <input  className='logpanel' type="text" placeholder="Írd be a jelszavad" name="password" required/> <br />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Bejelentkezés
          </Button>{' '}
          <Button color="danger" onClick={toggle}>
            Mégse
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
