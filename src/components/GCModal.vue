<template>
    <div class="modal fade" id="GCModal" tabindex="-1" aria-labelledby="GCModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="GCModalLabel">Girl Code Hackathon</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="aws-certificates" v-if="certificates">
            <div class="certificate-content">
              <img :src="certificates[16].img_url" :alt="certificates[16].certificate" loading="eager" class="img-fluid certificates">
                  <a href="https://leahbasson.github.io/GirlCode/" target="_blank"><button class="btnView">View</button></a>
            </div>
            </div>
    
          </div>
          <div class="modal-footer">
            <button type="button" class="btnClose" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
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
.heading{
  margin-top: 2rem;
}

.p-button{
  margin-top: 3rem;
}

.p-btm{
  padding-bottom: 3rem;
}

/* Media query */
@media (width < 999px)
{
  .btnClose{
    margin: auto;
  }
}
</style>