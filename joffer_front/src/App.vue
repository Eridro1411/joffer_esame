<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigazione.vue"

export default {
  components: {
    Navigation
  }
}
</script>