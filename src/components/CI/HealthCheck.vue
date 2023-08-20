<template>
    <div>
      <h1>Health Check</h1>
      <p v-if="isHealthy">La aplicación está funcionando correctamente.</p>
      <p v-else>La aplicación no está funcionando correctamente.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHealthy: false
      };
    },
    mounted() {
      // Realiza aquí cualquier verificación que necesites para determinar la salud de tu aplicación.
      // Esto podría incluir peticiones a APIs, comprobaciones de base de datos, etc.
      
      // Ejemplo: Simplemente cambiar el valor de isHealthy a true para demostrar que la aplicación está "saludable".
      this.isHealthy = true;
    }
  };
  </script>
  