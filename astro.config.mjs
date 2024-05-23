import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],

  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'media.graphassets.com',
    }],
  },
});