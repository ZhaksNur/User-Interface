

<template>
  <div class="dropdown">
    <img v-if="icon" :src="icon">
    <div>
    <button @click="toggleDropdown" :style="buttonStyle">
      {{ buttonText }}
      <i :class="['arrow-icon', { 'arrow-up': isOpen, 'arrow-down': !isOpen }]"></i>
    </button>
    <transition name="fade">
      <div v-show="isOpen" class="dropdown-content">
        <slot></slot>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    buttonText: String,
    buttonStyle: Object,
    icon: String,
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown(event) {
      event.stopPropagation();
      this.isOpen = false;
    },
  },
};
</script>

<style>
.dropdown{
  position: relative;
  display: flex;
  align-items: start;
}
.dropdown img {
  margin: 10px 5px;
}
</style>
