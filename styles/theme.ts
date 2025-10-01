import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  globalCss: {
    body: {
      color: { _light: 'black', _dark: 'white' },
      bg: {
        _light:
          'linear-gradient(to bottom, transparent, white) rgb(214, 219, 220)',
        _dark: 'linear-gradient(to bottom, transparent, black) black',
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
