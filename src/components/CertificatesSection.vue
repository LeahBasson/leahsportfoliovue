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
          </div>
          <div class="modal-body">
            <div v-if="selectedCertificate">
              <div class="certificate-content" v-for="cert in selectedCertificate.certificates" :key="cert.id">
                <img :src="cert.img_url" alt="Certificate Image" />
                {{ cert.certificate }}
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

export default {
  name: "CertificateComponent",
  components: {
    EduCard,
    ButtonEffect
  },
  setup() {
    const store = useStore();
    const certificateIntro = computed(() => store.state.certificateIntro);
    const selectedCertificate = ref(null);
    // const spanPosition = ref({ top: 0, left: 0 });

    onMounted(() => {
      setTimeout(() => {
        store.dispatch("fetchCertificateIntro");
      }, 1000);
      AOS.init();
    });

    const showModal = (certificate) => {
      selectedCertificate.value = certificate;
    };

    // const updateSpanPosition = (event) => {
    //   const rect = event.currentTarget.getBoundingClientRect();
    //   spanPosition.value = {
    //     top: event.clientY - rect.top,
    //     left: event.clientX - rect.left,
    //   };
    // };

    return {
      certificateIntro,
      selectedCertificate,
      showModal
      // spanPosition,
      // updateSpanPosition,
    };
  },
};
</script>

<style scoped>
.btn-cert-effect {
  position: relative;
  display: block;
  overflow: hidden;
  width: 12rem;
  height: 3rem;
  padding: 12px 22px;
  border: 1px solid var(--alternative);
  color: var(--secondary);
  text-decoration: none;
  transition: 0.5s ease-in-out;
  background-color: transparent;
  text-align: center;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.btn-cert-effect span {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: var(--alternative);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.btn-cert-effect:hover {
  color: var(--secondary);
}

.btn-cert-effect:hover span {
  width: 225%;
  height: 562.5px;
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px) {
  .btn-cert-effect {
    width: 16rem;
    height: 3.5rem;
    padding: 10px 22px;
    font-size: 1.4rem;
  }
}

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

img[alt="Certificate Image"] {
  width: 26rem;
}

.certificate-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
</style>
