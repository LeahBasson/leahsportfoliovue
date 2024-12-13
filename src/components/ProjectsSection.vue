<template>
    <div class="projects-container">
        <h1>Projects</h1>
    </div>

    <div class="row project-nav">
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
                
                <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[4].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[4].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[4].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[4].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[4].hostedLink"
                  target="_blank"/>
                </template>
                </ProjectsCard>    

                <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[6].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[6].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[6].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[6].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[6].hostedLink"
                  target="_blank"/>
                </template>
                </ProjectsCard>    

            </div>
            <Spinner v-else/>

        </div> <!-- End of Digital Artwork -->

        <!-- Mini Project -->
      <div class="tab-pane fade" id="pills-mini-project" role="tabpanel" aria-labelledby="pills-mini-project-tab">

        <div class="projects-listing" v-if="projects">
          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[5].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[5].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[5].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[5].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[5].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[7].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[7].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[7].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[7].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[7].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[11].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[11].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[11].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[11].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[11].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>
        </div>
        <Spinner v-else/>

      </div> <!-- End of Mini Project -->

      <!-- Logo -->
      <div class="tab-pane fade" id="pills-logo" role="tabpanel" aria-labelledby="pills-logo-tab">

        <div class="projects-listing" v-if="projects">
          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[3].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[3].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[3].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[3].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[3].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[9].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[9].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[9].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[9].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[9].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[10].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[10].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[10].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[10].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[10].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

        </div>
        <Spinner v-else/>

      </div> <!-- End of Logo -->

      <!-- Website -->
      <div class="tab-pane fade" id="pills-website" role="tabpanel" aria-labelledby="pills-website-tab">

        <div class="projects-listing" v-if="projects">

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[0].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[0].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[0].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[0].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[0].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[1].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[1].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[1].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[1].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[1].hostedLink"
                  target="_blank"/>
                </template>
          </ProjectsCard>

          <ProjectsCard>
                <template #project-card-indicator>
                <p>{{ projects[2].id }}</p>
                </template>

                <template #project-card-title>       
                <h3 class="card-title">{{ projects[2].projectName }}</h3>
                </template>

                <template #project-card-desc>
                    <h6>{{ projects[2].description }}</h6>
                </template>

                <template #project-card-footer>
                    <ButtonEffect
                  label="Repo"
                  :href="projects[2].gitHub"
                  target="_blank"/>
                  <ButtonEffect
                  label="Hosted"
                  :href="projects[2].hostedLink"
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

.project-nav ul{
  margin: auto;
}

.projects-listing{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.9rem;
    margin-top: 2rem;
}

.projects-listing h6{
    font-weight: 400;
    margin-top: 0.2rem;
}

/* Media query for 555px and less */
@media (max-width: 555px) {
  .project-nav ul{
  margin: auto;
  width: 90%;
}

.nav-pills li{
  font-size: 1.3rem;
  padding: 8px 18px;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px) {
  .project-nav ul{
  margin: auto;
  width: 95%;
}

.nav-pills li{
  font-size: 1.3rem;
  padding: 8px 18px;
}
}
</style>