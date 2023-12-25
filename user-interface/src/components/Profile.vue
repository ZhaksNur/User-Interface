<template>
    <div class="profile-wrapper">
        <div class="profile-content">
            <img :src="user.userImage" class="profile-image">
            <p class="profile-username">{{ user.username }}</p>
            <Button :styleValues="adminStyleButton">admin</Button>
            <p class="lastVisit">{{ user.lastVisit }}</p>
            <Button :styleValues="logOutButton">Log Out</Button>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default{
    components: {
        Button,
    },
    props:{
        user: Object,
        adminStyleButton: Object,
        logOutButton: Object
    }
}

</script>

<style>
.profile-wrapper{
    width: 220px;
    height: 290px;
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
.profile-content{
    width: 90%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.profile-image{
    width: 100px;
}
.profile-username{
    font-size: 16px;
    font-weight: 600;
}
.lastVisit{
    color: #3c83da;
    font-size: 14px;
    font-weight: 600;
}
</style>