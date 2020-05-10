import styled from 'styled-components';

export const Container = styled.div`
  background: #151919;
  margin-top: 10px;
  border-radius: 49ex;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 66px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 64px;
      border-radius: 50%;
      margin-right: 20px;
    }

    a {
      font-weight: bold;
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;

    a {
      margin-left: 20px;
    }
  }
`;
