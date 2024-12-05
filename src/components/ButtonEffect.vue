<template>
    <a class="btn-effect" href="https://drive.google.com/uc?export=download&id=14w-z1FlW2TWwZXZtA_xrgnvuEEyQfzS6" id="download-link" @mouseenter="updateSpanPosition" @mouseleave="updateSpanPosition" >
      Download my CV
      <span :style="{ top: `${spanPosition.top}px`, left: `${spanPosition.left}px` }"></span>
    </a>
  </template>
  
  <script>
  export default {
    name: "ButtonEffect",
    data() {
      return {
        spanPosition: { top: 0, left: 0 },
      };
    },
    methods: {
      updateSpanPosition(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        this.spanPosition = {
          top: event.clientY - rect.top,
          left: event.clientX - rect.left,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .btn-effect {
    position: relative;
    display: block;
    overflow: hidden;
    width: 12rem;
    height: 3rem;
    padding: 12px 22px;
    border: 1px solid var(--alternative);
    color: var(--secondary);
    text-decoration: none;
    transition: 0.5s ease-in-out;
    background-color: transparent;
    text-align: center;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
  
  .btn-effect span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--alternative);
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  
  .btn-effect:hover {
    color: var(--secondary);
  }
  
  .btn-effect:hover span {
    width: 225%;
    height: 562.5px;
  }

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
  .btn-effect {
    position: relative;
    display: block;
    overflow: hidden;
    width: 16rem;
    height: 3.5rem;
    padding: 10px 22px;
    border: 1px solid var(--alternative);
    color: var(--secondary);
    text-decoration: none;
    transition: 0.5s ease-in-out;
    background-color: transparent;
    text-align: center;
    border-radius: 0.5rem;
    margin-top: 2rem;
    font-size: 1.4rem;
  }

  
}
  </style>
  