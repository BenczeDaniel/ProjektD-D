import React, { useState } from "react";
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

export const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="sm" dark color="" fixed="top">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link" aria-current="page" href="#">
                <motion.div className="mx-4"
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
              <NavLink to="/about" className="nav-link" href="#">
              <motion.div className="mx-4"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 >
                 Árak
                </motion.div>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/contact" className="nav-link" href="#">
              <motion.div className="mx-4"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 >
                  Kapcsolat
                </motion.div>
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink to="login" className="nav-link " href="#">
              <motion.div className="mx-4"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 >
                  Bejelentkezés
                </motion.div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="register" className="nav-link" href="#">
              <motion.div className="mx-4"
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 2,
                    transition: { duration: 0.2 },
                  }}  
                 >
                  Regisztráció
                </motion.div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
