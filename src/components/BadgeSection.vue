<template>
    <div class="certificate-container">
      <h1>Badges</h1>
      <div class="certificate-listing" v-if="badgeIntro?.length">
        <EduCard
          v-for="badge in badgeIntro"
          :key="badge.id"
          @click="showModal(badge)"
          data-bs-toggle="modal"
          data-bs-target="#certificateModal"
        >
          <template #header>
            <img :src="badge.icon" alt="badge-icon"/>
          </template>
          <template #content>
            <p>{{ badge.title }}</p>
          </template>
        </EduCard>
      </div>
      <Spinner v-else/>
  
      <!-- Bootstrap Modal -->
      <div
        class="modal fade"
        id="certificateModal"
        tabindex="-1"
        aria-labelledby="certificateModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="certificateModalLabel">
                {{ selectedBadge?.title }}
              </h5>
            </div>
            <div class="modal-body">
              <div v-if="selectedBadge">
                <div class="certificate-content" v-for="bdg in selectedBadge.badgeInfo" :key="bdg.id">
                  <img :src="bdg.badge" alt="Certificate Image" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button class="btn-cert-effect" data-bs-dismiss="modal">Close
                <span :style="{ top: `${spanPosition.top}px`, left: `${spanPosition.left}px` }"></span>
              </button> -->
              <ButtonEffect
                label="Close"
                :action="closeModal"
                :extraAttributes="{ 'data-bs-dismiss': 'modal' }"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import AOS from "aos";
  import EduCard from "./EduCard.vue";
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import ButtonEffect from './ButtonEffect.vue';
  import Spinner from "./Spinner.vue";
  
  export default {
    name: "BadgeComponent",
    components: {
      EduCard,
      ButtonEffect,
      Spinner
    },
    setup() {
      const store = useStore();
      const badgeIntro = computed(() => store.state.badgeIntro);
      const selectedBadge = ref(null);
  
      onMounted(() => {
        setTimeout(() => {
          store.dispatch("fetchBadgeIntro");
        }, 1000);
        AOS.init();
      });
  
      const showModal = (badge) => {
    console.log(badge); 
    selectedBadge.value = badge;
};

  
      return {
        badgeIntro,
        selectedBadge,
        showModal
      };
    },
  };
  </script>
  
  <style scoped>
  .certificate-container h1 {
    color: var(--secondary);
    font-size: 3.2rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }
  
  .certificate-container {
    margin-top: 5rem;
  }
  
  .certificate-listing {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 2rem;
  }
  
  img[alt="Certificate Image"] {
    width: 26rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  
  .certificate-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
  
  .modal-body,
  .modal-header,
  .modal-footer {
    background-color: var(--awesome) !important;
    color: var(--secondary);
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
  
  /* Media query for 555px and less*/
  @media (max-width: 555px){
    .certificate-container h1 {
    color: var(--secondary);
    font-size: 2.8rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }
  
  .certificate-listing {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 2rem;
  }
  
  .certificate-listing p{
    font-size: 1.5rem;
  }
  
  img[alt="Certificate Image"] {
    width: 20rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  
  .certificate-content {
    font-size: 1.2rem;
  }
  
  .modal-footer {
    display: flex;
    justify-content: center;
  }
  }
  
  /* Media query 556px to 999px */
  @media (min-width: 556px) and (max-width: 999px){
    .certificate-container h1 {
    color: var(--secondary);
    font-size: 2.8rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }
  
  .certificate-listing {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 2rem;
  }
  
  .certificate-listing p{
    font-size: 1.5rem;
  }
  
  img[alt="Certificate Image"] {
    width: 28rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  
  .certificate-content {
    font-size: 1.2rem;
  }
  
  .modal-footer {
    display: flex;
    justify-content: center;
  }
  }
  </style>
  