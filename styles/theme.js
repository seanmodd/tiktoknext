import { theme as chakraTheme, extendTheme, Flex } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const NewFlex = ({ children }) => (
  <>
    <SeanFlex
      d="flex"
      w={['250px', '300px', '350px', '400px']}
      bg={mode('gray.100', 'gray.700')}
    >
      {children}
    </SeanFlex>
  </>
);
const fonts = {
  ...chakraTheme.fonts,
  body: 'Poppins',
  heading: 'Poppins',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  lg: '62em',
});

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
