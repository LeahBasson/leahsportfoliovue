<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal">
        <!-- <button class="close-button text-white bg-transparent" @click="close">&times;</button> -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModalComp",
    emits: ["close"],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: var(--awesome);
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    position: relative;
  }
  
  /* .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--secondary);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  } */

  .modal-overlay {
  background: rgba(0, 0, 0, 0.8) !important;
  z-index: 9999 !important;
}
.modal {
  display: block !important;
  opacity: 1 !important;
}

  </style>
  