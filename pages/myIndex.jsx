import React from 'react';
import { Heading, Text, Button, VStack } from '@chakra-ui/react';

import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import Link from 'next/link';

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

const Home = () => (
  <>
    <VStack spacing={40}>
      <Heading size="2xl">Sean Modd</Heading>
      <Text fontSize="xl"> Follow me @persiansean</Text>
      <MyButton>
        <Link href="/#">Let's go home</Link>
      </MyButton>
      <Button colorScheme="whatsapp">Click here</Button>
    </VStack>
  </>
);

export default Home;
