<template>
  <div>
    <h3>Search form</h3>
  </div>
  <div class="flex gap-2">
    <UFormGroup label="Origin" required size="xl">
      <UInput placeholder="origin" icon="mdi:airplane-takeoff" />
    </UFormGroup>

    <UButton size="sm" icon="mdi:refresh" class="mt-8 mb-2" color="gray" />

    <UFormGroup label="Destination" required size="xl">
      <UInput placeholder="destination" icon="mdi:airplane-landing" />
    </UFormGroup>

    <UFormGroup label="Date from" required size="xl">
      <UInput placeholder="do-from" icon="mdi:calendar" />
    </UFormGroup>

    <UFormGroup label="Date to" required size="xl">
      <UInput placeholder="do-to" icon="mdi:calendar" />
    </UFormGroup>

   
  </div>
</template>

<script setup>
import { format } from "date-fns";

const date = ref(new Date());
</script>

<style lang="scss" scoped>
.u-input input {
  @apply border-none border-0;
}

.fake-input {
  @apply border;
}

</style>
