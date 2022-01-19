import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import axios from 'axios';

export async function onBeforeRender(pageContext:PageContextBuiltIn) {
  const { userId } = pageContext.routeParams;
  const user = await axios.get(`https://swapi.dev/api/people/${userId}`);
  const pageProps = {
    user: user.data,
  };
  return {
    pageContext: {
      pageProps
    }
  };
}
