<template>
    <footer class="container-fluid">
        <div class="row contactP">
            <p class="lead text-white">
                <span class="shadow">Leah's Portfolio</span>
                <span >&copy; {{ cYear }}.</span>
                <span> All Rights Reserved.</span>
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
  .contactP p{
    font-size: 1rem;
  }
  </style>