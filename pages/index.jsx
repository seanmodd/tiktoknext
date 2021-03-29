import React from 'react';
import {
  Heading,
  Box,
  Image,
  Text,
  Wrap,
  Button,
  Flex,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import AppNavigation from '../components/Old/Navigation/AppNavigation';
import { NewFlex, SeanFlex } from '../components/Styled';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Old/Navigation/Footer';

function Feature({ title, desc, ...rest }) {
  return (
    <>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        {...rest}
      >
        <Heading fontWeight="500" fontSize={['15px', '17px', '19px', '25px']}>
          {title}
        </Heading>
        <Text fontSize={['10px', '15px', '15px', '20px']} mt={4}>
          {desc}
        </Text>
      </Box>
    </>
  );
}

const hoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #ff0000',
  transition: 'all .2s ease-out',
  background: '#62ff00',
  color: 'black',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};

const MyButton = ({ children }) => (
  <>
    <Button
      transition="0.5s"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
      bg={mode('gray.100', 'gray.700')}
      py="30px"
      px="20px"
      m="10px"
      _hover={hoverStyle}
      _active={pressedStyle}
    >
      {children}
    </Button>
  </>
);

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Home = () => (
  <AppNavigation width="full" maxWidth="1280px" mx="auto">
    <Image src="./banner.png" borderRadius={20} mb={10} boxShadow="lg" />

    <VStack justify="space-between" spacing="30px">
      <Heading size="2xl">Sean Modd</Heading>
      <NewFlex>
        <Flex w="100%" justify="center">
          <Text fontSize="xl"> Follow me @persiansean</Text>
        </Flex>
      </NewFlex>
      <MyButton>Let's go</MyButton>
    </VStack>
    <Header />
    <HStack
      fontSize={['15px', '17px', '19px', '25px']}
      justify="space-between"
      bg="green.500"
      p="5"
    >
      <VStack bg="yellow.500" pt="5" borderRadius="xl">
        <Heading fontSize={['15px', '17px', '19px', '25px']}>Profile</Heading>
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
      </VStack>
      <VStack bg="blue.500" pt="5" borderRadius="xl">
        <Heading fontSize={['15px', '17px', '19px', '25px']}> Social</Heading>
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
      </VStack>
      <VStack bg="red.500" pt="5" borderRadius="xl">
        <Heading fontSize={['15px', '17px', '19px', '25px']}>Other</Heading>
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
      </VStack>
    </HStack>
  </AppNavigation>
);

export default Home;
