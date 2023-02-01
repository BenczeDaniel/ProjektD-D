import React, { useState } from "react";
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
import {MyModal} from "./RegisterModal";
import {LoginModal} from "./LoginModal";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from "reactstrap";





export const MyNavbar = () => {
  const [loginmodal, setLoginModal] = useState(false);
  const [modal, setModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar expand="sm" dark color="" fixed="top">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink onClick={toggle} to="/" className="nav-link" aria-current="page" href="#">
                <motion.div className="menu"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 >
                  Kezdőlap
                  
                </motion.div>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  onClick={toggle} to="/contact" className="nav-link" href="#">
              <motion.div className="menu"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.1 },
                  }}  
                 >
                  Kapcsolat
                </motion.div>
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink onClick={toggle}  to="/login" className="nav-link " href="#">
              <motion.div className="menu"
                  initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 onClick={()=>setLoginModal(true)} > 
                  Bejelentkezés
                </motion.div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} to="/register" className="nav-link" href="#">
              <motion.div className="menu"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 onClick={()=>setModal(true)} > 
                Regisztráció
                </motion.div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
      {modal && <MyModal modal={modal} setModal={setModal}/>}
      {loginmodal && <LoginModal loginmodal={loginmodal} setLoginModal={setLoginModal}/>}


    </div>
  );  
};
