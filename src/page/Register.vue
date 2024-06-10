<template>
  <v-container class="justify-center align-center" fill-height>
    <v-card class="mx-auto px-6 py-8 mt-12" max-width="450">
     <div class="center-container">
        <div class="text-h5 text-md-h5 text-lg-h4">User Registration</div>
      </div>
      <v-form @submit.prevent="register" class="ma-6">
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[v => !!v || 'Username is required']"
          class="mb-2"
          label="Username"
          placeholder="Enter your Username"
          type="text"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[v => !!v || 'Password is required']"
          :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visiblePassword ? 'text' : 'password'"
          @click:append-inner="visiblePassword = !visiblePassword"
          density="compact"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          :readonly="loading"
          :rules="[v => !!v || 'confirmPassword is required']"
          :append-inner-icon="visibleConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visibleConfirmPassword ? 'text' : 'password'"
          @click:append-inner="visibleConfirmPassword = !visibleConfirmPassword"
          density="compact"
          placeholder="Enter your confirm Password"
          label="Confirm Password"
          clearable
        ></v-text-field>

        <br>

        
        <v-btn :to="{ name: 'Login' }"
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          submit
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
      confirmPassword: '',
      visiblePassword: false, // กำหนดค่า visiblePassword ให้เป็น false เพื่อให้ไอคอน password ไม่เปิดเอง
      visibleConfirmPassword: false, // กำหนดค่า visibleConfirmPassword ให้เป็น false เพื่อให้ไอคอน confirmPassword ไม่เปิดเอง
      loading: false, // กำหนดค่า loading ให้เป็น false
      form: false, // กำหนดค่า form ให้เป็น false

      // Mock data for login
       mockUsers: [
        { username: 'อสิวัท', password: '194745' },
        { username: 'micky', password: 'mic009' },
        { username: 'tilly', password: 'till050' },
        // Add more mock users as needed
      ]
    }
  },
  methods: {
    register() {
      console.log("Register function called");
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
       // ตรวจสอบว่า username ซ้ำกับ mockUsers หรือไม่
      const isUsernameExist = this.mockUsers.some(user => user.username === this.username);
      if (isUsernameExist) {
        alert("Username already exists");
        return;
      }
      // Logic สำหรับการ register
      console.log('UserName:', this.username);
      console.log('Password:', this.password);
      console.log('confirmPassword:', this.confirmPassword);
    }
  }
}
</script>

<style scoped>
  .center-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;    /* Center vertically */
    height: 50px;
  }
  .text-h5 {
    font-size: 1.25rem; /* Example font size for h5 */
  }
  .text-md-h5 {
    font-size: 1.5rem;  /* Example font size for medium devices */
  }
  .text-lg-h4 {
    font-size: 1.75rem; /* Example font size for large devices */
  }
</style>
