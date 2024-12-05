<template>
  <div>
    <!-- Menu Section -->
    <div :class="['menu-section', { on: menuOpen }]">
      <div class="logo">
        <a href="#home">
          <img class="img-fluid" src="https://leahbasson.github.io/MyImages/images/newLogoPortfolio3.png" alt="logo" loading="lazy">
        </a>
      </div>
      
      <div class="menu-toggle" @click="toggleMenu">
        <div class="one" :style="lineStyle('one')"></div>
        <div class="two" :style="lineStyle('two')"></div>
        <div class="three" :style="lineStyle('three')"></div>
      </div>
    </div>

    <!-- Navigation Section -->
    <nav>
      <ul role="navigation" :class="{ hidden: !menuOpen }">
        <li v-for="item in menuItems" :key="item.text">
          <a :href="item.link" @click="handleNavClick(item.link)">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { text: 'home', link: '#home' },
        { text: 'about', link: '#about' },
        { text: 'edu/exp', link: '#EduExp' },
        { text: 'projects', link: '#projects' },
        { text: 'contact', link: '#contact' }
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    lineStyle(line) {
      if (this.menuOpen) {
        if (line === 'one') return { transform: 'rotate(45deg) translate(7px, 7px)' };
        if (line === 'two') return { opacity: 0 };
        if (line === 'three') return { transform: 'rotate(-45deg) translate(8px, -10px)' };
      }
      return {};
    },
    handleNavClick(link) {
      // Close the menu
      this.menuOpen = false;

      // Scroll to the target section smoothly
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>


<style scoped>
.menu-section {
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 30px 80px;
  background-color: var(--primary);
  position: fixed;
  z-index: 10;
}

.logo a img {
  width: 100px;
  height: auto;
  transition: all .5s;
  
  &:hover{
      transform: scale(1.2);
  }
}

.menu-toggle {
  width: 40px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2.5rem;
  position: relative;
}


.one,
.two,
.three {
  width: 100%;
  height: 5px;
  background: white;
  transition: transform 0.3s, opacity 0.3s;
}

nav {
  position: fixed;
  top: 130px; 
  width: 100%;
  background-color: var(--primary);
  z-index: 9;
  text-align: center;
}

nav ul {
  margin: 0;
  padding: 26px 0;
  list-style: none;
  font-size: 38px;
}

nav ul.hidden {
  display: none;
}

nav ul a {
  transition: background-color 0.5s;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  line-height: 2;
  display: block;
}

nav ul a:hover {
  background-color: var(--alternative);
}

/* Media query for 555px and less*/
@media (max-width: 555px)
{
  nav ul {
  margin: 0;
  padding: 26px 0;
  list-style: none;
  font-size: 20px;
}

.menu-section {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 30px 20px;
}

.menu-toggle {
  margin-right: 1.6rem;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
  nav ul {
  margin: 0;
  padding: 26px 0;
  list-style: none;
  font-size: 20px;
}

.menu-section {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 30px 60px;
}

.menu-toggle {
  margin-right: 1.6rem;
}
}
</style>
