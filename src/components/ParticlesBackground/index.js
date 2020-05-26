import React from 'react';
import Particles from 'react-particles-js';

import Icons from '../../assets/icons/index';

function ParticlesBackgroud() {
  return (
    <Particles
      style={{ position: 'absolute', width: '100vh', height: '100vh' }}
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['image'],
            image: [
              {
                src: Icons.ReactIcon,
                height: 20,
                width: 23,
              },
              {
                src: Icons.CodeIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.CSSIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.GithubIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.HTML5Icon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.JSIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.NodeIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.NodeJsIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.WindowsIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.TypescriptIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.VSCodeIcon,
                height: 20,
                width: 20,
              },
              {
                src: Icons.DockerIcon,
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default ParticlesBackgroud;
