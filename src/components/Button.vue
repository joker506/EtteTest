<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Add",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
const { title } = props;
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
      :disabled="isDisabled"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

