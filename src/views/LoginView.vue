<template>
    <div class="login-container registration-container">
      <h1 class="login-title registration-title">Iniciar sesión</h1>
      <form @submit.prevent="login" method="post" class="login-form registration-form">
        <div class="input-wrapper">
          <label for="email" class="input-label">Correo electrónico:</label>
          <input type="email" name="Email" v-model="Email" id="email" placeholder="Ingresa tu correo electrónico" class="input-field">
        </div>
        <div class="input-wrapper">
          <label for="password" class="input-label">Contraseña:</label>
          <input type="password" name="Password" v-model="Pass" id="password" placeholder="Ingresa tu contraseña" class="input-field">
        </div>
        <button type="submit" class="login-button submit-button">Iniciar sesión</button>
      </form>
      <p v-if="!error && errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import UserService from '@/service/UserService'
  import router from '@/router/index'
  
  const Email = ref('')
  const Pass = ref('')
  const errorMessage = ref<string>('')
  const error = ref(false)
  
  const service = new UserService()
  
  const login = async () => {
    error.value = false
    errorMessage.value = ''
  
    const success = await service.login(Email.value, Pass.value)
  
    if (success) {
      router.push('/dash')
    } else {
      error.value = true
      errorMessage.value = 'Credenciales inválidas. Por favor, inténtalo de nuevo.'
    }
  }
  </script>
  
  <style scoped>
.login-container {
  max-width: 400px;
  margin: 20px auto;  
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
}

.login-title {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  margin-top: 20px;
}

.input-wrapper {
  margin-bottom: 20px;
}

.input-label {
  color: #fff;
}

.input-field {
  width: 100%;
  padding: 10px 0px;
  border: none;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #cccccc;
  color: #333;
  cursor: not-allowed;
}

.submit-button:hover {
    background-color: white;
    color: #333;
}

.error-message {
  color: #ff0000;
  text-align: center;
}
</style>