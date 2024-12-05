<template>
  <div>
   <section class="row" id="home">
     <LandingSection/>
   </section>
   <section class="row" id="about">
     <AboutSection/>
   </section>
   <section class="row" id="skills">
     <SkillsSection/>
   </section>
   <section class="row" id="EduExp">
     <EduAndExp/>
   </section>
 </div>  
</template>

<script>
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import EduAndExp from '@/components/EduAndExp.vue';

export default {
 name: 'HomeView',

 components: {
  LandingSection,
  AboutSection,
  SkillsSection,
  EduAndExp
 }
 
}
</script>
