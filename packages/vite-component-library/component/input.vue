<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
    }
  },
});
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" @input="$emit('input', $event)" />
  </div>
</template>
