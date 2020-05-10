import React, { useState, useEffect } from 'react';

import { useTransition, animated, config } from 'react-spring';
import Background from '../../components/Background';
import { Container } from './styles';

const emoji = [
  { id: 0, emoji: '👨🏻‍💻' },
  { id: 1, emoji: '🖥️' },
  { id: 2, emoji: '👾' },
  { id: 3, emoji: '😄' },
  { id: 4, emoji: '✌️' },
];

function Main() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(emoji[index], (item) => item.id, {
    from: { position: 'absolute', marginTop: 170, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    function setEmoji() {
      setInterval(() => setIndex((state) => (state + 1) % 5), 2000);
    }

    setEmoji();
  }, []);

  return (
    <>
      <Background />
      <Container>
        <h1>Olá,</h1>
        <h1>Meu nome é Tiago Felipe.</h1>
        <h2>E eu sou Desenvolvedor.</h2>
        {transitions.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={{
              ...props,
              fontSize: 60,
            }}
          >
            {item.emoji}
          </animated.div>
        ))}
      </Container>
    </>
  );
}

export default Main;
