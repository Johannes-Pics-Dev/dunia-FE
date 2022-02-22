import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Navbar,Container,Nav,Offcanvas,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Video from './Video';

export default function Header(props) {
    return (
        <header>
    <Navbar  className='absolute-nav' expand={false}>
        <Container fluid>
          <Navbar.Brand href="#home">
              <img src={logo} className="img-fluid logo-img" />
          </Navbar.Brand>
          
        </Container>
      </Navbar>
      <Video/>
      </header>
    );
}

 