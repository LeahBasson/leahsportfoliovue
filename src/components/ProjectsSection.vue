<template>
    <div class="projects-container">
        <h1>Projects</h1>
    </div>

    <div class="row">
        <ul class="nav nav-pills d-flex justify-content-center mt-4 purple" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link text-white show active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-white" id="pills-artwork-tab" data-bs-toggle="pill" data-bs-target="#pills-artwork" type="button" role="tab" aria-controls="pills-artwork" aria-selected="false">Digital Artwork</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-white" id="pills-mini-project-tab" data-bs-toggle="pill" data-bs-target="#pills-mini-project" type="button" role="tab" aria-controls="pills-mini-project" aria-selected="false">Mini Project</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-white" id="pills-logo-tab" data-bs-toggle="pill" data-bs-target="#pills-logo" type="button" role="tab" aria-controls="pills-logo" aria-selected="false">Logo</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-white" id="pills-website-tab" data-bs-toggle="pill" data-bs-target="#pills-website" type="button" role="tab" aria-controls="pills-website" aria-selected="false">Website</button>
        </li>
    </ul>
    </div>

    <div class="tab-content center" id="pills-tabContent">
        <!-- All Projects -->
        <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
            <div class="projects-listing" v-if="projects?.length">
                <ProjectsCard v-for="project in projects" :key="project.id">
                <template #project-card-indicator>
                <p>{{ project.id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ project.projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ project.description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="project.gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="project.hostedLink"
                  target="_blank"/>
                </template>
                </ProjectsCard>    
            </div>
            <Spinner v-else/>
        </div>
        <!--End of all projects-->

        <!-- Digital Artwork -->
        <div class="tab-pane fade" id="pills-artwork" role="tabpanel" aria-labelledby="pills-artwork-tab">

            <div class="projects-listing" v-if="projects">
                <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[8].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[8].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[8].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[8].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[8].hostedLink"
                  target="_blank"/>
                </template>
                </ProjectsCard>    
            </div>
            <Spinner v-else/>

        </div>

    </div>

</template>

<script setup>
import AOS from 'aos';
import ProjectsCard from './ProjectsCard.vue';
import { computed, onMounted } from 'vue'
import ButtonEffect from './ButtonEffect.vue';
import { useStore } from 'vuex'
    const store = useStore()
    const projects = computed(() => store.state.projects )
    
    onMounted(() => {
      setTimeout(()=>{
        store.dispatch('fetchProjects')
      }, 1000);
      AOS.init();
    })

</script>

<style>
.projects-container h1 {
  color: var(--secondary);
  font-size: 3.2rem;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.projects-container{
    margin-top: 5rem;
}

:is(.purple .nav-link.active,
.purple .nav-link.active:hover) {
    background-color: var(--alternative);
    border: none;
    font-weight: 600;
}

.nav-pills li{
  font-size: 1.3rem;
  padding: 8px 25px;
}

.projects-listing{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
}

.projects-listing h6{
    font-weight: 400;
    margin-top: 0.2rem;
}
</style>