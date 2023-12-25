<template>
    <div class="select-input">
      <label v-if="label" :for="id">{{ label }}</label>
      <select :style="selectStyle" :id="id" v-model="selectedOption" @change="handleChange">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: '',
      },
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: [String, Number],
        default: '',
      },
      selectStyle: Object,
    },
    data() {
      return {
        selectedOption: this.value,
      };
    },
    methods: {
      handleChange() {
        this.$emit('input', this.selectedOption);
      },
    },
  };
  </script>
  
  <style scoped>
  .select-input {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  select {
    width: 320px;
    padding: 2px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  </style>
  