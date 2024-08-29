<template>
  <div>
    <div>test</div>
    <customElement
      v-model:samenameproperty="data"
      @update:samenameproperty.stop
    />
    <div>test</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Note: Change line 6 > @update:samenameproperty.stop
// Into > @update:othernameproperty.stop
// To see expected result

const data = ref('');
</script>