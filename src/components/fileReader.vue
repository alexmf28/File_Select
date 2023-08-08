<template>
  <v-row class="mt-5">
    <v-col cols="12"
      sm="6"
      offset-sm="3">
      <v-card class="flex justify-center">
        <v-file-input
          color="deep-purple accent-4"
          label="Archivo"
          outlined
          placeholder="Selecciona un archivo"
          type="file"
          @change="handleFileChange"
          accept=".txt"
        />
        <fileTable :fileData="fileData" v-if="dataLoaded" />
        <div v-else>
          <p v-if="fileError">
            Error al leer el archivo. Sólo se permiten archivos .txt.
          </p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import fileTable from "./fileTable.vue";

export default {
  components: {
    fileTable,
  },
  data() {
    return {
      fileData: [],
      dataLoaded: false,
      fileError: false,
      headers: [],
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event;
      if (file && file.name.endsWith(".txt")) {
        this.fileError = false;
        this.readFile(file);
        this.dataLoaded = true;
      } else {
        this.dataLoaded = false;
        this.fileError = true;
      }
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        this.fileData = fileContent.split("\n").map((line) => line.trim());
      };
      reader.readAsText(file);
    },
  },
};
</script>
