import React from 'react';
import {
  ChakraProvider,
  ColorModeProvider,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { GoogleFonts } from 'next-google-fonts';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import customTheme from '../styles/theme';
import seo from '../seo.config';
import theme from '../theme';
import '../styles/globals.css';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  );
};
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: true,
        }}
      >
        <Global
          styles={css`
            #__next {
              height: 100%;
            }
          `}
        />
        <GlobalStyle>
          <seanTheme />
    
            <Component {...pageProps} />
   
        </GlobalStyle>
      </ColorModeProvider>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
    </ChakraProvider>
  );
}

export default MyApp;
