<template>
    <div class="container">
    <h1 class="title">Page: {{counter}}</h1>
    <input v-model="filtered" placeholder="Search...">
        
        <div class="ind">
            
            <a href="" v-show="counter > 1"  @click.prevent="decrement"> <img src="@/izquierda.png" alt=""> </a>
            <a href="" v-show="counter < 30"  @click.prevent="increment"> <img src= "@/derecha.png" alt="">  </a>
        </div>
    
    <div class="container-content">
        
         <ul class="list" v-for="(v,k) in filteredAssets" :key="k" >
            <li>
                <div class="content">
                     <img :src="v.image">
                     <p>Name : <b>{{v.name}}</b></p>
                     <p>Origin : <b>{{v.origin.name}}</b></p>
                     <p>Species : <b>{{v.species}}</b></p>
                     <p> {{v.id}}</p>
                     <router-link class="btn" :to="{name: 'detail', params: {id: v.id} }"><a href="" class="myButton">More</a></router-link>
                     
             </div>
             
               
            </li>
        </ul>
    </div>
         
    </div>
</template>

<script>

import api from "@/api"


export default {
    
    components:{
        
    },

    name:'CpCard',

    data(){
        return{
            info:[],
            counter: 1,
            isLoading: true,
            filtered:''

        }
        
    },
    computed:{
        filteredAssets(){
            if(!this.filtered){
                return this.info
            }

            return this.info.filter(a => 
                a.name.toLowerCase().includes(this.filtered.toLowerCase()) ||
                a.origin.name.toLowerCase().includes(this.filtered.toLowerCase())
            )
        }
    },

   created() {
    
    api.getAsset()
    .then(res => this.info = res)
   
  },

  beforeUpdate(){
      
      api.getAsset(this.counter)
      .then(res => this.info = res)
     
  },

    methods:{
        
        
        increment(){
            if(this.increment){
                this.counter++
            }
            console.log(this.counter)
        },
        
        decrement(){
            if(this.decrement){
                this.counter--
            }
        }
        
        },


}

</script>

<style scoped>
.title{
    text-align: center;
    align-self:flex-start;
    margin: 5px;
}
    .container{
        display:flex;
        flex-direction: column;
        font-family: 'Questrial', sans-serif;
    }
    
    ul li{
        flex-direction: row;
        
    }

    .container-content{
    margin-top: 10px;
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    }

    input {
        align-self:center;
         padding: 5px;
     font-size: 16px;
     border-width: 2px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 5px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: 0px 0px 5px rgba(66,66,66,.75);
    
    }

    input:focus{
        outline:none;
    }
    .container-content ul {
        align-self: center;
        -webkit-box-shadow: -2px 2px 8px -4px rgba(0,0,0,1);
-moz-box-shadow: -2px 2px 8px -4px rgba(0,0,0,1);
box-shadow: -2px 2px 8px -4px rgba(0,0,0,1);



    }
    .ind{
        display: flex;
        align-self: center;
        font-size: 20px;
        margin-top: 10px;
    }
    .ind h1 {
        align-self:flex-end;
    }

    .ind a {
        margin: 5px;
    }
   
    
    ul li {
        list-style: none;
        margin:15px;
    }

    a{
        text-decoration: none;
    }

    .content{
        display:flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .content p {
        margin-top:10px;
    }
   
    ul:hover{
        border-radius: 10px;
    }
    ul img:hover{
        border-radius: 8px;
        transition: ease-in-out;
    }

    .btn{
        align-self: center;
    }

   .myButton {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    align-self:center;
}
.myButton:hover {
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
}
.myButton:active {
	position:relative;
	top:1px;
}

</style>