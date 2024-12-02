<template>
  <div class="wrapper">
    <NavComp />
    <main class="container-fluid">
      <router-view />
    </main>
    <FooterComp />
  </div>

</template>

<script>
import NavComp from '@/components/NavComp.vue' 
import FooterComp from '@/components/FooterComp.vue'

export default {
  components: {
    NavComp,
    FooterComp,
  }

}
</script>

<style src="./assets/css/style.css">
</style>