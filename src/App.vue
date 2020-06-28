<template>
  <div id="app">
   <cp-header></cp-header>
   <router-view></router-view>
   <cp-footer></cp-footer>
  </div>
</template>

<script>
import CpHeader from "@/components/CpHeader";
import CpFooter from "@/components/CpFooter"
export default {
  name: "App",
  components: {
    CpHeader,
    CpFooter
    
  },
};
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }
</style>

<style>
 
 html{
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fcfff4+0,dfe5d7+40,b3bead+100;Wax+3D+%233 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,e5e5e5+100;White+3D */
background-image: linear-gradient(to right top, #7c7c7c, #858485, #8e8d8d, #979596, #a09e9e, #aba9a9, #b5b3b3, #c0bebe, #cfcece, #dfdedf, #efeeef, #ffffff);

 font-family: 'Questrial', sans-serif;
 }

</style>