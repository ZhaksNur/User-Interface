<template>
    <button :style="styleValues">
        <img v-if="leftIcon" :src="leftIcon" :style="iconStyle"/>
        <slot></slot>
        <img v-if="rightIcon" :src="rightIcon" :style="iconStyle"/>
        </button>
</template>

<script>
export default{
    props: {
        leftIcon: String,
        styleValues: Object,
        rightIcon: String,
        iconStyle: Object
    },
}
</script>
<style scoped>
button{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>