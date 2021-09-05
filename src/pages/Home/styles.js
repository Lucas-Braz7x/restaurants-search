import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

`;

export const ContainerSearch = styled.aside`
  background: ${(props) => props.theme.colors.background};
  max-width: 360px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 16px;
  gap: 16px;

  background: #ffffff;
`;

export const Logo = styled.img`
`;

export const ContainerMap = styled.div`
  background: black;
`
