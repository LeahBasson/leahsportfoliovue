<template>
    <div class="certificate-container">
      <h1>Certificates</h1>
      <div class="certificate-listing" v-if="certificateIntro?.length">
        <EduCard v-for="certificate in certificateIntro" :key="certificate.id" @click="showModal(certificate.id)">
          <template #header>
            <h3>{{ certificate.title }}</h3>
          </template>
          <template #content>
            <img :src="certificate.img_url" alt="Certificate Image" />
          </template>
        </EduCard>
      </div>
      <ModalComp v-if="selectedCertificate" @close="closeModal">
        <h3>{{ selectedCertificate.title }}</h3>
        <img :src="selectedCertificate.img_url" alt="Certificate Image" />
        <ul>
          <li v-for="cert in selectedCertificateDetails" :key="cert.id">{{ cert.certificate }}</li>
        </ul>
      </ModalComp>
    </div>
  </template>
  
  <script>
    import AOS from 'aos';
    import EduCard from './EduCard.vue';
    import ModalComp from './ModalComp.vue';
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
  
    export default {
      name: "CertificateComponent",
      components: {
        EduCard,
        ModalComp
      },
      setup() {
        const store = useStore();
        const certificateIntro = computed(() => store.state.certificateIntro);
        const certificates = computed(() => store.state.certificates);
        const selectedCertificate = ref(null);
        const selectedCertificateDetails = ref([]);
  
        onMounted(() => {
          setTimeout(() => {
            store.dispatch('fetchCertificateIntro');
          }, 1000);
          AOS.init();
        });
  
        const showModal = (id) => {
          selectedCertificate.value = certificateIntro.value.find(cert => cert.id === id);
          selectedCertificateDetails.value = certificates.value.filter(cert => cert.id === id);
        };
  
        const closeModal = () => {
          selectedCertificate.value = null;
          selectedCertificateDetails.value = [];
        };
  
        return { certificateIntro, selectedCertificate, selectedCertificateDetails, showModal, closeModal };
      }
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
  
  .modal {
    /* Add styles for the modal here */
  }
  </style>
  