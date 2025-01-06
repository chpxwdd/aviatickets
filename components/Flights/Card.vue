<template>
  <div></div>
</template>

<script setup>

const props = defineProps({
  flight: {
    type: Object,
    required: true,
  },
});
const { flight } = props;
</script>

<style lang="scss" scoped></style>
