import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: white;
}`;

export const Divider = styled.div`
	width: 100%;
	height: ${({ height }) => (height ? height : '3px')};
	
`
export const NavBar = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ height }) => (height ? height : '80px')};
	border-bottom: ${({ bb }) => (bb ? bb : '2px solid white')};
`

export default GlobalStyle;