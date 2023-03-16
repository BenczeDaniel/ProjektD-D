import React, { useState } from "react";
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";
import { MyModal } from "./RegisterModal";
import { LoginModal } from "./LoginModal";
import { useNavigate } from 'react-router-dom'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from "reactstrap";





export const MyNavbar = ({ loggedInUser, setLoggedInUser }) => {

  const [loginmodal, setLoginModal] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log("MyNavbar", loggedInUser)
  const handleProfile = () => {
    console.log("teszt", loggedInUser.username)
    navigate("/profiles")

  }

 loggedInUser?.role && loggedInUser.role == "admin" && console.log("adminvagyok")

  return (
    <div>
      <Navbar expand="sm" dark color="">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
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

            {loggedInUser?.username && <NavItem>
              <NavLink onClick={toggle} to="/prices" className="nav-link" href="#">
                <motion.div className="menu"
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 2,
                    transition: { duration: 0.1 },
                  }}
                >
                  Árak
                </motion.div>
              </NavLink>
            </NavItem>}

            {loggedInUser?.username && <NavItem>
              <NavLink onClick={toggle} to="/training" className="nav-link" href="#">
                <motion.div className="menu"
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 2,
                    transition: { duration: 0.1 },
                  }}
                >
                  Edzés tervek
                </motion.div>
              </NavLink>
            </NavItem>}

            {!loggedInUser?.username && <NavItem>
              <NavLink onClick={toggle} to="/contact" className="nav-link" href="#">
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
            </NavItem>}
          </Nav>
          {loggedInUser?.role && loggedInUser.role == "admin" && <Nav navbar>
              <NavItem>
                <NavLink onClick={toggle} to="/admin" className="nav-link " href="#">
                  <motion.div className="menu"
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    Admin felület
                  </motion.div>
                </NavLink>
              </NavItem>

            </Nav>}

          {!loggedInUser?.username && <Nav navbar>
            <NavItem>
              <NavLink onClick={toggle} to="/login" className="nav-link " href="#">
                <motion.div className="menu"
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => setLoginModal(true)} >
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
                  onClick={() => setModal(true)} >
                  Regisztráció
                </motion.div>
              </NavLink>
            </NavItem>
          </Nav>}

          {loggedInUser?.username && <Nav navbar>
            <NavItem>
              <NavLink onClick={toggle} to="/" className="nav-link " href="#">
                <motion.div className="menu"
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => setLoggedInUser({})} >
                  Kijelentkezés
                </motion.div>
              </NavLink>
            </NavItem>
            <NavItem className="avatar">
              <p className="profil3">Saját Profil</p>
              <img style={{ width: "80px", marginRight: "10px" }} src={loggedInUser.avatar == "" ? "img/user.png" : loggedInUser.avatar} alt="Avatar" onClick={handleProfile} />
            </NavItem>

            </Nav>}
            
        </Collapse>
      </Navbar>






      {modal && <MyModal modal={modal} setModal={setModal} setLoginModal={setLoginModal} loginmodal={loginmodal} />}
      {loginmodal && <LoginModal loginmodal={loginmodal} setLoginModal={setLoginModal} setLoggedInUser={setLoggedInUser} />}


    </div>
  );
};
