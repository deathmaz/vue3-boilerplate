import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export function onBeforeRender(pageContext:PageContextBuiltIn) {
  const { userId } = pageContext.routeParams;
  const pageProps = {
    user: {
      id: userId,
      name: 'John Doe',
    }
  };
  return {
    pageContext: {
      pageProps
    }
  };
}

export const passToClient = ['pageProps', 'urlPathname'];
