<template>

    <main class='card'>
     <div class="container">
        <ul v-for="(i,k) in info1" :key="k" class="content">
        <p class="title">Episode: <b>{{i.id}}</b></p>
        <p>Name: <b>{{i.name}}</b></p>
        <p>Air date :<b>{{i.air_date}}</b></p>
        <p>Characters: <b>{{i.characters.length}}</b></p>
      
        </ul>
  </div>

   <div class="container">
        <ul v-for="(i,k) in info2" :key="k" class="content">
        <p class="title">Episode: <b>{{i.id}}</b></p>
        <p>Name: <b>{{i.name}}</b></p>
        <p>Air date :<b>{{i.air_date}}</b></p>
        <p>Characters: <b>{{i.characters.length}}</b></p>

        </ul>
  </div>
    </main>


</template>

<script>
import api from "@/api";
    export default {
        name: 'Episodes',

        data(){
            return {
                info1: [],
                info2: []
            }
        },

        created(){
            api.getEpisode()
            .then(res => this.info1 = res.results )

            api.getEpisode2()
            .then(res => this.info2 = res.results)
        }
    }

</script>


<style scoped>


.title{
    text-align:center;
    font-size:20px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display:flex;
  justify-content: center;
  
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  
 
  

}

ul {
    border-style: solid;
     margin:5px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
}


</style>