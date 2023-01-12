import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const LoginModal=({loginmodal,setLoginModal}) => {
  

  const toggle = () => setLoginModal(!loginmodal);

  return (
    <div>
      <Modal isOpen={loginmodal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Bejelentkezés</ModalHeader>
        <ModalBody>
            <label for="username"><b>Felhasználónév:</b></label><br />
            <input type="text" placeholder="Írd be a felhasználó neved" name="username" required/> <br />
            <label for="password"><b>Jelszó:</b></label><br />
            <input type="text" placeholder="Írd be a jelszavad" name="password" required/> <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Bejelentkezés
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Mégse
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
