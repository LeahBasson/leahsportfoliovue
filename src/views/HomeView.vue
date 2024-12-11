<template>
  <div>
   <section class="row" id="home">
     <LandingSection/>
   </section>
   <section class="row" id="about">
     <AboutSection/>
   </section>
   <section class="row">
     <SkillsSection/>
   </section>
   <section class="row" id="EduExp">
     <EduAndExp/>
   </section>
   <section class="row">
     <CertificatesSection/>
   </section>
   <!-- <section class="row">
     <BadgeSection/>
   </section> -->
   <section class="row" id="projects">
     <ProjectsSection/>
   </section>
 </div>  
</template>

<script>
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import EduAndExp from '@/components/EduAndExp.vue';
import CertificatesSection from '@/components/CertificatesSection.vue';
// import BadgeSection from '@/components/BadgeSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';

export default {
 name: 'HomeView',

 components: {
  LandingSection,
  AboutSection,
  SkillsSection,
  EduAndExp,
  CertificatesSection,
  // BadgeSection,
  ProjectsSection
 }
 
}
</script>
