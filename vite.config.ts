 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';

interface AtRule {
  name: string;
  remove: () => void;
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        {
          postcssPlugin: 'strip-charset',
          AtRule: {
            charset: (atRule: AtRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
