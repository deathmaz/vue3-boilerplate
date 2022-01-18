<template>
  <h1>Welcome</h1>
  <LibInput :title="'This input comes from design system'" />
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import { LibInput } from 'vite-component-library';
</script>
