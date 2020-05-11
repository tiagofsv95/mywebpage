import React from 'react';

import Background from '../../components/Background';
import { Container } from './styles';

function About() {
  return (
    <>
      <Background />
      <Container>
        <h1>Sobre</h1>
        <p>
          Meu nome é Tiago Felipe, tenho inúmeros apelidos, entre eles Tiggs,
          Tifé, Titi, Javas, entre outros. Tenho 25 anos, sou de Belo Horizonte
          - Minas Gerais uai.
        </p>
        <p>
          Sou desenvolvedor full-stack, atualmente trabalho em desenvolvimento
          com um framework interno que mota uma tela através de uma estrutura
          JSON, com funções de controle em JavaScript e backend e comunicação
          com banco Oracl SQL atraves do PHP.
        </p>
        <p>
          Atualmente estudo novas tecnologias envolvendo o ecossistema do
          JavaScript e TypeScript, como NodeJS, React e React Native fazendo
          pequenas aplicações diversas e fazendo cursos onlines diversos.
        </p>
      </Container>
    </>
  );
}

export default About;
