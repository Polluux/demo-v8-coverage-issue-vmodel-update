<template>
  <div>
    <div>test</div>
    <customElement
      v-model:samenameproperty="data"
      @update:othernameproperty.stop
    />
    <div>test</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref('');
</script>