<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { LibInput, LibHeadline } from 'vite-component-library';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const HelloWorld = defineAsyncComponent(
  () => import('./components/HelloWorld.vue')
);
const color = ref('red');
</script>

<template>
  <button type="button" @click="color = 'black'">change color</button>
  <h2 class="headline">Some text</h2>
  <LibHeadline text="some text" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <LibInput :title="'hello'" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.headline {
  color: v-bind('color');
}
</style>
