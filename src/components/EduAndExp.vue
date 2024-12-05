<template>
    <div class="edu-exp-container" id="EduExp" data-aos="fade-up"  data-aos-duration="3000">
        <!-- Bubble Animation --> 
        <div class="bubble-container-three"> 
            <div class="bubbles-three"> 
                <span></span> 
                <span></span> 
                <span></span> 
            </div> </div>
        <div class="edu-exp-content">
            <div class="education-content">
                <div v-if="education?.length">
                <h1>Education</h1>
                <div class="edu-block-border" v-for="education in education" :key="education.id">
                    <div class="edu-block">
                        <p>{{ education.year }}</p>
                        <h5>{{ education.certificate }}</h5>
                        <h6>{{ education.location }}</h6>
                    </div>
                </div>
                </div>
            <Spinner v-else />
            <div class="subjcets-content" v-if="subjects?.length">
                <div class="edu-block-border" v-for="subject in subjects" :key="subject.id">
                    <div class="edu-block">
                        <h5>{{ subject.title }}</h5>
                        <h6>{{ subject.subject1 }}</h6>
                        <h6>{{ subject.subject2 }}</h6>
                        <h6>{{ subject.subject3 }}</h6>
                    </div>
                </div>
                </div>
            </div>
            <div class="experience-content" v-if="experience?.length">
                <h1>Experience</h1>
                <div class="edu-block-border" v-for="experience in experience" :key="experience.id">
                    <div class="edu-block">
                        <p>{{ experience.year }}</p>
                        <h5>{{ experience.job }}</h5>
                        <h6>{{ experience.location }}</h6>
                    </div>
                </div>
            </div>
            <Spinner v-else />
        </div>
    </div>
    </template>
    
    <script setup>
    import AOS from 'aos';
    import Spinner from './Spinner.vue';
    import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    
    const store = useStore();
    const education = computed(() => store.state.education);
    const experience = computed(() => store.state.experience);
    const subjects = computed(() => store.state.subjects);
    
    onMounted(() => {
        setTimeout(() => {
            store.dispatch('fetchEducation'),
            store.dispatch('fetchExperience'),
            store.dispatch('fetchSubject')
        }, 1000);
        AOS.init();
    });
    </script>
    
    <style>
    /* Bubble Animation Styles */ 
    .bubble-container-three
    { 
        position: absolute; 
        width: 95%; 
        height: 100%; 
        z-index: 0; 
    } 
    
    .bubbles-three
    { 
        position: relative; 
        width: 100%; 
        height: 100%; 
        overflow: hidden; 
        z-index: 0; 
    } 
    
    .bubbles-three span 
    { 
        position: absolute; 
        border-radius: 50%; 
        animation: blurAnimate 5s ease-in-out infinite; 
        z-index: 0; 
    } 
    
    .bubbles-three span:nth-child(1) { 
        width: 50px; 
        height: 50px; 
        top: 50%; 
        left: 70%; 
        background: #a459d1; 
        box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75; 
        animation-duration: 6s; 
        z-index: 0; 
    }

    .bubbles-three span:nth-child(2) { 
        width: 120px; 
        height: 120px; 
        top: 73%; 
        left: 85%; 
        background: #a459d1; box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75; 
        animation-duration: 8s; 
        z-index: 0; 
    } 

    .bubbles-three span:nth-child(3) { 
        width: 30px; 
        height: 30px; 
        top: 83%; 
        left: 60%; 
        background: #a459d1; box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75; 
        animation-duration: 8s; 
        z-index: 0; 
    } 
    
    @keyframes 
    blurAnimate { 
        0%, 100% 
        { box-shadow: 0 0 0 10px #a86eca, 0 0 30px #bf91db, 0 0 60px #efbbff; } 
        50% 
        { box-shadow: 0 0 0 20px #a86eca, 0 0 50px #bf91db, 0 0 100px #efbbff; } 
    }

    .edu-exp-container {
        margin-top: 6rem;
    }
    
    .edu-exp-container h1 {
        color: var(--secondary);
        font-size: 3.2rem;
        letter-spacing: 0.1em;
        text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
    }
    
    .edu-exp-content {
        display: flex;
        justify-content: center;
        text-align: left;
        z-index: 10;
    }
    
    .education-content {
        width: 44vw;
        /* background-color: pink; */
        margin-left: 2rem;
    }
    
    .experience-content {
        width: 44vw;
        /* background-color: purple; */
    }

    .experience-content .edu-block-border{
        margin-left: 5.5rem;
    }

    .experience-content h1{
        margin-left: 5.5rem;
    }
    
    .edu-block-border {
        position: relative;
        width: 80%;
        padding: 5px;
        border-radius: 0.8rem;
        background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
        background-size: 200% 200%;
        animation: border-move 4s linear infinite;
        margin-top: 2rem;
    }
    
    @keyframes border-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    .edu-block {
        position: relative;
        width: 100%;
        padding: 1rem;
        background-color: #212121;
        border-radius: 0.3rem;
        text-align: left;
    }
    
    .edu-block p {
        color: var(--alternative);
        font-weight: bold;
    }

    .edu-block h5 {
        color: var(--secondary);
        text-transform: uppercase;
        font-weight: 600;
    }

    .edu-block h6 {
        color: var(--secondary);
        font-weight: 400;
    }

    .subjcets-content p{
        color: var(--secondary);
        font-size: 1.1rem;
        font-weight: 700;
    }

    /* Media query for 555px and less*/
    @media (max-width: 555px){
        .edu-exp-container {
        margin-top: 3rem;
        }

        .edu-exp-container h1 {
        color: var(--secondary);
        font-size: 2.5rem;
        letter-spacing: 0.1em;
        text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
        }

        .edu-exp-content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        }

        .education-content {
        width: 100%;
        /* background-color: pink; */
        margin-left: 0rem;
        }

        .experience-content {
        width: 100%;
        margin-top: 3rem;
        /* background-color: purple; */
    }

    .edu-block-border{
        margin: auto;
        margin-top: 2rem;
    }

    .experience-content .edu-block-border{
        margin-left: 0rem;
        margin: auto;
        margin-top: 2rem;
    }

    .experience-content h1{
        margin-left: 0rem;
    }

    .bubble-container-three
    { 
        display: none;
    } 
    }

    /* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px){
    .edu-exp-container {
        margin-top: 3rem;
        }
        .edu-exp-content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        }

        .education-content {
        width: 100%;
        /* background-color: pink; */
        margin-left: 0rem;
        }

        .experience-content {
        width: 100%;
        margin-top: 3rem;
        /* background-color: purple; */
    }

    .edu-block-border{
        margin: auto;
        margin-top: 2rem;
    }

    .experience-content .edu-block-border{
        margin-left: 0rem;
        margin: auto;
        margin-top: 2rem;
    }

    .experience-content h1{
        margin-left: 0rem;
    }

    .edu-block p {
        color: var(--alternative);
        font-weight: bold;
        font-size: 1.3rem;
    }

    .edu-block h5 {
        color: var(--secondary);
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.5rem;
    }

    .edu-block h6 {
        color: var(--secondary);
        font-weight: 400;
        font-size: 1.3rem;
    }

    .subjcets-content p{
        color: var(--secondary);
        font-size: 1.3rem;
        font-weight: 700;
    }

    .bubble-container-three
    { 
        display: none;
    } 
}
    </style>
    