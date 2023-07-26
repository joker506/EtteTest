<script setup>
import { defineProps, defineEmits, toRef, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const { modelValue } = toRefs(props);

const emit = defineEmits(["emitParams", "update:modelValue"]);

const someText = toRef("");
const openAlert = toRef(false);

const closeModal = () => {
  if (someText.value && !openAlert.value) {
    openAlert.value = true;
  } else if (someText.value && openAlert.value) {
    emit("update:modelValue", false);
    openAlert.value = false;
    someText.value = "";
  } else {
    emit("update:modelValue", false);
  }
};
const saveInModal = () => {
  emit("update:modelValue", false);
  emit("emitParams", someText.value);
  someText.value = "";
};
</script>
<template>
  <teleport to="body" />
  <div>
    <v-dialog
      v-model="modelValue"
      activator="parent"
      width="auto"
      min-width="320"
      persistent
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Add Params</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon dark @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="someText"
            label="Add your params"
          ></v-text-field>
        </v-card-text>
        <v-alert v-if="openAlert" title="Save params!" type="warning"></v-alert>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            @click="saveInModal"
            :disabled="!someText"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
