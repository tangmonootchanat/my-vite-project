<template>
  <v-container class="justify-center align-center" fill-height>
    <v-card class="mx-auto px-6 py-8" max-width="450">
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="username"
          label="Username"
          type="text"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        ></v-text-field>

        <v-btn 
          :disabled="!form"
          :loading="loading"
          type="submit" 
          color="success"
          size="large"
          variant="elevated"
          block
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // Logic สำหรับการ register
      console.log('UserName:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>

<style scoped>

</style>
