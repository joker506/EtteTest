<script setup>
const emit = defineEmits(["customClickBtn"]);
const handlerClick = () => {
  emit("customClickBtn", true);
};
</script>
<template>
  <div>
    <v-btn
      append-icon="mdi-plus"
      variant="outlined"
      color="#5865f2"
      @click="handlerClick"
    >
      Add ...
    </v-btn>
  </div>
</template>
<style lang="scss" scoped>
</style>
