import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaPlay } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

import ParticlesBackground from '../../components/ParticlesBackground';
import { Container, VerticalTimelineContent } from './styles';

import GithubExplore from '../../assets/github-explore.gif';
import GithubSearch from '../../assets/github-search.gif';

function Projects() {
  return (
    <>
      <ParticlesBackground />
      <Container>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--projects"
            contentStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaReact />}
          >
            <VerticalTimelineContent>
              <h1 className="vertical-timeline-element-title">
                GitHub Explorer
              </h1>

              <p>
                Projeto feito durante o bootmcamp GoStack da rocketSeat, que
                lista repositórios do github, salva no localStorage os
                repositorios selecionados, caso ele exista. Além disso exibe
                algumas informações sobre o repositório e também lista as issues
                abertas.
              </p>

              <p>... Implementado Dark theme</p>

              <p style={{ fontWeight: 'bold' }}>Feito com Typescript</p>

              <a href="https://github-explorer-663fd.web.app/">
                <img src={GithubExplore} alt="GithubExplore" />
              </a>
            </VerticalTimelineContent>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--projects"
            contentStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaReact />}
          >
            <VerticalTimelineContent>
              <h1 className="vertical-timeline-element-title">GitHub Search</h1>

              <p>
                Projeto feito em um processo seletivo que visa consumir a api do
                github para buscar usuários e exibir informações do mesmo.
              </p>

              <p>... Implementado Dark theme</p>

              <p style={{ fontWeight: 'bold' }}>Feito com Typescript</p>

              <a href="https://githubsearch-afda7.web.app/">
                <img src={GithubSearch} alt="GithubSearch" />
              </a>
            </VerticalTimelineContent>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--projects"
            contentStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2017 - atualmente"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<MdWork />}
          >
            <VerticalTimelineContent>
              <h1 className="vertical-timeline-element-title">Teknisa</h1>

              <p>Meu segundo estágio e meu primeiro emprego.</p>
            </VerticalTimelineContent>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--projects"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaPlay />}
          />
        </VerticalTimeline>
      </Container>
    </>
  );
}

export default Projects;
