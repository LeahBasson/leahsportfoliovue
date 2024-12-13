<template>
  <div>
    <!-- Menu Section -->
    <div :class="['menu-section', { on: menuOpen }]">
      <div class="logo">
        <a href="#home" @click="goToHome">
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
    <nav :class="{ open: menuOpen }">
      <ul role="navigation">
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
        { text: 'reach me', link: '#contact' },
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
      this.menuOpen = false;
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    goToHome(event) {
      event.preventDefault(); // Prevent default anchor link behavior
      this.menuOpen = false; // Close the menu
      const homeSection = document.querySelector('#home'); // Find the home section
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to home
      }
    },
  },
};
</script>

<style scoped>
/* Menu Section */
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
  transition: all 0.5s;
}

.logo a img:hover {
  transform: scale(1.2);
}

.menu-toggle {
  width: 40px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2.5rem;
}

.one,
.two,
.three {
  width: 100%;
  height: 5px;
  background: white;
  transition: transform 0.3s, opacity 0.3s;
}

/* Navigation Section */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav.open {
  transform: translateY(0);
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 5.9rem;
}

/* nav ul li {
  margin: 20px 0;
} */

nav ul a {
  transition: background-color 0.5s;
  text-decoration: none;
  color: white;
  font-size: 4.7rem;
  text-transform: uppercase;
  transition: color 0.3s;
}

nav ul a:hover {
  color: var(--alternative);
}

/* Media query for 555px and less */
@media (max-width: 555px) {
  .menu-section {
    padding: 30px 20px;
  }
  .menu-toggle {
    margin-right: 1.6rem;
  }
  nav ul a {
    font-size: 2.8rem;
  }
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px) {
  .menu-section {
    padding: 30px 60px;
  }
  .menu-toggle {
    margin-right: 1.6rem;
  }
  nav ul a {
    font-size: 4.2rem;
  }
}
</style>
