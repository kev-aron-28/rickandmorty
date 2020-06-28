<template>
    <main class="container-content">
    <cp-loader v-show="isLoading"></cp-loader>

         <section class="card">
        <div class="container">
            <router-link to="/" class="img-back"> <img src="@/izquierda.png" alt="" class="img"> </router-link>
                <img :src="info.image">  
                <p>Name: <b> {{info.name}}</b></p>
                <p>Gender: <b>{{info.gender}}</b></p>
                <p>Location: <b>{{info.location.name}}</b></p>
                <p>Episodes: <b>{{info.episode.length}}</b></p>
                <p>Origin: <b>{{info.origin.name}}</b></p>
                <p>Species: <b>{{info.species}}</b></p>
                <p>Status: <b>{{info.status}} </b></p>
        </div>
        </section>

        
 </main>
</template>


<script>
import api from '@/api'
import CpLoader from '@/components/CpLoader'
export default {
    name : 'Detail',
    
    components:{
        CpLoader
    },

    data(){
        return {
        info: {},
        isLoading: true
        }
        
    },

    created(){
        this.getCharachter()
       
    },



    methods:{
    getCharachter(){
        const id = this.$route.params.id
        this.isLoading = true
        api.getSingle(id)
            .then(res => this.info = res)
            .finally(() => this.isLoading = false)
    },

  

    },

    
    

}
   
    

    

    
    


</script>


<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 20px;
  align-self:center;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img{
    border-radius: 10px;
    width: 300px;
}

.image-back{
    width:10px;
    background-color: yellow;
    
    
}
.img{
    width:50px;
    align-content: center;
}

img:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
}
.container p{
    margin-top: 5px;
}

.container-content{
    display:flex;
    background-image: linear-gradient(to right top, #7c7c7c, #858485, #8e8d8d, #979596, #a09e9e, #aba9a9, #b5b3b3, #c0bebe, #cfcece, #dfdedf, #efeeef, #ffffff);
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 100px;
    font-family: 'Questrial', sans-serif;
}
</style>