import React from 'react';

// Components
import { Heading, Box, Image, Text, Wrap } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { GoogleFonts } from 'next-google-fonts';
import AppNavigation from '../components/Old/Navigation/AppNavigation';
import NavCard from '../components/Old/Home/NavCard';
import { seandiv } from './_app.js';
import { SeanFlex } from '../components/Styled';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: Poppins;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Home = () => (
  <AppNavigation width="full" maxWidth="1280px" mx="auto">
    <Image src="./banner.png" borderRadius={20} mb={10} boxShadow="lg" />
    <Heading size="2xl">Sean Modd</Heading>
    <Heading size="lg" mt="10px">
      Follow me @persiansean
    </Heading>
    <Box mt={10}>
      <Text fontSize="xl">What's up. I'm SeanModd</Text>
    </Box>
    <seandiv />

    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
    <Heading className="seandiv">HERE I AM</Heading>
  </AppNavigation>
);

export default Home;
