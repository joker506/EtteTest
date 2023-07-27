<script setup>
import Button from "@/components/Button";
import { defineProps, defineEmits, toRef, toRefs, reactive } from "vue";

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

let subItems = reactive([]);
const addSubitem = () => {
  subItems.push({ id: subItems.length + 1, val: "" });
};

const saveInModal = () => {
  emit("update:modelValue", false);
  emit("emitParams", { cat: someText.value, subCat: subItems });
  subItems = [];
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
          <v-toolbar-title>Add Category</v-toolbar-title>
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
        <v-card-actions>
          <Button
            title="add subitem"
            @customClickBtn="addSubitem"
            :isDisabled="!someText"
          />
        </v-card-actions>
        <v-list lines="one">
          <v-list-item
            v-for="item in subItems"
            border
            :key="item.id"
            :title="item.title"
            class="list__item"
            ><v-card-text>
              <v-text-field
                v-model="item.val"
                label="Add subCategory"
              ></v-text-field>
            </v-card-text>
          </v-list-item>
        </v-list>

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

