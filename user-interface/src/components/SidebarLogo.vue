<template>
    <div :style="wrapperStyle">
        <img v-if="src" :src="src" :style="imgStyle"/>
        <Logo v-else/>
        <span :style="textStyle"><slot></slot></span>
    </div>
</template>

<script>
import Logo from './Logo.vue'
export default{

    components:{
        Logo
    },
    props:{
        wrapperStyle: Object,
        src: String,
        imgStyle: Object,
        textStyle: Object,
    }
}
</script>