import React from 'react';
import logo from './../assets/images/logo.png';
import './Menu.css';
import Button from './Button';
//import ButtonLink from './ButtonLink';
export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="ITflix logo"></img>
      </a>
      <Button as="a" className="ButtonLink" href={'/'}>
        Novo vídeo
      </Button>
    </nav>
  );
}
