<template>
    <div :style="bannerWrapperStyle">
        <div v-for="banner in banners" :style="banner.bannerStyle">
            <img v-if="banner.leftImage" :style="banner.imageStyle" :src="banner.leftImage"/>
            <div class="text-content" :style="textContentStyle">
                <div :style="textWrapperStyle">
                    <h1 v-if="banner.title" :style="h1Style">{{ banner.title }}</h1>
                    <p v-if="banner.mainText" :style="pStyle">{{ banner.mainText }}</p>
                    <Button v-if="banner.buttonText" :style="buttonStyle">{{ banner.buttonText }}</Button>
                </div>
            </div>
            <img v-if="banner.rightImage" :style="imageStyle" :src="banner.rightImage"/>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default{
    components:{
        Button
    },
    props:{
        banners: Array,
        bannerStyle: Object,
        imageStyle: Object,
        h1Style: Object,
        textContentStyle: Object,
        textWrapperStyle: Object,
        pStyle: Object,
        buttonStyle: Object,
        bannerWrapperStyle: Object,
    }
}
</script>