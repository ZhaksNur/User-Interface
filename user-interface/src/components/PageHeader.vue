<template>
    <div class="pageheader-wrapper">
        <div>
            <h1>{{ title }}</h1>
        </div>
        <div class="right-content">
            <p>{{ text }}
                <img :src="icon" class="icon"/>
            </p>
            <div class="date-wrapper">
                <p>{{ date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title: String,
        text: String,
        icon: String,
        date: String,
    }
}
</script>

<style>
.pageheader-wrapper{
    position: relative;
    background-color: white;
    box-shadow: 0px 0px 2px 0px gray;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
}
h1{
    font-size: 26px;
    margin-left: 15px;
}
.right-content{
    position: relative;
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-right: 15px;
}
p{
    font-size: 14px;
    font-weight: 500;
}
.date-wrapper{
    width: 250px;
    position: relative;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    border: 1px solid rgb(194, 189, 189);
    border-radius: 5px;
}
.icon{
    width: 20px;
    height: 20px;
}
</style>