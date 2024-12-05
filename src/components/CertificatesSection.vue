<template>
    <div class="certificate-container">
        <h1>Certificates</h1>
        <EduCard />
    </div>
</template>

<script>
import EduCard from '@/components/EduCard.vue'

export default {
 name: 'LandingSection',

 components: {
    EduCard
 }
 
}
</script>

<style>
.certificate-container h1 {
    color: var(--secondary);
    font-size: 3.2rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.certificate-container {
    margin-top: 3rem;
}
</style>