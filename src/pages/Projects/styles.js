import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 10px;

  h1,
  h2 {
    margin-top: 0;
    font-size: 50px;
  }
`;

export const VerticalTimelineContent = styled.div`
  h1 {
    font-size: 40px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    img {
      max-width: 475px;
    }
  }
`;
