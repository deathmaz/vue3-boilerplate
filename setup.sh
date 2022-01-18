#!/bin/bash

curDir=$(pwd)
cd "${curDir}/packages/vite-component-library"
npm ci
npm run build
cd "${curDir}"
npx lerna bootstrap
