<template>
    <div>
    <cp-loader v-show="isLoading"></cp-loader>
       
        <h1>I'm learning to code 💻</h1>
      
    </div>
    
</template>

<script>
import CpLoader from '@/components/CpLoader'

export default {
    name: 'About',
    components:{
        CpLoader
    },

    data(){
        return {
            isLoading: true
        }
    },

    beforeCreated(){
        this.isLoading = true
    } ,

    created(){
        this.isLoading = false
    }
    
}
</script>