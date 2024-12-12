<template>
  <div class="about-container" id="about" data-aos="fade-up"  data-aos-duration="3000">
      <div class="bubble-container-two">
    <div class="bubbles-two">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
      <h1>About</h1>
      <div class="about-content">
          <div class="about-text">
          <p v-if="about">
              <span>{{ about[0]}}</span>
          </p>
            <Spinner v-else/>
          <h4>QUOTE:</h4>
          <p v-if="quote">
              <span>{{ quote[0]}}</span>
          </p>
          <Spinner v-else/>
          </div>
      </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const about = computed(() => store.state.about)
  const quote = computed(() => store.state.quote)
  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchAbout'),
      store.dispatch('fetchQuote')
    }, 1000)
    AOS.init();
  })
</script>

<style>
.about-container {
position: relative;
overflow: hidden;
margin-top: 6rem;
}

.bubble-container-two {
position: absolute;
width: 100%;
height: 100%;
z-index: 0;
}

.bubbles-two {
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
}

.bubbles-two span {
position: absolute;
border-radius: 50%;
animation: blurAnimate 5s ease-in-out infinite;
}

.bubbles-two span:nth-child(1) {
width: 30px;
height: 30px;
top: 65%;
left: 8%;
background: #a459d1;
box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
animation-duration: 6s;
}

.bubbles-two span:nth-child(2) {
width: 70px;
height: 70px;
top: 68%;
left: 80%;
background: #a459d1;
box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
animation-duration: 8s;
}

.bubbles-two span:nth-child(3) {
width: 30px;
height: 30px;
top: 5%;
left: 75%;
background: #a459d1;
box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
animation-duration: 8s;
}

@keyframes blurAnimate {
0%,
100% {
  box-shadow: 0 0 0 10px #a86eca, 0 0 30px #bf91db, 0 0 60px #efbbff;
}
50% {
  box-shadow: 0 0 0 20px #a86eca, 0 0 50px #bf91db, 0 0 100px #efbbff;
}
}

.about-container h1 {
color: var(--secondary);
font-size: 3.2rem;
letter-spacing: 0.1em;
text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.about-content {
display: flex;
justify-content: space-around;
padding-top: 4rem;
padding-bottom: 4rem;
}

.about-text {
width: 60vw;
color: var(--secondary);
font-size: 1.2rem;
text-align: center;
display: flex;
flex-direction: column;
order:1;
}

.about-text h4 {
font-weight: bold;
padding-top: 2rem;
}

.about-image{
  display: flex;
  order: 0;
}

img[alt="leahAbout"] {
width: 24rem;
height: auto;
border-radius: 50%;
box-shadow: 0 0 0.5rem 0.8rem var(--alternative),
  0 0 0.5rem 1.2rem var(--secondary);
}

/* Media query for 555px and less*/
@media (max-width: 555px)
{
.about-container h1 {
color: var(--secondary);
font-size: 2.5rem;
letter-spacing: 0.1em;
text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
}

.about-content {
display: flex;
justify-content: center;
padding-top: 2rem;
padding-bottom: 2rem;
flex-direction: column;
align-items: center;
}

.bubble-container-two{
  display: none;
}

.about-text {
width: 75%;
color: var(--secondary);
font-size: 1.2rem;
text-align: center;
display: flex;
flex-direction: column;
order: 0;
}

img[alt="leahAbout"] {
width: 16rem;
}

.about-image{
  display: flex;
  order: 1;
  margin-top: 3rem;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
  .about-content {
display: flex;
justify-content: center;
padding-top: 2rem;
padding-bottom: 4rem;
flex-direction: column;
align-items: center;
}

.bubble-container-two{
  display: none;
}

.about-text {
width: 80%;
color: var(--secondary);
font-size: 1.5rem;
text-align: center;
display: flex;
flex-direction: column;
order: 0;
}

.about-text h4 {
font-size: 1.8rem;
}

img[alt="leahAbout"] {
width: 24rem;
}

.about-image{
  display: flex;
  order: 1;
  margin-top: 3rem;
}
}

</style>