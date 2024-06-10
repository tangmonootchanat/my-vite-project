<template>
 <v-sheet>
  <v-container class="justify-center align-center" fill-height>
    <v-card class="mx-auto px-6 py-8 mt-12" max-width="450" >
    <div class="center-container">
        <div class="text-h5 text-md-h5 text-lg-h4">Login</div>
      </div>
        <v-form class="ma-6" v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="username"
            :readonly="loading"
            :rules="[v => !!v || 'Username is required']"
            class="mb-2"
            label="Username"
            placeholder="Enter your Username"
            clearable
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[v => !!v || 'Password is required']"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            density="compact"
            label="Password"
            type="password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>

          <br>

          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Sign In
          </v-btn>

          <v-list dense>
            <v-list-item :to="{ name: 'Register' }" >
             <v-btn color="grey" size="large" variant="plain" block>
                Sign up now >
              </v-btn>
            </v-list-item>
          </v-list>
          <v-alert v-if="error" type="error" dismissible>
            {{ error }}
          </v-alert>

        </v-form>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
import { users } from '@/users';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      form: false,
      loading: false,
      visible: false,
      username: '',
      password: '',
      error: '', // กำหนดค่า error ที่นี่
      required: v => !!v || 'Required.',
    }
  },
  methods: {
    ...mapMutations(['login']),
    onSubmit() {
      this.loading = true;
      this.error = ''; // รีเซ็ตค่า error ทุกครั้งที่ submit

      // ทำการล็อกอินที่นี่
      setTimeout(() => {
        const user = users.find(user => user.username === this.username && user.password === this.password);
        this.loading = false;

        if (user) {
          this.login();
          alert(`Logged in as: ${this.username}`);
          this.$router.push('/home');
        } else {
          this.error = 'Invalid username or password';
          console.log('UserName:', this.username);
          console.log('Password:', this.password);
        }
      }, 1000);
    }
  }
}
</script>

<style scoped>
.my-card {
  margin-top: 100px; /* Adjust this value to move the card further down */
}

.center-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
    height: 50px;
}
</style>
