<template>
 <v-app style="background-color: #F7F7F7 0% 0% no-repeat padding-box;;">
   <!-- <v-container> -->
     <v-toolbar>
       <img src="../assets/advo.png" style="top: 17px;
          left: 34px;
          width: 129px;
          height: 32px;
          background: transparent url('img/Advotics logo_ARM Portal.png') 0% 0% no-repeat padding-box;
          opacity: 1;">
        <p style="padding-top: 20px; padding-left: 5px; top: 34px;
          left: 160px;
          width: 61px;
          height: 15px;
          text-align: left;
          font: normal normal normal 11px/15px Open Sans;
          letter-spacing: 0px;
          color: #5B5B5B;
          opacity: 1;">
          Powered By</p>
        <img src="../assets/advo.png" style="margin-top: 15px; top: 32px;
          left: 236px;
          width: 72px;
          height: 18px;
          background: transparent url('img/Advotics logo_ARM Portal.png') 0% 0% no-repeat padding-box;
          opacity: 1;">
        <v-spacer></v-spacer>
        <v-col offset-md="8">
          <h4 style="margin-top: 8px; text-color: #727272;">User name</h4>
          <p style="font-size: 12px; text-color: #727272;">Company Name</p>
        </v-col>
        <img src="../assets/Profile.svg" style="max-height: 32px; max-width: 32px; padding-left: 10px;">
        <img src="../assets/logout.png" style="max-height: 32px; max-width: 32px; padding-left: 10px;">
   </v-toolbar>

   <!-- </v-container> -->
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
   <v-navigation-drawer v-model="drawer" :width="72">
      <v-list>
        <v-list-item link>
          <!-- <v-list-item-icon> -->
            <v-btn icon @click="open()">
             <img href="/dashboard" src="../assets/Dashboard icon.svg" style="max-height: 32px; max-width: 32px; padding-left: 10px;">
            </v-btn>
          <!-- </v-list-item-icon> -->
        </v-list-item>
      </v-list>

   </v-navigation-drawer>
<router-view />
 </v-app>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
export default {
  name: 'Home',
  components: {
    // drawer:false,
  },
  // data: () => ({
  //   drawer: false
  // }),
  methods: {
    open () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
