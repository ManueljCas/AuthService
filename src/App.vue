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
  color: #fff; 
  background-color: #555;
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 
}

nav a.router-link-exact-active:hover {
  background-color: #666; 
}

nav a {
  color: #ccc; 
  text-decoration: none; 
  padding: 0.5rem 1rem; 
  border-left: 1px solid #555; 

nav a:first-of-type {
  border-left: none; 
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: 0; 
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0.5rem; 
  }
}
}
</style>
