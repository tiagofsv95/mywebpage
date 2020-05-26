import React from 'react';

import { Container } from './styles';
import ParticlesBackground from '../../components/ParticlesBackground';

function page404() {
  return (
    <>
      <ParticlesBackground />
      <Container>
        <h1>Eror 404: Page not found!</h1>
      </Container>
    </>
  );
}

export default page404;
