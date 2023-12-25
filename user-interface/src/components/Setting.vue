<template>
        <PageHeader :title="title" :text="text" :date="date" :icon="icon"></PageHeader>
        <div class="settings-wrapper">
            <div class="settings-wrapper-left">
                <Profile :user="user" :adminStyleButton="adminStyleButton" :logOutButton="logOutButton"></Profile>
                <Info :infos="infos1"></Info>
                <Info :infos="infos2"></Info>
            </div>
            <div class="settingsWrapperRight">
                <ProfileDetails :selectValue="selectOptions"></ProfileDetails>
            </div>
        </div>
</template>

<script>
import PageHeader from './PageHeader.vue';
import icon from '../assets/rotate.svg'
import Profile from './Profile.vue';
import userIcon from '../assets/user.svg'
import Info from './Info.vue';
import bell from '../assets/bell.svg'
import messages from '../assets/message.svg'
import email from '../assets/email.svg'
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import ProfileDetails from './ProfileDetails.vue';

export default{
    components:{
    PageHeader,
    Profile,
    Info,
    ProfileDetails,
},
    data(){
        return{
            title: 'Settings',
            text: 'Data Refreshed',
            date: 'December 24, 2023 13:52 PM',
            icon :icon,
            user: {
                userImage: userIcon, 
                username:'User User',
                lastVisit: 'last visit 24/12/2023'
            },
            adminStyleButton :{
                width: '100px',
                backgroundColor: '#fc5574',
                border: 'none',
                color: 'white',
                padding: '5px',
                borderRadius: '10px'
            },
            logOutButton:{
                width: '150px',
                backgroundColor: '#045ccc',
                border: 'none',
                padding: '5px',
                color: 'white',
                borderRadius: '25px'
            },
            infos1:[
                {
                    leftInfoIcon: bell,
                    text: 'Bell'
                },
                {
                    leftInfoIcon: messages,
                    text: 'Messages'
                }
            ],
            infos2:[
                {
                    leftInfoIcon: email,
                    text: 'user@gmail.com'
                },
                {
                    leftInfoIcon: location,
                    text: 'street Street Home 1'
                },
                {
                    leftInfoIcon: phone,
                    text: '+11111111111'
                }
            ],
            selectOptions: [
                { value: 'usa', label: 'USA' },
                { value: 'kazakhstan', label: 'Kazakhstan' },
                { value: 'japan', label: 'Japan' },
                { value: 'korea', label: 'Korea'}
            ],
        }
    }
}
</script>