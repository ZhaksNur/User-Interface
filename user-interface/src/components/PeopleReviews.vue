<template>
    <div class="people-reviews-wrapper" v-for="review in reviews" :style="review.color">
        <div class="people-info">
            <img class="people-info-img" :src="review.userImage" alt="">
            <div class="people-info-name">
                <p class="people-name">{{ review.name }}</p>
                <p class="people-email">{{ review.email }}</p>
            </div>
        </div>
        <div class="people-rate">
            <img class="people-rate-stars" :src="review.starsImg" alt="">
            <span class="people-rate-num">{{ review.starsCount }}</span>
        </div>
        <div class="people-input-wrapper">
            <SelectInput :options="options"></SelectInput>
        </div>
        <div class="review-date-wrapper">
            <img :src="clock" class="clock-wrapper">
            <div class="review-date">
                <p class="date">{{ review.date }}</p>
                <p class="time">at {{ review.time }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import SelectInput from './SelectInput.vue';
import clock from '../assets/clock.svg'

export default{
    props:{
        reviews: Array,
    },
    components:{
        SelectInput
    },
    data(){
        return{
            options: [
                { value: 1, label: "Some text" },
                { value: 2, label: "Some text" },
                { value: 3, label: "Some text" },
            ],
            clock: clock,
        }
    }
}
</script>

<style>
.people-reviews-wrapper{
    width: 100%;
    height: 90px;
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 2px 0px gray;
    justify-content: space-between;
}

.people-reviews-wrapper:last-child{
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}

.people-info{
    position: relative;
    display: flex;
    margin-left: 10px;
}
.people-info-img{
    width: 50px;
}
.people-info-name{
    position: relative;
}
.people-name{
    font-size: 16px;
    margin: 0;
    font-weight: 600;
}
.people-email{
    font-size: 12px;
    margin: 0;
    color: #2596be;
}
.people-rate{
    position: relative;
    display: flex;
    align-items: center;
}
.people-rate-stars{
    width: 150px;
}
.review-date-wrapper{
    position: relative;
    display: flex;
    margin-right: 20px;
}
.clock-wrapper{
    margin-bottom: 26px;
}
.date{
    margin: 0;
    font-weight: 600;
    font-size: 12px;
}
.time{
    margin: 0;
    font-size: 12px;
}
</style>