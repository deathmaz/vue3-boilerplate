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
import {
  LibInput,
} from 'vite-component-library';
import Counter from './Counter.vue';
</script>
