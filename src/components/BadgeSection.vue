<template>
  <div class="badge-container" data-aos="fade-up"  data-aos-duration="3000">
    <h1>Badges</h1>
    <div class="badge-listing" v-if="badgeIntro?.length" >
      <EduCard
        v-for="badge in badgeIntro"
        :key="badge.id"
        @click="showModal(badge)"
        data-bs-toggle="modal"
        data-bs-target="#badgeModal"
      >
        <template #header>
          <img :src="badge.icon" alt="badge-icon" />
        </template>
        <template #content>
          <p>{{ badge.title }}</p>
        </template>
      </EduCard>
    </div>
    <Spinner v-else />

    <div class="badge-listing" v-if="caseStudies?.length">
      <EduCard
        v-for="study in caseStudies"
        :key="study.id"
        @click="showModal(study)"
        data-bs-toggle="modal"
        data-bs-target="#badgeModal"
      >
        <template #header>
          <img :src="study.icon" alt="case-study-icon" />
        </template>
        <template #content>
          <p>{{ study.title }}</p>
        </template>
      </EduCard>
    </div>

    <!-- Modal for Badge or Case Study -->
    <div
      class="modal fade"
      id="badgeModal"
      tabindex="-1"
      aria-labelledby="badgeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="badgeModalLabel">
              {{ selectedBadge?.title || selectedCaseStudy?.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedBadge">
              <div
                class="badge-content"
                v-for="info in selectedBadge.badgeInfo"
                :key="info.id"
              >
                <img :src="info.badge" alt="Badge Image" />
                <ButtonEffect
                  label="View certificate"
                  :href="info.certificate"
                  target="_blank"
                />
              </div>
            </div>

            <div v-if="selectedCaseStudy">
              <div
                class="badge-content"
                v-for="info in selectedCaseStudy.badgeInfo"
                :key="info.id"
              >
                <img :src="info.badge" alt="Badge Image" />
                <ButtonEffect
                  label="View case study"
                  :href="info.docLink"
                  target="_blank"
                />
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
  </div>
</template>

<script>
import AOS from "aos";
import EduCard from "./EduCard.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import ButtonEffect from "./ButtonEffect.vue";
import Spinner from "./Spinner.vue";

export default {
  name: "BadgeComponent",
  components: {
    EduCard,
    ButtonEffect,
    Spinner,
  },
  setup() {
    const store = useStore();
    const badgeIntro = computed(() => store.state.badgeIntro);
    const caseStudies = computed(() => store.state.caseStudies); // Add caseStudies to the computed properties
    const selectedBadge = ref(null);
    const selectedCaseStudy = ref(null);

    onMounted(() => {
      setTimeout(() => {
        store.dispatch("fetchBadgeIntro");
        store.dispatch("fetchCaseStudies"); // Dispatch action to fetch case studies
      }, 1000);
      AOS.init();
    });

    const showModal = (item) => {
      if (item.badgeInfo) {
        if (item.title.includes("Hackathon")) {
          selectedCaseStudy.value = item;
          selectedBadge.value = null;
        } else {
          selectedBadge.value = item;
          selectedCaseStudy.value = null;
        }
      }
    };

    const closeModal = () => {
      selectedBadge.value = null;
      selectedCaseStudy.value = null;
    };

    return {
      badgeIntro,
      caseStudies,
      selectedBadge,
      selectedCaseStudy,
      showModal,
      closeModal,
    };
  },
};
</script>


<style scoped>
.badge-container h1 {
  color: var(--secondary);
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.badge-container {
  margin-top: 5rem;
}

.badge-listing {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 2rem;
}

img[alt="badge-icon"] {
  width: 50px;
  height: 50px;
}

img[alt="Badge Image"] {
  width: 18rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.badge-content {
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

/* Media query for 555px and less*/
@media (max-width: 555px){
  .badge-container h1 {
  color: var(--secondary);
  font-size: 2.8rem;
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

.badge-listing p{
  font-size: 1.5rem;
}

img[alt="Badge Image"] {
  width: 12rem;
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
