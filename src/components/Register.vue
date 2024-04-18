<template>
    <div class="registration-container">
      <h1 class="registration-title">Regístrate</h1>
      <form @submit.prevent="EnviarForm()" class="registration-form">
        <div class="input-wrapper">
          <label for="nombre" class="input-label">Nombre completo:</label>
          <input type="text" v-model="nombre" id="nombre" class="input-field" placeholder="Ingresa tu nombre completo" required>
        </div>
        <div class="input-wrapper">
          <label for="correo" class="input-label">Correo electrónico:</label>
          <input type="email" v-model="correo" id="correo" class="input-field" placeholder="Ingresa tu correo electrónico" required>
        </div>
        <div class="input-wrapper">
          <label for="grupo" class="input-label">Grupo:</label>
          <input type="text" v-model="grupo" id="grupo" class="input-field" placeholder="Ingresa tu grupo" required>
        </div>
        <div class="input-wrapper">
          <label for="contra" class="input-label">Contraseña:</label>
          <input type="password" v-model="contra" id="contra" class="input-field" placeholder="Ingresa tu contraseña" required>
        </div>
        <button type="submit" :disabled="!(nombre && correo && grupo && contra)" class="submit-button">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import UserService from '@/service/UserService'
  import { ref } from 'vue'
  
  const service = new UserService()
  
  const nombre = ref('')
  const correo = ref('')
  const contra = ref('')
  const grupo = ref('')
  
  const EnviarForm = () => {
    if (!nombre.value || !correo.value || !contra.value || !grupo.value) {
      alert("Llena todos los campos")
      return
    }
    if (!/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(correo.value)) {
      alert("Ingresa un correo electrónico válido");
      return
    }
    service.fetchRegister(nombre.value, correo.value, contra.value, grupo.value)
  }
  </script>
  
  <style scoped>
  .registration-container {
    max-width: 400px;
    margin: 20px auto;    
    padding: 20px;
    background-color: #333;
    border-radius: 10px;
  }
  
  .registration-title {
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
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
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
  .submit-button:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: not-allowed;
  }
  
  .submit-button:hover {
    background-color: white;
    color: #333;
  }
  </style>
  