<template>
  <div class="flex flex-col items-center">
    <button @click="gotToDetail(offer)">
      <div v-for="(offer, index) in offers" :key="index" class="flex flex-col p-5 m-2 bg-red-200" >
      <p>Nome Azienda: <br> {{offer.company}}</p>
      <p>Linguaggio: <br> {{offer.language}}</p>
      <p>Esperienza: <br> {{offer.experience}}</p>
      <p>Collocazione: <br> {{offer.location}}</p>
    </div>
    </button>
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return{
    offers: [],
    isLoading: true
    }
  },
  async mounted() {
        this.isLoading = true;
        let response = await axios.get("http://127.0.0.1:8000/api/list");
        this.offers = response.data;
        this.isLoading = false;
    },
    methods: {
        goToFilmDetail(offer) {
        this.$router.push("/detail/" + offer.id);
        },
    }
}
</script>