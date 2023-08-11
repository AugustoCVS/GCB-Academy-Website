import type { Preview } from "@storybook/react";

import '../src/styles/globals.css'
import 'react-alice-carousel/lib/alice-carousel.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
