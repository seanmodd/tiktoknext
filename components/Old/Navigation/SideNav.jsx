import React from 'react';

// Components
import {
  useColorMode,
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  VStack,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';

// Icons
import {
  AiFillHome as Home,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlinePaperClip as Resume,
} from 'react-icons/ai';
import { IoLogoTwitter, IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact, EditIcon as Credits } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from 'react-icons/md';
import Link from 'next/link';
import { ComponentLink } from './NavLink';

const MyLink = ({ children, icon }) => (
  <Flex align="center" padding={1}>
    <Box as={icon} mr={3} w="24px" />
    <Text fontWeight="bold">{children}</Text>
  </Flex>
);

const PageLinks = () => (
  <Stack spacing={0} marginBottom={8}>
    <Center>
      <VStack>
        <Image
          borderRadius="full"
          boxSize="200px"
          boxShadow="md"
          src="/headshot.png"
          alt="Sean Modd"
          mb="5px"
        />
        <Heading size="sm">Sean Modd</Heading>
        <Text size="sm">@persiansean</Text>
      </VStack>
    </Center>
    <br />
    <Divider />
    <br />
    <MyLink icon={Home}>
      <Link href="/">Home</Link>
    </MyLink>
    <MyLink icon={Person}>
      <Link href="/myIndex">About</Link>
    </MyLink>
    <MyLink icon={Contact}>
      <Link href="/upload">Contact</Link>
    </MyLink>
    <br />
    <Divider />
    <br />
    <Heading size="sm" mb={5}>
      Other Links
    </Heading>
    <MyLink icon={GitHub}>
      <Link href="https://github.com/seanmodd">Home</Link>
    </MyLink>
    <MyLink icon={IoLogoTwitter}>
      <Link href="https://twitter.com/persiansean">Twitter</Link>
    </MyLink>
    <br /> <br /> <br />
  </Stack>
);

const SideNav = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="0"
      right="0"
      {...props}
    >
      <Box
        top="4em"
        position="relative"
        overflowY="auto"
        borderRightWidth="1px"
        mb={6}
      >
        <Box>
          <Flex
            justify="space-between"
            direction="column"
            height="calc(100vh - 4rem)"
            fontSize="sm"
            p="6"
            pb="3em"
          >
            <PageLinks />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
