#!/bin/bash

curDir=$(pwd)

npx lerna bootstrap --hoist
cd "${curDir}/packages/vite-component-library"
npm ci
npm run build
