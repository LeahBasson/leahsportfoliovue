<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead text-white contactP">
                <span class="shadow">Leah's Portfolio</span>
                <span >&copy; {{ cYear }}</span>
            </p>
        </div>
      </footer>
  </template>
  
  <script>
  export default {
      name: "FooterComp",
      data(){
          return{
              cYear: new Date().getUTCFullYear()
          }
      }
  }
  </script>
  
  <style>
  
  </style>