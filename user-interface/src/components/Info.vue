<template>
    <div class="info-wrapper">
        <div class="info-content">
            <div v-for="info in infos">
                <p>
                    <img v-if="info.leftInfoIcon" :src="info.leftInfoIcon" class="info-icon">
                    {{ info.text }}
                    <img v-if="info.rightInfoIcon" :src="info.rightInfoIcon" class="info-icon">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        infos: Array,
        leftInfoIcon: Object,
        rightInfoIcon: Object,
        infoWrapperStyle: Object,
    }
}
</script>

<style>
.info-wrapper{
    width: auto;
    height: auto;
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 0px 0px 2px 0px gray;
    border-radius: 7px;
}
.info-content{
    width: 90%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
}
.info-icon{
    width: 14px;
}
</style>