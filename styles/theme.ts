import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: ({ colorMode }: StyleFunctionProps) => ({
      body: {
        color: colorMode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        background:
          colorMode === 'dark'
            ? 'linear-gradient(to bottom, transparent, rgb(0, 0, 0)) rgb(0, 0, 0)'
            : 'linear-gradient(to bottom, transparent, rgb(255, 255, 255)) rgb(214, 219, 220)',
      },
      'next-logo': {
        position: 'relative',
      },
      'vercel-logo': {
        filter: colorMode === 'dark' ? 'invert(1)' : '',
      },
      card: {
        padding: '1rem 1.2rem',
        borderRadius: '12px',
        background: 'rgba(180, 185, 188, 0)',
        border: '1px solid rgba(131, 134, 135, 0)',
        transition: 'background 200ms, border 200ms',
        span: {
          display: 'inline-block',
          transition: 'transform 200ms',
        },
        h2: {
          fontWeight: '600',
          marginBottom: '0.7rem',
        },
        p: {
          margin: 0,
          opacity: '0.6',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          maxWidth: '30ch',
        },
      },
    }),
  },
});

export default theme;
