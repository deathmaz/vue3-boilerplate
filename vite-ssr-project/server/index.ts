import express from 'express';
import {
  createPageRenderer,
} from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

async function startServer() {
  const app = express();

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    // eslint-disable-next-line
    const vite = require('vite');
    viteDevServer = await vite.createServer({
      root,
      server: {
        middlewareMode: 'ssr',
      },
    });
    app.use(viteDevServer.middlewares);
  }

  const renderPage = createPageRenderer({
    viteDevServer,
    isProduction,
    root,
  });
  // eslint-disable-next-line
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    const pageContextInit = {
      url,
    };
    const pageContext = await renderPage(pageContextInit);
    const {
      httpResponse,
    } = pageContext;
    if (!httpResponse) {
      return next();
    }
    const {
      body, statusCode, contentType,
    } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  // eslint-disable-next-line
  console.log(`Server running at http://localhost:${port}`);
}

startServer();
