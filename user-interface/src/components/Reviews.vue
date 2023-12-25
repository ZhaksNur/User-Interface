<template>
        <PageHeader :title="title" :text="text" :date="date" :icon="icon"></PageHeader>
        <div class="review-banner-wrapper">
            <Banner :banners="banners" :bannerStyle="bannerStyle" :imageStyle="imageStyle" :bannerWrapperStyle="bannerWrapperStyle" :h1Style="h1Style" :textWrapperStyle="textWrapperStyle"></Banner>
        </div>
        <div class="reviews-header">
            <span class="reviews-header-title">Latest Accepted Reviews</span>
            <SelectInput :selectStyle="selectStyle" :value="value" :options="options"></SelectInput>
        </div>
        <div class="people-reviews">
            <PeopleReviews :reviews="reviews"></PeopleReviews>
        </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import icon from '../assets/rotate.svg'
import Banner from './Banner.vue'
import rating1 from '../assets/rating1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import ratings from '../assets/ratings.png'
import SelectInput from './SelectInput.vue'
import PeopleReviews from './PeopleReviews.vue'
import userImageForReviews from '../assets/user.svg'


export default{
    components:{
        PageHeader,
        Banner,
        SelectInput,
        PeopleReviews,
    },
    data(){
        return{
            title: 'Reviews',
            text: 'Data Refreshed',
            date: 'December 24, 2023 13:52 PM',
            icon :icon,
            banners:[
                {
                    leftImage: rating1, 
                    title: '4.5',
                    mainText: 'Review score', 
                    imageStyle:{width: '100px'},
                    bannerStyle:{
                        width: '140px',
                        height: '150px',
                        position: 'relative',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '15px',
                        boxShadow: '0px 0px 2px 0px gray',
                        borderRadius: '7px',
                    }
                },
                {
                    leftImage: user2, 
                    title: '348', 
                    mainText: 'Customers score', 
                    imageStyle:{width:'30px'},
                    bannerStyle:{
                        width: '140px',
                        height: '150px',
                        position: 'relative',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '15px',
                        boxShadow: '0px 0px 2px 0px gray',
                        borderRadius: '7px',
                    }
                },
                {
                    leftImage: user3, 
                    title: '25%', 
                    mainText: 'New customers', 
                    imageStyle:{width:'30px'},
                    bannerStyle:{
                        width: '140px',
                        height: '150px',
                        position: 'relative',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '15px',
                        boxShadow: '0px 0px 2px 0px gray',
                        borderRadius: '7px',
                    }
                },
                {
                    leftImage: user4, 
                    title: '75%', 
                    mainText: 'Regular customers', 
                    imageStyle:{width:'30px'},
                    bannerStyle:{
                        width: '140px',
                        height: '150px',
                        position: 'relative',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '15px',
                        boxShadow: '0px 0px 2px 0px gray',
                        borderRadius: '7px',
                    }
                },
                {
                    leftImage: ratings , 
                    imageStyle:{width:'300px'},
                    bannerStyle:{
                        width: '340px',
                        height: 'auto',
                        position: 'relative',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '15px',
                        boxShadow: '0px 0px 2px 0px gray',
                        borderRadius: '7px',
                    }
                }
            ],
            imageStyle:{
                width: '50px',
                height: 'auto',

            },
            bannerWrapperStyle:{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between'
            },
            textWrapperStyle:{
                position:'relative',
                display: 'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center',
            },
            h1Style:{
                fontSize: '16px',
                margin: '5px 0 5px 0',
            },
            selectStyle:{
                width: '70px',
                padding: '2px',
                fontSize: '12px',
                boxSizing: 'border-box',
                border:' 1px solid #ccc',
                marginRight:'10px'
            },
            options:[
                { value: 1, label: "Latest" },
                { value: 2, label: "Oldest" },
                { value: 3, label: "Newest" },
            ],
            reviews: [
                {
                    userImage: userImageForReviews,
                    name: 'User User',
                    email: 'user@gmail.com',
                    starsImg: rating1,
                    starsCount: 4,
                    date: '02/10/2023',
                    time: '10:30 pm',
                    color: {backgroundColor: 'white'}
                },
                {
                    userImage: userImageForReviews,
                    name: 'User User',
                    email: 'user@gmail.com',
                    starsImg: rating1,
                    starsCount: 4,
                    date: '02/10/2023',
                    time: '10:30 pm',
                    color: {backgroundColor: 'whitesmoke'}
                },
                {
                    userImage: userImageForReviews,
                    name: 'User User',
                    email: 'user@gmail.com',
                    starsImg: rating1,
                    starsCount: 4,
                    date: '02/10/2023',
                    time: '10:30 pm',
                    color: {backgroundColor: 'white'}
                },
                {
                    userImage: userImageForReviews,
                    name: 'User User',
                    email: 'user@gmail.com',
                    starsImg: rating1,
                    starsCount: 4,
                    date: '02/10/2023',
                    time: '10:30 pm',
                    color: {backgroundColor: 'whitesmoke'}
                }
            ],
        }
    }
}
</script>

<style>
.reviews-header{
    position: relative;
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 2px 0px gray;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    align-items: center;
    font-weight: 600;
}
.reviews-header-title{
    margin-left: 10px;
}
</style>