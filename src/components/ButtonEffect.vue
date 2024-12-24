<template>
  <a
    class="btn-effect"
    :href="href || 'javascript:void(0)'"
    @click="handleClick"
    @mouseenter="updateSpanPosition"
    @mouseleave="resetSpanPosition"
    v-bind="extraAttributes"
  >
    {{ label }}
    <span :style="{ top: `${spanPosition.top}px`, left: `${spanPosition.left}px` }"></span>
  </a>
</template>

<script>
export default {
  name: "ButtonEffect",
  props: {
    label: { type: String, required: true },
    href: { type: String, default: null },
    action: { type: Function, default: null },
    extraAttributes: { type: Object, default: () => ({}) }, // Allow passing additional attributes
  },
  data() {
    return {
      spanPosition: { top: -9999, left: -9999 },
    };
  },
  methods: {
    updateSpanPosition(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      this.spanPosition = {
        top: event.clientY - rect.top,
        left: event.clientX - rect.left,
      };
    },
    resetSpanPosition() {
      this.spanPosition = { top: -9999, left: -9999 };
    },
    handleClick(event) {
      if (this.href) return;
      if (this.action) {
        event.preventDefault();
        this.action();
      }
    },
  },
};
</script>

<style scoped>
.btn-effect {
  position: relative;
  display: block;
  overflow: hidden;
  width: 12rem;
  height: 3rem;
  padding: 12px 22px;
  border: 1px solid var(--alternative);
  color: var(--secondary);
  text-decoration: none;
  transition: 0.5s ease-in-out;
  background-color: transparent;
  text-align: center;
  border-radius: 0.5rem;
  margin-top: 2rem;
  z-index: 2 !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn-effect span {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: var(--alternative);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  z-index: 1;
  mix-blend-mode: screen;
}

.btn-effect:hover {
  color: var(--secondary);
  z-index: 3 !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.btn-effect:hover span {
  width: 225%;
  height: 562.5px;
  z-index: 1 !important;
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px)
{
.btn-effect {
  position: relative;
  display: block;
  overflow: hidden;
  width: 16rem;
  height: 3.5rem;
  padding: 10px 22px;
  border: 1px solid var(--alternative);
  color: var(--secondary);
  text-decoration: none;
  transition: 0.5s ease-in-out;
  background-color: transparent;
  text-align: center;
  border-radius: 0.5rem;
  margin-top: 2rem;
  font-size: 1.4rem;
}
}
</style>
