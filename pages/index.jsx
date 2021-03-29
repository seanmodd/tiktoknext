import React from 'react';

// Components
import { Heading, Box, Image, Text, Wrap } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import AppNavigation from '../components/Navigation/AppNavigation';
import NavCard from '../components/Home/NavCard';

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
  </AppNavigation>
);

export default Home;
