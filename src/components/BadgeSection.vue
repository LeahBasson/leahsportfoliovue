<template>
  <div class="container-fluid badge-container" data-aos="fade-up"  data-aos-duration="3000">
      <div class="badge-heading">
        <h1>Badges</h1>
      </div>

      <div class="badge-listing" v-if="badgeIntro">
        <div class="card-border" data-bs-toggle="modal" data-bs-target="#osbModal">
        <a class="card1">
          <img :src="badgeIntro[0].icon" :alt="badgeIntro[0].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  badgeIntro[0].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <osbModal />
      
      <div class="card-border" data-bs-toggle="modal" data-bs-target="#linuxModal">
        <a class="card1">
          <img :src="badgeIntro[1].icon" :alt="badgeIntro[1].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  badgeIntro[1].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <linuxModal/>

      <div class="card-border" data-bs-toggle="modal" data-bs-target="#jcaModal">
        <a class="card1">
          <img :src="badgeIntro[2].icon" :alt="badgeIntro[2].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  badgeIntro[2].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <jcaModal/>

      <div class="card-border" data-bs-toggle="modal" data-bs-target="#ehModal">
        <a class="card1">
          <img :src="badgeIntro[3].icon" :alt="badgeIntro[3].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  badgeIntro[3].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <ehModal/>

      </div>
      <Spinner v-else/>

      <div class="badge-listing" v-if="caseStudiesIntro">

        <div class="card-border" data-bs-toggle="modal" data-bs-target="#uiuxModal">
        <a class="card1">
          <img :src="caseStudiesIntro[0].icon" :alt="caseStudiesIntro[0].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  caseStudiesIntro[0].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <uiuxModal/>

      <div class="card-border" data-bs-toggle="modal" data-bs-target="#scrumModal">
        <a class="card1">
          <img :src="caseStudiesIntro[1].icon" :alt="caseStudiesIntro[1].title" loading="eager" class="img-fluid badge-icon">
          <h3>{{  caseStudiesIntro[1].title }}</h3>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <scrumModal/>

      </div>
      <Spinner v-else/>

  </div>
</template>

<script setup>
import AOS from 'aos';
import osbModal from './osbModal.vue';
import linuxModal from './linuxModal.vue';
import jcaModal from './jcaModal.vue';
import ehModal from './ehModal.vue';
import uiuxModal from './uiuxModal.vue';
import scrumModal from './scrumModal.vue'
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const badgeIntro = computed(() => store.state.badgeIntro)
const caseStudiesIntro = computed(() => store.state.caseStudiesIntro)

onMounted(() => {
  setTimeout(()=>{
    store.dispatch('fetchBadgeIntro'),
    store.dispatch('fetchCaseStudiesIntro')
  }, 1000);
  AOS.init();
})
</script>

<style>
.badge-container{
  margin-top: 5rem;
}

.badge-heading h1 {
  color: var(--secondary);
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.badge-listing {
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

.badge-icon{
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

.badge-heading h1 {
  color: var(--secondary);
  font-size: 2.8rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
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
}


</style>