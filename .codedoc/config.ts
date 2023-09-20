
import { configuration } from '@codedoc/core';

import { theme } from './theme';
import { formulaPlugin } from '@codedoc/core/components';


export const config = /*#__PURE__*/configuration({
  plugins: [
    formulaPlugin
  ],
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/migzpogi.github.io'      // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Migzpogi.github.io'          // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'migzpogi',                   // --> your github username (where your repo is hosted)
      repo: 'migzpogi.github.io',         // --> your github repo name
    }
  },
});
