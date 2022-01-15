<script setup lang="ts">
defineProps<{title?: string}>()
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" @input="$emit('input', $event)" />
  </div>
</template>
