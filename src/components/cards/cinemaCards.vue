<template>
    
    <div class="card position-relative" v-for="(card,index) in cards" :key="index" >
        <img class="card-img-top " src="..." alt="Card image cap">
         <div>
            <button class="btn btn-success">Hemen Bilet Al</button>
            <button class="btn">İncele</button>
         </div>  
    </div>
</template>
<script lang="ts" setup>
import MovieApiService from '@/core/services/apiServices'
const cards = MovieApiService.get("/movie/550?api_key=14d1c5e0d67ed60135f156723bfe9d79").then(response =>{
    console.log(response);
    
})

</script>