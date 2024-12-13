<template>
    <div class="modal fade" id="linuxModal" tabindex="-1" aria-labelledby="awsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title" id="awsModalLabel">Linux Unhatched</h5>
            <div class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></div>
          </div>
          <div class="modal-body">
            <div class="aws-certificates" v-if="badgeInfo">
                <div class="certificate-content">
                  <img :src="badgeInfo[1].badge" alt="badge" loading="eager">
                  <ButtonEffect 
                  label="View certificate" 
                  :href="badgeInfo[1].certificate" target="_blank" class="btn-view-cert"
                />
            </div>
           
            </div>
            <Spinner v-else/>
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
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const badgeInfo = computed(() => store.state.badgeInfo)

  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchBadges')
    }, 1000)
  })
</script>

<style>
.aws-certificates{
    display: flex;
    justify-content: center;
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

img[alt="badge"]{
  width: 20rem;
  margin: auto;
  margin-bottom: 1rem;
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
  margin-top: 0.5rem;
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

.btn-view-cert{
  margin: auto;
}

/* Media query for 555px and less*/
@media (max-width: 555px){
    .modal-footer{
      display: flex;
      justify-content: center;
    }

  img[alt="certificate"]{
  width: 22rem;
  margin: auto;
  margin-bottom: 1rem;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
  img[alt="certificate"]{
  width: 22rem;
  margin: auto;
  margin-bottom: 1rem;
}
}
</style>