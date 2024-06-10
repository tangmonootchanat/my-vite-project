<template>
 <v-sheet>
  <v-container class="justify-center align-center" fill-height>
    <v-card class="mx-auto px-6 py-8" max-width="450">
        <v-form
          class="ma-2"
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="username"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Username"
            clearable
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
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
              <v-btn
                :disabled="!form"
                :loading="loading"
                color="grey"
                size="large"
                type="submit"
                variant="plain"
                block
              >
                Sign up
              </v-btn>
            </v-list-item>
          </v-list>

        </v-form>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      form: false,
      loading: false,
      username: '',
      password: '',
      required: v => !!v || 'Required.',
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      // ทำการล็อกอินที่นี่
      setTimeout(() => {
        this.loading = false;
        alert(`Logged in as: ${this.username}`);
        this.$router.push('/');
      }, 1000);
    }
  }
}
</script>

<style scoped>
.my-card {
  margin-top: 100px; /* Adjust this value to move the card further down */
}
</style>
