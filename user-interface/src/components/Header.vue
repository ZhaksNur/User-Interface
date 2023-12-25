<!-- Header.vue -->
<template>
    <header :style="headerStyle">
        <div class="input-wrapper">
          <label :style="labelStyle">
            <Input :placeholder="'Search...'" :style="inputStyle"></Input>
            <Button :leftIcon="iconSearch" :iconStyle="iconStyle" :styleValues="buttonStyle"></Button>
          </label>
        </div>
        <div :style="iconWrapper">
        <div v-for="icon in icons" @click="handleIconClick(`${icons.indexOf(icon)}`)" :style="iconStyle">
            <img :src="icon" :style="iconStyle" alt="">
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import Input from './Input.vue'
  import Button from './Button.vue'


  export default {
    props : {
        headerStyle: Object,
        inputStyle: Object,
        labelStyle: Object,
        iconWrapper: Object,
        icons: Array,
        iconStyle: Object,
        iconSearch: String,
        buttonStyle: Object,
    },
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      search() {
        console.log('Search Query:', this.searchQuery);
      },
      handleIconClick(iconName) {
        console.log('Icon clicked:', iconName);
      },
    },
    components: {
        Input,
        Button,
    }
  };
  </script>
  
  <style scoped>
  .input-wrapper{
    position: relative;
    display: flex;
  }

  label {
    display: flex;
  }
  </style>
  