import React from 'react';

// Components
import { Box, Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [tabletScreen] = useMediaQuery('(max-width: 1400px)');

  return (
    <Text w="100%" fontSize="sm" align="center" justify="center" mb={3}>
      Copyright &copy; {new Date().getFullYear()} Sean Modd. All Rights
      Reserved.
    </Text>
  );
};

export default Footer;
