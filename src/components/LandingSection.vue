<template>
    <div class="landing-container">
       <div class="bubble-container">
            <div class="bubbles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="greeting">
            <h3 class="display-3 text-white">Hi, I'm <span>Leah Basson</span></h3>
            <div>
                <TypeWriter />
            </div>
            <div>
                <ButtonEffect 
      label="Download my CV" 
      href="https://drive.google.com/uc?export=download&id=1aFpnsqtc-Qo8JTzL5dXOysI_jq-0nyqs"
    />
            </div>
            <div class="home-icons">
            <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
            <a class="lnk text-white" href="https://github.com/LeahBasson/leahsportfoliovue.git" target="_blank"><i class="bi bi-github"></i></a>
            <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
        <div class="landing-image">
            <img class="img-fluid" src="https://leahbasson.github.io/MyImages/images/landingImage.png" alt="leah" loading="eager">
        </div>
    </div>
</template>

<script>
import TypeWriter from '@/components/TypeWriter.vue';
import ButtonEffect from './ButtonEffect.vue';

export default {
 name: 'LandingSection',

 components: {
  TypeWriter,
  ButtonEffect
 }
 
}
</script>

<style>
.landing-container
{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0rem;
    padding-top: 160px;
}

.greeting{
    width: 48vw;
    order: 0;
    z-index: 1;
    height: 65vh;
    margin-top: 4rem;
    text-align: start;
}

.greeting h3 span{
    font-weight: bold;
    font-size: 4rem;
}

.greeting h3{
    font-size: 3rem;
}

.landing-image{
    margin-top: -10rem;
    margin-right: 2rem;
}

img[alt='leah']{
    width: 24rem;
    height: auto;
    border-radius: 50%;
    /* border: 2px solid var(--secondary); */
    margin-top: 2rem;
    /* box-shadow: 0 0 0.8rem var(--secondary), 0 0 1rem var(--alternative); */
    box-shadow: 
        0 0 0.5rem 0.8rem var(--alternative), /* Outer glow */
        0 0 0.5rem 1.2rem var(--secondary); /* Additional layer for a wider effect */
}

.btnResume:hover{
    background-color: var(--alternative);
}

.home-icons{
    display: flex;
    width: 20rem;
    gap: 2rem;
    margin-top: 2rem;
    font-size: 1.3rem;
}

.home-icons i:hover{
    color: var(--alternative);
}

.bubble-container
{
    order: 1;
    position: absolute;
    width: 98%;
    height: 70vh;
    overflow: hidden;
    z-index: 0;
}

.bubbles
{
    position: absolute;
    width: 100%;
    height: 100%;
}

/* Bubbles */
.bubbles span
{
    position: absolute;
    border-radius: 50%;
    animation: blurAnimate 5s ease-in-out infinite;
}

/* Individual styles for bubbles with unique positions and sizes */
.bubbles span:nth-child(1)
{
    width: 30px;
    height: 30px;
    top: 15%; 
    left: 50%;
    background: #A459D1;
    box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
    animation-duration: 6s;
}

.bubbles span:nth-child(2)
{
    width: 60px;
    height: 60px;
    top: 60%; 
    left: 35%;
    background: #A459D1;
    box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
    animation-duration: 8s;
}

.bubbles span:nth-child(3)
{
    width: 30px;
    height: 30px;
    top: 80%; 
    left: 4%;
    background: #A459D1;
    box-shadow: 0 0 0 10px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
    animation-duration: 10s;
}

.bubbles span:nth-child(4)
{
    width: 30px;
    height: 30px;
    top: 80%; 
    left: 90%;
    background: #A459D1;
    box-shadow: 0 0 0 15px #ff2d7544, 0 0 30px #ff2d75, 0 0 60px #ff2d75;
    animation-duration: 7s;
}

/* Animation for blur effect */
@keyframes blurAnimate {
    0%, 100% {
        box-shadow: 0 0 0 10px #A86ECA, 
                    0 0 30px #BF91DB, 
                    0 0 60px #EFBBFF;
    }
    50% {
        box-shadow: 0 0 0 20px #A86ECA, 
                    0 0 50px #BF91DB, 
                    0 0 100px #EFBBFF;
    }
}

/* Media query for 555px and less*/
@media (max-width: 555px)
{
.landing-container
{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 160px;
}

.bubble-container{
    display: none;
}

.landing-image{
    margin-top: 1rem;
    margin-right: 0rem;
}

img[alt='leah']{
    width: 16rem;
    margin-bottom: 2rem;
}

.greeting{
    width: 100%;
    order: 0;
    z-index: 1;
    height: auto;
    margin-top: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.home-icons{
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    justify-content: center;
}

.greeting h3 span{
    font-weight: bold;
    font-size: 2rem;
}

.greeting h3{
    font-size: 1.5rem;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
.landing-container
{
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* gap: 2rem; */
    padding-top: 160px;
}

.bubble-container{
    display: none;
}

.landing-image{
    margin-top: 1rem;
    margin-right: 0rem;
}

img[alt='leah']{
    width: 24rem;
    margin-bottom: 2rem;
}

.greeting{
    width: 100%;
    order: 0;
    z-index: 1;
    height: auto;
    margin-top: 4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.home-icons{
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
    font-size: 1.8rem;
    justify-content: center;
}

.greeting h3 span{
    font-weight: bold;
    font-size: 3rem;
}

.greeting h3{
    font-size: 2.5rem;
}
}
</style>