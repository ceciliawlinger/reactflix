import React from 'react';
import logo from './../assets/images/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';
import Button from './Button';
//import ButtonLink from './ButtonLink';
export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="ITflix logo"></img>
      </Link>
      <Button as={Link} className="ButtonLink" to={'/cadastro/video'}>
        Novo vídeo
      </Button>
    </nav>
  );
}
