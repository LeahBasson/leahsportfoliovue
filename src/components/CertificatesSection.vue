<template>
  <div class="container-fluid cert-container">
      <div class="certificate-heading">
        <h1>Certificates</h1>
      </div>

      <div class="certificate-listing" v-if="certificateIntro">
        <div class="card-border" data-bs-toggle="modal" data-bs-target="#awsModal">
        <a class="card1">
          <img :src="certificateIntro[0].icon" :alt="certificateIntro[0].title" loading="eager" class="img-fluid cert-icon">
          <h3>{{  certificateIntro[0].title }}</h3>
          <div class="hidden-div" data-aos="fade-up"  data-aos-duration="1000">
              <h6>Click Here >></h6>
          </div>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <AwsModal />
     
      <div class="card-border" data-bs-toggle="modal" data-bs-target="#GCModal">
        <a class="card1">
          <img :src="certificateIntro[1].icon" :alt="certificateIntro[1].title" loading="eager" class="img-fluid cert-icon">
          <h3>{{  certificateIntro[1].title }}</h3>
          <div class="hidden-div" data-aos="fade-up"  data-aos-duration="1000">
              <h6>Click Here >></h6>
          </div>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <GCModal />

      <div class="card-border" data-bs-toggle="modal" data-bs-target="#LcModal">
        <a class="card1">
          <img :src="certificateIntro[2].icon" :alt="certificateIntro[2].title" loading="eager" class="img-fluid cert-icon">
          <h3>{{  certificateIntro[2].title }}</h3>
          <div class="hidden-div" data-aos="fade-up"  data-aos-duration="1000">
              <h6>Click Here >></h6>
          </div>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <LcModal />

      <div class="card-border" data-bs-toggle="modal" data-bs-target="#COCTModal">
        <a class="card1">
          <img :src="certificateIntro[3].icon" :alt="certificateIntro[3].title" loading="eager" class="img-fluid cert-icon">
          <h3>{{  certificateIntro[3].title }}</h3>
          <div class="hidden-div" data-aos="fade-up"  data-aos-duration="1000">
              <h6>Click Here >></h6>
          </div>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <COCTModal />

      </div>
      <Spinner v-else/>
  </div>
</template>

<script setup>
import AwsModal from '@/components/AwsModal.vue'
import GCModal from './GCModal.vue';
import LcModal from './LcModal.vue';
import COCTModal from './COCTModal.vue';
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const certificateIntro = computed(() => store.state.certificateIntro)

onMounted(() => {
  setTimeout(()=>{
    store.dispatch('fetchCertificateIntro')
  }, 1000);
})
</script>

<style>
.cert-container{
  margin-top: 8rem;
}

.certificate-heading h1 {
  color: var(--secondary);
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.certificate-heading p{
  color: var(--secondary);
  font-size: 1.1rem;
}

.certificate-listing {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 2rem;
}

@keyframes border-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.card-border {
  position: relative;
  width: 300px;
  height: 242px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

.card1 {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--awesome);
  border-radius: 10px;
  padding: 32px 64px;
  margin: 0;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:hover {
  transform: scale(1.05);
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: var(--alternative);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.cert-icon{
  margin-top: 0.5rem;
}

.card1 h3 {
  color: var(--secondary);
  font-size: 1.2rem;
  line-height: 36px;
  font-weight: 700;
  margin: auto;
  font-weight: 600;
  margin-top: 1rem;
}

.card1:hover h3 { 
  border-color: #ffffff; 
}

.card1 p {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 30px;
  color: var(--secondary);
  margin-top: 2rem;
}

.card1 p.small {
  font-size: 1.4rem;
  color: var(--secondary);
  font-weight: 600;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: var(--alternative);
  height: 36px;
  width: 36px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover h3,
.card1:hover p {
  transition: all 0.3s ease-out;
  color: #ffffff;
}

.hidden-div h6{
  color: var(--secondary);
  display: none;
}

/* Media query for 555px and less*/
@media (max-width: 555px){
  .card-border {
  position: relative;
  width: 288px;
  height: 242px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

.certificate-heading h1 {
  color: var(--secondary);
  font-size: 2.5rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.hidden-div h6{
  color: var(--secondary);
  display: block;
  margin-top: 1rem;
  font-size: 1.1rem;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px){
  .card-border {
  position: relative;
  width: 285px;
  height: 242px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

.certificate-heading p{
  color: var(--secondary);
  font-size: 1.2rem;
}

.hidden-div h6{
  color: var(--secondary);
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
}
}
</style>