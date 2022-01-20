#!/bin/bash

curDir=$(pwd)

yarn install \
  && cd "${curDir}/packages/vite-component-library" \
  && yarn run build
