<template>
  <v-data-table
    class="table-dark mt-5"
    :headers="headers"
    :items="contentData"
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
    contentData() {
      // Mapea los datos originales a la estructura requerida por V-data-table
      return this.fileData.map((line) => ({
        //si el archivo no tiene contenido, se muestra un mensaje
        line: line ? line : "Sin contenido",
      }));
    },
  },
};
</script>
