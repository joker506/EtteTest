<script setup>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { AJAX_GET } from "@/helpers/api";
import { reactive, toRef, ref, onMounted } from "vue";

let openModal = ref(false);
let itemsList = reactive([]);

const saveNewParams = ({ cat, subCat }) => {
  itemsList.push({
    id: itemsList.length + 1,
    title: cat,
    icon: "mdi-view-dashboard",
    subItems: subCat,
  });
};

const getParams = async () => {
  try {
    const { data } = await AJAX_GET(
      "https://642c97e1bf8cbecdb4f3bc06.mockapi.io/api/characteristics/"
    );
    itemsList.push(...data);
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  await getParams();
});
const corrCategory = () => {
  console.log(itemsList);
};
</script>
<template>
  <Modal
    v-model="openModal"
    @update:modelValue="openModal = false"
    @emitParams="saveNewParams"
  />

  <div>
    <h1>Settings</h1>
    <Button @customClickBtn="openModal = true" />

    <v-list lines="one">
      <v-list-item
        v-for="item in itemsList"
        border
        :key="item.id"
        :title="item.title"
        class="list__item"
      >
        <template v-slot:prepend>
          <v-img :width="100" cover :src="item.icon" class="list__img"></v-img>
        </template>
        <v-list-item-subtitle>asd</v-list-item-subtitle>
        <template v-slot:append>
          <v-list-item-subtitle
            >{{
              item.subItems ? item.subItems.length : 0
            }}
            count</v-list-item-subtitle
          >
          <v-btn icon="mdi-pencil" variant="text" @click="corrCategory"></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>
<style lang="scss" scoped>
.list {
  &__item {
    margin: 10px 0;
  }
  &__img {
    margin-right: 10px;
  }
}
</style>
