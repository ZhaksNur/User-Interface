<template>
    <PageHeader :title="title" :text="text" :date="date" :icon="icon"></PageHeader>
    <div class="button-wrapper">
        <Button :style="buttonStyle" :rightIcon="plusIcon" :iconStyle="iconStyle">Add New Application</Button>
        <Input :placeholder="'Search Application'" :style="inputStyle"></Input>
    </div>
    <Cards :cards="cards"></Cards>
</template>

<script>
import PageHeader from './PageHeader.vue';
import icon from '../assets/rotate.svg'
import SwitchButton from './SwitchButton.vue'
import Button from './Button.vue'
import plusIcon from '../assets/plus.svg'
import Input from './Input.vue'
import Cards from './Cards.vue'
import appleIcon from '../assets/apple.svg'

export default{
    components:{
        PageHeader,
        SwitchButton,
        Button,
        Input,
        Cards,
    },
    data(){
        return{
            title: 'Connected Apps',
            text: 'Data Refreshed',
            date: 'December 24, 2023 13:52 PM',
            icon: icon,
            buttonStyle:{
                wpadding: '10px 15px',
                backgroundColor: '#0eb9a1',
                border: 'none',
                borderRadius: '30px',
                position: 'realtive',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                justifyContent:'center'
            },
            plusIcon: plusIcon,
            inputStyle:{
                width: '200px',
                height: '20px',
                backgroundColor: 'white',
                border: '1px solid grey',
                borderRadius: '5px',
            },
            cards: [
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                {
                    img: appleIcon,
                    title:'Tracking App',
                    text: 'Real-time order tracking and a list of bestselling products from the shops',
                    settings: 'View Settings'
                },
                
            ],
            iconStyle:{
                width:'20px',
                height:'20px'      
            }
        }
    },
}
</script>

<style>
.button-wrapper{
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
</style>