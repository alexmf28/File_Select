<template>
  <div class="home">
    <fileReader />
  </div>
</template>

<script>
// @ is an alias to /src
import fileReader from "@/components/fileReader.vue";

export default {
  name: "Home",
  components: {
    fileReader,
  },
};
</script>
