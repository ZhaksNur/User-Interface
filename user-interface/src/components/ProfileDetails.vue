<template>
    <div class="profile-detail-wrapper">
        <div class="profile-detail-title">
            My Profile Detail
        </div>
        <div class="profile-detail-inputs">
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">First Name</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Country</p>
                <SelectInput :options="selectValue"></SelectInput>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Last Name</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">City</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Email</p>
                <Input :type="'email'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">State</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Phone Number</p>
                <Input :type="'tel'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Zip Code</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Password</p>
                <Input :type="'password'" :inputStyle="inputStyle"></Input>
            </div>
            <div class="profile-details-input-wrapper">
                <p class="profile-detail-inputs-text">Address</p>
                <Input :type="'text'" :inputStyle="inputStyle"></Input>
            </div>
        </div>
        <Button :styleValues="buttonStyle">Update Information</Button>
    </div>
</template>

<script>
import Input from './Input.vue';
import SelectInput from './SelectInput.vue';
import Button from './Button.vue';

export default{
    components:{
        Input,
        SelectInput,
        Button
    },
    props:{
        selectValue: Array,

    },
    data(){
        return{
            buttonStyle:{
                width: '200px',
                backgroundColor: '#18c2a6',
                color: 'white',
                displat: 'flex',
                alignSelf: 'self-start',
                margin: '20px',
                padding: '9px',
                border: 'none',
                borderRadius: '30px'
            },
            inputStyle:{
                width: '90%',
                padding: '2px',
                fontSize: '16px',
                border:' 1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
            }
        }
    }
}
</script>

<style>
.profile-detail-wrapper{
    width: 700px;
    height: auto;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 0px 0px 2px 0px gray;
    border-radius: 7px;
    margin-left: 30px;
}
.profile-details-input-wrapper{
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile-detail-inputs{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.profile-detail-title{
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
    position: relative;
    align-self: self-start;
}
.profile-detail-inputs-text{
    position: relative;
    display: flex;
    align-self: self-start;
    margin-left: 19px;
    font-size: 12px;
}
</style>