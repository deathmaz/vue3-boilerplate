# Vue3 boilerplate

Includes examples of vue3 projects organized in monorepo. Uses [yarn](https://yarnpkg.com/) as
package manager.


**Folder structure**:

- `vite-project` - SPA built with [vite](https://vitejs.dev/)
- `vite-project-ssr` - SSR project built with [vite-plugin-ssr](https://vite-plugin-ssr.com/)
- `packages/vite-component-library` - an example of component library built with [vite](https://vitejs.dev/)
- `setup.sh` - installs `node_modules` and builds `vite-component-library`

To update `node_modules` run:

```sh
yarn upgrade-interactive
```
