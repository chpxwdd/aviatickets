<template>
  <div></div>
</template>

<script setup>
const props = defineProps({
  flights: {
    type: Array,
    required: true,
  },
  search: {
    type: Object,
    required: true,
  },
});
const { flights, search } = props;
</script>

<style scoped></style>
