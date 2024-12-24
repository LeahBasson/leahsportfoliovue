<template>
    <div class="modal fade" id="LcModal" tabindex="-1" aria-labelledby="LcModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title" id="LcModalLabel">Life Choices Certificate</h5>
            <div class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></div>
          </div>
          <div class="modal-body">
            <div class="aws-certificates" v-if="certificates">
            <div class="certificate-content">
              <img :src="certificates[16].img_url" :alt="certificates[16].certificate" loading="eager" class="img-fluid certificates">
              <p>{{ certificates[16].certificate }}</p>
            </div>
            </div>
    
          </div>
          <div class="modal-footer">
            <ButtonEffect
              label="Close"
              :action="closeModal"
              :extraAttributes="{ 'data-bs-dismiss': 'modal' }"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import ButtonEffect from './ButtonEffect.vue';
 import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const certificates = computed(() => store.state.certificates)

  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchCertificates')
    }, 1000);
  })
</script>

<style>
.aws-certificates{
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    flex-wrap: wrap;
}

.modal-title{
    color: var(--primary);
    font-family: "Poppins", sans-serif;
}

.modal-content{
  background-color: var(--awesome) !important;
}

.modal-body{
  background-color: var(--awesome) !important;
}

.modal-header h5{
    color: var(--secondary) !important;
}

img[alt="certificate"]{
  width: 26rem;
  margin: auto;
  margin-top: 1rem;
}

.modal ::-webkit-scrollbar {
  width: 12px;
}

.modal ::-webkit-scrollbar-track {
  background-color: var(--awesome) !important;
}

.modal ::-webkit-scrollbar-thumb {
  background-color: var(--alternative) !important;
  border-radius: 10px;
}

.modal ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.certificate-content p{
  color: var(--secondary);
  font-family: "Poppins", sans-serif;
}

.btnView{
  background-color: var(--alternative);
  color: var(--secondary);
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.3rem;
}

.btnView:hover{
  background-color: rgb(255, 40, 40);
}

.btnClose{
  color: var(--primary);
  padding: 0.5rem 2rem;
  border: 1px solid var(--alternative);
  border-radius: 0.3rem;
  background-color: var(--secondary);
}

.btnClose:hover{
  background-color: var(--alternative);
  color: var(--secondary);
  transition: all 1s;
}

.btn-close-modal::before { 
  content: '×'; 
  color: white; 
  font-size: 2rem; 
  background-color: none;
}
</style>