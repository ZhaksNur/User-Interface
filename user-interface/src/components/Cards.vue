<template>
    <div class="card-wrapper">
        <div class="card" v-for="card in cards">
            <div class="head">
                <img class="apple-icon" :src="card.img">
                <p class="title">{{ card.title }}</p>
                <SwitchButton></SwitchButton>
            </div>
            <div class="text-wrapper">
                <p class="text">{{card.text}}</p>
            </div>
            <div class="settings-wrapper">
                <a class="settings">{{ card.settings }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchButton from './SwitchButton.vue'

export default{
    components: {
        SwitchButton,
    },
    props:{
        cards: Array,
    }
}
</script>

<style>
.card-wrapper{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
}
.card{
    width: 300px;
    height: 200px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 5px;
    box-shadow: 0px 0px 2px 0px gray;
    border-radius: 7px;
}
.head{
    width: 85%;
    height: 40%;
    position: relative;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
}
.apple-icon{
    width: 40px;
    height: 40px;
    box-shadow: 0px 0px 2px 0px gray;
    padding: 5px;
    border-radius: 10px;
}
.text-wrapper{
    width: 85%;
    position: relative;
    display: flex;
    align-self: center;
}
.title{
    font-size: 18px;
    font-weight: 600;
}
.text{
    font-size: 12px;
}
.settings-wrapper{
    width: 85%;
    position: relative;
    display: flex;
    align-self: center;
}
.settings{
    color: #3c83da;
    font-size: 12px;
    font-weight: 600;
}
</style>