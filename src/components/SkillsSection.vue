<template>
    <div class="skills-container" data-aos="fade-up"  data-aos-duration="3000">
      <h1>Skills</h1>
      <div class="skills-div" v-if="skills?.length">
        <CardComp v-for="skill in skills" :key="skill.id">
          <template #cardContent>
            <img :src="skill.img_url" :alt="skill.skillName"/>
            <h4>{{ skill.skillName }}</h4>
            <h5><span>{{ skill.level }}</span></h5>
          </template>
  
          <template #cardOverlay>
            <p>
              {{ skill.description }}
            </p>
          </template>
        </CardComp>
      </div>
      <Spinner v-else/>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import Spinner from './Spinner.vue'
  import CardComp from './CardComp.vue';
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: "SkillsComponent",
    components: {
      CardComp,
      Spinner
    },
    setup() {
      const store = useStore();
      const skills = computed(() => store.state.skills);
  
      onMounted(() => {
        setTimeout(() => {
          store.dispatch('fetchSkills');
        }, 1000);
        AOS.init();
      });
  
      return { skills };
    },
  };
  </script>
  
  <style scoped>
  .skills-container {
    text-align: center;
    margin: 50px auto;
  }
  
  .skills-container h1 {
    color: var(--secondary);
    font-size: 3.2rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }
  
  .skills-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 4rem;
  }
  
  .skills-div h4{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .skills-div h5{
    color: var(--alternative);
    font-weight: bold;
  }

  /* Media query for 555px and less*/
  @media (max-width: 555px){
    .skills-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 4rem;
  }

  .skills-container h1 {
    color: var(--secondary);
    font-size: 2.5rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }
  }
  </style>
  