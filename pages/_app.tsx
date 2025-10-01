import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { system } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await MyApp.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
