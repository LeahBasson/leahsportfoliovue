<template>
    <div class="certificate-container">
      <h1>Certificates</h1>
      <div class="certificate-listing" v-if="certificateIntro?.length">
        <EduCard
          v-for="certificate in certificateIntro"
          :key="certificate.id"
          @click="showModal(certificate)"
          data-bs-toggle="modal"
          data-bs-target="#certificateModal"
        >
          <template #header>
            <h3>{{ certificate.id }}</h3>
          </template>
          <template #content>
            <p>{{ certificate.title }}</p>
          </template>
        </EduCard>
      </div>
  
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
                {{ selectedCertificate?.title }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div v-if="selectedCertificate">
                <div  class="certificate-content" v-for="cert in selectedCertificate.certificates" :key="cert.id">
                  <img :src="cert.img_url" alt="Certificate Image" />
                  {{ cert.certificate }}
              </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
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
  
  export default {
    name: "CertificateComponent",
    components: {
      EduCard,
    },
    setup() {
      const store = useStore();
      const certificateIntro = computed(() => store.state.certificateIntro);
      const selectedCertificate = ref(null);
  
      onMounted(() => {
        setTimeout(() => {
          store.dispatch("fetchCertificateIntro");
        }, 1000);
        AOS.init();
      });
  
      const showModal = (certificate) => {
        selectedCertificate.value = certificate;
      };
  
      return { certificateIntro, selectedCertificate, showModal };
    },
  };
  </script>
  
  <style>
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
    gap: 90px;
    margin-top: 2rem;
  }

  img[alt="Certificate Image"]{
    width: 26rem;
    /* margin: auto; */
  }

.certificate-content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* .modal-body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  padding-top: 2rem;
} */

  </style>
  