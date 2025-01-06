<template>
    <div class="modal fade" id="awsModal" tabindex="-1" aria-labelledby="awsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <h5 class="modal-title" id="awsModalLabel">AWS Certificates</h5>
            <div class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></div>
          </div>
          <div class="modal-body">
            <div class="aws-certificates" v-if="certificates">
                <div class="certificate-content">
                  <img :src="certificates[0].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[0].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[1].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[1].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[2].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[2].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[3].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[3].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[4].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[4].certificate }}</p>
            </div>
            </div>
            <Spinner v-else/>
            <div class="aws-certificates" v-if="certificates">
                <div class="certificate-content">
                  <img :src="certificates[5].img_url" alt="certificate" loading="eager" class="img-fluid">
                  <p>{{ certificates[5].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[6].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[6].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[7].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[7].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[8].img_url" alt="certificate" loading="eager" class="img-fluid certificats">
                  <p>{{ certificates[8].certificate }}</p>
            </div>
            </div>
            <Spinner v-else/>
            <div class="aws-certificates" v-if="certificates">
                <div class="certificate-content">
                  <img :src="certificates[9].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[9].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[10].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[10].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[11].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[11].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[12].img_url" alt="certificate" loading="eager" class="img-fluid certificats">
                  <p>{{ certificates[12].certificate }}</p>
            </div>
            <div class="certificate-content">
              <img :src="certificates[13].img_url" alt="certificate" loading="eager" class="img-fluid certificats">
                  <p>{{ certificates[13].certificate }}</p> 
            </div>
            </div>
            <Spinner v-else/>
            <div class="aws-certificates" v-if="certificates">
                <div class="certificate-content">
                  <img :src="certificates[14].img_url" alt="certificate" loading="eager" class="img-fluid certificates">
                  <p>{{ certificates[14].certificate }}</p>
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
  const certificates = computed(() => store.state.certificates)

  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchCertificates')
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

img[alt="certificate"]{
  width: 26rem;
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