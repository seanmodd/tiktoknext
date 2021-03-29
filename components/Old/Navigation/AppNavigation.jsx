import React from 'react';

// Components
import { Box, Text, useColorMode } from '@chakra-ui/react';
import SideNav from './SideNav';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Header />

      <Box>
        <SideNav
          // display={['none', null, 'block']}
          display={['none', 'none', 'none', 'block']}
          maxWidth="18rem"
          width="full"
        />
        <Box
          // pl={[0, null, '18rem']}
          // pl={['none', 'none', '8rem', '10rem']}
          pr={['1em', '1em', '5em', '10em']}
          pl={['1em', '1em', '7em', '15em']}
          marginTop="4rem"
        >
          <Box as="section" minHeight="calc(90vh - 6rem)" maxHeight="100vh">
            <Box py="2em" {...rest}>
              {children}
            </Box>
          </Box>
        </Box>
        <Text position="absolute" bottom="-100" width="100%" align="center">
          Copyright &copy; {new Date().getFullYear()} Sean Modd. All Rights
          Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default AppNavigation;
