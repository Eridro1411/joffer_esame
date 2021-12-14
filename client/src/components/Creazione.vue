<template>
  <div>
    Creazione
    <div v-for="(field, index) in OfferFormfields" :key="index">
      <label :for="field.code"> {{ field.label }}: </label>
      <div v-if="field.type == 'text'">
        <input :id="field.code" :placeholder="field.placeholder" type="text" v-model="newOffer[field.code]"/>
      </div>
      <div v-if="field.type == 'number'">
        <input :id="field.code" :placeholder="field.placeholder" type="number" v-model="newOffer[field.code]"/>
      </div>
      <div v-if="field.type == 'textarea'">
        <input :id="field.code" :placeholder="field.placeholder" type="textarea" v-model="newOffer[field.code]"/>
      </div>
    </div>
      <button @click="saveOffer()" >Inserisci l'offerta</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newOffer: {
        company: "",
        language: "",
        RAL: 0,
        experience: "",
        location: "",
        description: "",
      },
      OfferFormfields: [
        {
          code: "company",
          label: "Nome della Compagnia",
          type: "text",
          placeholder: "Inserisci il nome",
          required: true,
        },
        {
          code: "language",
          label: "linguaggio di programmazione",
          type: "text",
          placeholder: "Scegli il linguaggio",
          required: true,
        },
        {
          code: "ral",
          label: "Stipendio annuale lordo",
          type: "number",
          placeholder: "Inserisci la somma",
          required: true,
        },
        {
          code: "experience",
          label: "Esperienza",
          type: "text",
          placeholder: "Esperienza in questo lavoro",
          required: true,
        },
        {
          code: "location",
          label: "Luogo di lavoro",
          type: "text",
          placeholder: "Scegli il luogo",
          required: true,
        },
        {
          code: "description",
          label: "Descrizione",
          type: "textarea",
        placeholder: "Inserisci la descrizione",
          required: false,
        },
      ],
    };
  },

  async mounted() {
    let response = await axios.get("http://127.0.0.1:8000/api/offer/create");
    this.newOffer = response.data;
    console.log(this.newOffer);
  },
  methods: {
    async saveOffer() {
      let response;
      response = await axios.post("http://127.0.0.1:8000/api/offer/create", this.newOffer);
      console.log(response.data);
      this.$router.push("/list");
    },
  },
};
</script>
