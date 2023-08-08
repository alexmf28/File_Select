<template>
  <v-data-table
    class="table-dark mt-5"
    :headers="headers"
    :items="formattedData"
  >
  </v-data-table>
</template>

<script>
export default {
  props: {
    fileData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listaItems: [],
      headers: [
        {
          text: "Información del archivo",
          align: "center",
          sortable: false,
          value: "line",
        },
      ],
    };
  },
  computed: {
    formattedData() {
      // Mapea los datos originales a la estructura requerida por Vuetify V-data-table
      return this.fileData.map((line) => ({
        line: line ? line : "Sin contenido",
      }));
    },
  },
};
</script>
