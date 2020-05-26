import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  BsFillHouseFill,
  BsPersonFill,
  BsFileEarmarkCode,
} from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <a href="mailto:tiagofsv95@gmail.com">
            <img
              src="https://avatars0.githubusercontent.com/u/42195093?s=460&u=187508d157e443ca1eb8b9e212e30c3c03c08bd5&v=4"
              alt="Tiago"
            />
          </a>
          <Link to="/">
            <BsFillHouseFill color="#fff" size={28} />
          </Link>
          <Link to="/about">
            <BsPersonFill color="#fff" size={28} />
          </Link>
          <Link to="/projects">
            <BsFileEarmarkCode color="#fff" size={28} />
          </Link>
        </nav>

        <aside>
          <a href="https://github.com/tiagofsv95">
            <FaGithub color="#fff" size={28} />
          </a>
          <a href="https://www.linkedin.com/in/tiago-felipe-sanches-vieira-457764139/">
            <FaLinkedinIn color="#fff" size={28} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5531994623975&text=Ol%C3%A1,%20Tiago!">
            <IoLogoWhatsapp color="#fff" size={28} />
          </a>
        </aside>
      </Content>
    </Container>
  );
}
