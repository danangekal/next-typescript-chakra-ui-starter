import { Box, Code, Heading, Link, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="0 0.5rem"
      className={inter.className}
    >
      <Nav />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex="1"
        padding="5rem 0"
      >
        <Heading as="h1" size="2xl" marginBottom="5" textAlign="center">
          Welcome to{' '}
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
          Get started by editing <Code fontSize="xl">pages/index.tsx</Code>
        </Text>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          maxWidth="800px"
          width={{ sm: '100%' }}
          marginTop="3rem"
        >
          <Link
            href="https://nextjs.org/docs"
            margin="1rem"
            padding="1.5rem"
            width="300px"
            flexGrow="1"
            flexShrink="0"
            textAlign="left"
            border="1px solid #eaeaea"
            borderRadius="10px"
            display="block"
            _hover={{
              color: '#0070f3',
              borderColor: '#0070f3',
              textDecoration: 'none',
            }}
          >
            <Heading as="h3" size="xl">
              Documentation &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Find in-depth information about Next.js features and API.
            </Text>
          </Link>

          <Link
            href="https://nextjs.org/learn"
            margin="1rem"
            padding="1.5rem"
            width="300px"
            flexGrow="1"
            flexShrink="0"
            textAlign="left"
            border="1px solid #eaeaea"
            borderRadius="10px"
            display="block"
            _hover={{
              color: '#0070f3',
              borderColor: '#0070f3',
              textDecoration: 'none',
            }}
          >
            <Heading as="h3" size="xl">
              Learn &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples"
            margin="1rem"
            padding="1.5rem"
            width="300px"
            flexGrow="1"
            flexShrink="0"
            textAlign="left"
            border="1px solid #eaeaea"
            borderRadius="10px"
            display="block"
            _hover={{
              color: '#0070f3',
              borderColor: '#0070f3',
              textDecoration: 'none',
            }}
          >
            <Heading as="h3" size="xl">
              Examples &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            margin="1rem"
            padding="1.5rem"
            width="300px"
            flexGrow="1"
            flexShrink="0"
            textAlign="left"
            border="1px solid #eaeaea"
            borderRadius="10px"
            display="block"
            _hover={{
              color: '#0070f3',
              borderColor: '#0070f3',
              textDecoration: 'none',
            }}
          >
            <Heading as="h3" size="xl">
              Deploy &rarr;
            </Heading>
            <Text as="p" fontSize="lg">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100px"
        borderTop="1px solid #eaeaea"
      >
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel Logo" width={70} height={70} />
        </Link>
      </Box>
    </Box>
  );
}
