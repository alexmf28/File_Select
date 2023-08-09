<template>
  <v-row class="mt-5">
    <v-col cols="12" sm="6" offset-sm="3">
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
    //método que contiene el evento change del input file
    handleFileChange(event) {
      const file = event;
      //sólo si archivo es de tipo .txt procede con la lectura
      if (file && file.name.endsWith(".txt")) {
        //ejectura la funcion readFile
        this.readFile(file);
        this.dataLoaded = true;
      } else {
        this.dataLoaded = false;
        this.fileError = true;
      }
    },
    //recibe el archivo y lo lee
    readFile(file) {
      //usamos el objeto fileReader para leer el contenido
      const reader = new FileReader();
      //Un controlador para el evento load. Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente.
      reader.onload = (event) => {
        const fileContent = event.target.result;
        //Se eliminan los espacios en blanco.
        this.fileData = fileContent.split("\n").map((line) => line.trim());
      };
      //El método readAsText se usa para leer el contenido de File.
      reader.readAsText(file);
    },
  },
};
</script>
