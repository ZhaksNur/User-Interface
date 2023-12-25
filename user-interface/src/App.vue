<script>
import Sidebar from './components/Sidebar.vue'
import SidebarLogo from './components/SidebarLogo.vue'
import logo from './assets/logo.svg'
import Header from './components/Header.vue'
import ConnectedApps from './components/ConnectedApps.vue'
import Setting from './components/Setting.vue'
import Reviews from './components/Reviews.vue'
import Logo from './components/Logo.vue'

//img/icons
import search from './assets/search.svg'
import icon1 from './assets/sun.svg'
import icon2 from './assets/language.svg'
import icon3 from './assets/bell.svg'
import icon4 from './assets/message.svg'
import icon5 from './assets/user.svg'
import dashboard from './assets/dashboard.svg'
import products from './assets/products.svg'
import orders from './assets/orders.svg'
import statistics from './assets/statistics.svg'
import reviews from './assets/reviews.svg'
import customers from './assets/customers.svg'
import transactions from './assets/transactions.svg'
import settings from './assets/settings.svg'


export default{
  components:{
    Sidebar,
    SidebarLogo,
    Header,
    ConnectedApps,
    Setting,
    Reviews,
    Logo
  },
  data(){
    return{
      wrapperStyle:{
        height: '70px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '10px'
      },
      imgStyle:{
        width: '27px',
      },
      textStyle:{
        fontSize: '18px',
        fontWeight: '600',
      },
      logo: logo,
      items: [
        {
          dropdown: true,
          dropdownContent: [{label: 'Sales Analytics', route: '/'}, {label: 'Seller Profiles', route: '/'}, {label:'Revenue by Period', route: '/'}],
          buttonText: 'Dashboard',
          icon: dashboard
        },
        {
          dropdown: true,
          dropdownContent: [{label: 'Top Products',route: '/'}, {label: 'Product Grid',route: '/'}, {label:'Product Management', route: '/'}, {label:'Product Categories', route: '/'}, {label: 'Add New Product', route: '/'}],
          buttonText: 'Products',
          icon: products
        },
        {
          label: 'Orders',
          route: '/',
          icon: orders
        },
        {
          label: 'Statistics',
          route: '/',
          icon: statistics
        },
        {
          label: 'Reviews',
          route: '/reviews',
          icon: reviews
        },
        {
          label: 'Customers',
          route: '/',
          icon: customers
        },
        {
          label: 'Transactions',
          route: '/',
          icon: transactions
        },
        {
          label: 'Settings',
          route: '/settings',
          icon: settings
        }
      ],
      sidebarWrapperStyle:{
        width: '100%',
        position: 'relative',
      },
      buttonStyle:{
        width: '90%',
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: '14px',
        fontWeight: '500',
        border: 'none',
        padding: '10px',
        textAlign: 'start',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
      },
      contentStyle:{
        width: '90%',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '12px',
        fontWeight: '500',
        border: 'none',
        padding: '10px',
        textAlign: 'start',
      },
      headerStyle:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        justifyContent: 'space-between'
      },
      inputStyle:{
        width: '550px',
        backgroundColor: 'transparent',
        border: 'none'
      },
      labelStyle:{
        padding: '2px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      },
      iconSearch: search,
      icons: [icon1, icon2, icon3, icon4, icon5],
      searchStyle:{
        padding: '2px',
        border: 'none',
        backgroundColor: 'transparent',
      },
      iconWrapper:{
        position: 'relative',
        display: 'flex',
        width: '180px',
        justifySelf: 'end',
        justifyContent: 'space-between',
      },
      iconStyle:{
        width:'20px',
        height:'20px'      
      }
    }
  },
}
</script>

<template>
  <div class="content">
    <div class="side-wrapper">
        <SidebarLogo :wrapperStyle="wrapperStyle" :imgStyle="imgStyle" :textStyle="textStyle">ShopPoint</SidebarLogo>
        <Sidebar :items="items" :buttonStyle="buttonStyle" :contentStyle="contentStyle"></Sidebar>
    </div>
    <div class="main">
      <div class="header-wrapper">
        <Header :headerStyle="headerStyle" :inputStyle="inputStyle" :labelStyle="labelStyle" :iconSearch="iconSearch" :icons="icons" :buttonStyle="searchStyle" :iconWrapper="iconWrapper" :iconStyle="iconStyle"></Header>
      </div>
      <div class="pages">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display:flex;
  flex-direction: row;
}
.main{
  width:100%;
  height: calc(100vh - 16px);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: whitesmoke;
  align-items: center;
}
.side-wrapper{
  width: 270px;
  height: calc(100vh - 16px);
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: white;
}
.header-wrapper{
  width: 90%;
  position: relative;
  background-color: whitesmoke;
  display: flex;
}
.pages{
  width: 90%;
  position: relative;
}
a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: #555;
}
</style>
