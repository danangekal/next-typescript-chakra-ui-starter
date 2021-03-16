import {
  Flex, Heading, Link, Text, Code, Img,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import Nav from '../components/nav';

const LinkCustom = styled(Link)`
  margin: 1rem;
  padding: 1.5rem;
  width: 300px;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: left;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      padding="0 0.5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Nav />

      <Flex
        padding="5rem 0"
        flex="1"
        direction="column"
        align="center"
        justify="center"
      >
        <Heading as="h1" size="2xl" marginBottom="5" textAlign="center">
          Welcome to
          {' '}
          <Link href="https://nextjs.org" color="blue.500">
            Next.js
          </Link>
          {' + '}
          <Link href="https://www.typescriptlang.org" color="blue.500">
            Typescript
          </Link>
          {' + '}
          <Link href="https://chakra-ui.com" color="blue.500">
            Chakra UI!
          </Link>
        </Heading>

        <Text as="p" fontSize="xl" textAlign="center">
          Get started by editing
          {' '}
          <Code fontSize="xl">pages/index.tsx</Code>
        </Text>

        <Flex
          maxWidth="800px"
          width={{ sm: '100%' }}
          marginTop="3rem"
          flexWrap="wrap"
          align="center"
          justify="center"
        >
          <LinkCustom href="https://nextjs.org/docs">
            <Heading as="h3" size="xl">
              Documentation &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Find in-depth information about Next.js features and API.
            </Text>
          </LinkCustom>

          <LinkCustom href="https://nextjs.org/learn">
            <Heading as="h3" size="xl">
              Learn &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </LinkCustom>

          <LinkCustom href="https://github.com/vercel/next.js/tree/master/examples">
            <Heading as="h3" size="xl">
              Examples &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </LinkCustom>

          <LinkCustom href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h3" size="xl">
              Deploy &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </LinkCustom>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        height="100px"
        borderTop="1px solid #eaeaea"
        align="center"
        justify="center"
      >
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{ textDecoration: 'none' }}
          isExternal
        >
          Powered by
          <Img
            src="/vercel.svg"
            alt="Vercel Logo"
            marginLeft="0.5rem"
            height="1rem"
          />
        </Link>
      </Flex>
    </Flex>
  );
}
