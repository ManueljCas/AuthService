<template>
    <div class="password-reset-container">
      <h2 class="password-reset-title">Cambiar contraseña</h2>
      <form @submit.prevent="resetPassword" class="password-reset-form">
        <div class="input-wrapper">
          <label for="email" class="input-label">Correo electrónico:</label>
          <input type="email" name="email" v-model="email" id="email" placeholder="Ingresa tu correo electrónico" class="input-field">
        </div>
        <div class="input-wrapper">
          <label for="currentPassword" class="input-label">Contraseña actual:</label>
          <input type="password" name="currentPassword" v-model="currentPassword" id="currentPassword" placeholder="Ingresa tu contraseña actual" class="input-field">
        </div>
        <div class="input-wrapper">
          <label for="newPassword" class="input-label">Nueva contraseña:</label>
          <input type="password" name="newPassword" v-model="newPassword" id="newPassword" placeholder="Ingresa tu nueva contraseña" class="input-field">
        </div>
        <button type="submit" class="reset-button submit-button">Cambiar contraseña</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import UserService from '@/service/UserService'
  
    const email = ref('')
    const currentPassword = ref('')
    const newPassword = ref('')
    const errorMessage = ref<string>('')
  
    const service = new UserService()
  
    const resetPassword = async () => {
      errorMessage.value = ''
  
      // Aquí puedes realizar la validación de los campos según tus requisitos
      if (!email.value || !currentPassword.value || !newPassword.value) {
        errorMessage.value = 'Todos los campos son obligatorios.'
        return
      }
  
      // Llamada al servicio para cambiar la contraseña
      const success = await service.changePassword(email.value, currentPassword.value, newPassword.value)
  
      if (success) {
        // Aquí podrías redirigir a una página de éxito o mostrar un mensaje de éxito
        console.log('¡Contraseña cambiada con éxito!')
      } else {
        errorMessage.value = 'No se pudo cambiar la contraseña. Verifica tus credenciales e intenta nuevamente.'
      }
    }
  </script>
  
  <style scoped>
    .password-reset-container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      background-color: #333;
      border-radius: 10px;
    }
  
    .password-reset-title {
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .password-reset-form {
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
      cursor: pointer;
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
  