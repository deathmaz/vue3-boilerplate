<template>
  <div>
    <h1>{{user.name}}</h1>
    <h2>{{user.id}}</h2>
  </div>
</template>

<script setup lang="ts">
  defineProps(['user'])
</script>
