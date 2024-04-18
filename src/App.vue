<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/usuarios">Usuarios</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #333; 
  color: #fff; 
  padding: 1rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: #fff; /* Cambiar color del texto de los enlaces activos */
  background-color: #555; /* Cambiar color de fondo de los enlaces activos */
  padding: 0.5rem 1rem; /* Aumentar el espacio alrededor de los enlaces activos */
  border-radius: 0.25rem; /* Agregar bordes redondeados a los enlaces activos */
}

nav a.router-link-exact-active:hover {
  background-color: #666; /* Cambiar color de fondo al pasar el cursor sobre los enlaces activos */
}

nav a {
  color: #ccc; /* Cambiar color del texto de los enlaces */
  text-decoration: none; /* Eliminar subrayado de los enlaces */
  padding: 0.5rem 1rem; /* Aumentar el espacio alrededor de los enlaces */
  border-left: 1px solid #555; /* Cambiar color del borde izquierdo de los enlaces */
}

nav a:first-of-type {
  border-left: none; /* Eliminar borde izquierdo del primer enlace */
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: 0; /* Eliminar margen izquierdo */
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0.5rem; /* Reducir el margen superior */
  }
}
</style>
