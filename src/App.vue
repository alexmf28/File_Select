<template>
  <v-app>
    <v-app-bar app class="d-flex justify-center" color="secondary" dark>
      <div class="d-flex align-center">
        <h1>Prueba Slin</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
