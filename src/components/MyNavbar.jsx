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
                <motion.span
                 initial={{ opacity: 0.6 }}
                 whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}   whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  Kezdőlap
                </motion.span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link" href="#">
                Árak
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/contact" className="nav-link" href="#">
                Kapcsolat
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink to="login" className="nav-link " href="#">
                Bejelentkezés
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="register" className="nav-link" href="#">
                Regisztráció
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
