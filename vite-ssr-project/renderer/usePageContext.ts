// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import {
  inject,
} from 'vue';
import type {
  App,
} from 'vue';
import {
  PageContext,
} from './types';

// TODO: check if the rule should be changed instead of disabling
// eslint-disable-next-line
const key = Symbol();

function usePageContext() {
  const pageContext = inject(key);
  return pageContext;
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext);
}

export {
  usePageContext,
};
export {
  setPageContext,
};
