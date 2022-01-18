#!/bin/bash

curDir=$(pwd)

npx lerna clean -y && npx lerna bootstrap --hoist
cd "${curDir}/packages/vite-component-library"
npm run build
