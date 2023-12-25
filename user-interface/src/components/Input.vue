<template>
    <input :type="type" :placeholder="placeholder" :style="inputStyle" v-model="inputValue"/>
</template>

<script>
export default{
    props: {
        type: String,
        inputStyle: Object,
        placeholder: String,
    },
    data() {
      return {
        inputValue: '',
      };
    },
}
</script>