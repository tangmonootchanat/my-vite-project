<template>
  <v-app id="inspire" :theme="theme">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>My Application</v-list-item-title>
          <v-list-item-subtitle>Vuetify + vite + vue</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item :to="{ name: 'Home' }" prepend-icon="mdi-format-list-checks">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'About' }" prepend-icon="mdi-forum">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isLoggedIn" @click="logout" prepend-icon="mdi-logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item v-else :to="{ name: 'Login' }" prepend-icon="mdi-login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        absolute
        color="purple-darken-3"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Todo list</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-text-field 
          class="SearchTask ma-4"
          v-model="searchQuery"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search tasks"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>

      </v-app-bar>

    <v-main>
      <router-view :search-query="searchQuery" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const drawer = ref(false)
const searchQuery = ref('')
const store = useStore()
const router = useRouter()

const isLoggedIn = computed(() => store.state.isLoggedIn)

const logout = () => {
  // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบก่อนที่จะทำการ Logout
  if (!isLoggedIn.value) {
    console.error('User is not logged in.')
    return
  }

  store.commit('logout')
  router.push({ name: 'Login' }) // นำผู้ใช้ไปยังหน้า Login หลังจากที่ทำการ logout
}
</script>

<style>
  .SearchTask {
     background-color: #BDBDBD !important; /* ตัวอย่างสีเทาอ่อน */
  }
</style>
