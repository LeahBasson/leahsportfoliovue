<template>
  <div>
    <!-- Menu Section -->
    <div :class="['menu-section', { on: menuOpen }]">
      <div class="logo">
        <a href="#">
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
          <a :href="item.link">{{ item.text }}</a>
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
        { text: 'work', link: '#' },
        { text: 'about', link: '#' },
        { text: 'resume', link: '#' },
        { text: 'contact', link: '#' },
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
  },
};
</script>

<style scoped>
.menu-section {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: space-between; /* Space out items: logo on left, menu toggle on right */
  padding: 30px 100px;
}

.logo a img {
  width: 100px;
  height: auto;
}

.menu-toggle {
  width: 40px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  position: absolute;
  top: 110px; /* Adjust as needed */
  width: 100%;
  background-color: var(--primary);
  z-index: 9;
  text-align: center;
}

nav ul {
  margin: 0;
  padding: 26px 0;
  list-style: none;
  font-size: 47px;
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
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
