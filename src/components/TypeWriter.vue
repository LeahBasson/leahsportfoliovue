<template>
    <div>
      <h1>
        <!-- The words with typewriter effect -->
        <span class="txt"></span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Initialize typewriter effect
      const txtElement = this.$el.querySelector('.txt');
      const words = ["Frontend Developer", "Backend Developer", "Web Designer"];
      const wait = 3000; // Time in milliseconds to wait between words
      this.typeWriter(txtElement, words, wait);
    },
    methods: {
      typeWriter(txtElement, words, wait = 3000) {
        let wordIndex = 0;
        let txt = '';
        let isDeleting = false;
  
        const type = () => {
          const currentWord = words[wordIndex % words.length];
          if (isDeleting) {
            txt = currentWord.substring(0, txt.length - 1);
          } else {
            txt = currentWord.substring(0, txt.length + 1);
          }
          txtElement.textContent = txt;
  
          let typeSpeed = isDeleting ? 100 : 200;
          if (!isDeleting && txt === currentWord) {
            typeSpeed = wait; // Pause at end of word
            isDeleting = true;
          } else if (isDeleting && txt === '') {
            isDeleting = false;
            wordIndex++;
            typeSpeed = 500; // Pause before typing next word
          }
  
          setTimeout(type, typeSpeed);
        };
  
        type();
      },
    },
  };
  </script>
  
  <style scoped>
  /* ADD CURSOR */
  .txt {
    border-right: 0.08rem solid #fff;
    /* Animating the cursor */
    animation: blink 0.6s infinite;
    color: var(--secondary);
    font-size: 3.2rem;
    letter-spacing: .1em;
    text-shadow: 
      -1px -1px 1px #111, 
      2px 2px 1px var(--alternative);
  }
  
  /* ANIMATION */
  @keyframes blink {
    0% {
      border-right: 0.08rem solid rgba(255, 255, 255, 1);
    }
    100% {
      border-right: 0.08rem solid rgba(255, 255, 255, 0.2);
    }
  }

/* Media query for 555px and less*/
@media (max-width: 555px)
{
  .txt {
    font-size: 1.6rem;
  }
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
  .txt {
    font-size: 2.5rem;
  }
}

  </style>
  