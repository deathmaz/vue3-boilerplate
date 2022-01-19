<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>The height is: {{ user.height }}</p>
    <p>The mass is: {{ user.mass }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['user']);
</script>
