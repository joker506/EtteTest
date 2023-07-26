<script setup>
import { toRef } from "vue";
import { RouterView } from "vue-router";

import menu from "@/helpers/menu.js";

const drawer = toRef(true);
</script>
<template >
  <v-app>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        permanent
        class="bg-primary"
      >
        <v-list-item
          @click="drawer = !drawer"
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in menu"
            :key="item.id"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.path"
            :to="item.path"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="wrapper">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
.wrapper {
  margin: 10px;
}
</style>


