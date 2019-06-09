import styled from 'styled-components'
import { darken } from 'polished'

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${darken(0.03, '#fff')};
  color: #333;
  font-family: 'Lato';
`
