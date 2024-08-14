<template>
    <div class="container-fluid p-0">
    <Swiper
    :slides-per-view="1"
    :space-between="0"
    :autoplay="true"
    :loop="true"
    :delay="500"
    class="h-100"
  >
    <swiper-slide class="text-center h-100"  v-for="(carousel,index) in carousels"
    :key="index" >
    <div class="carouselItem h-100">
        <img :src="carousel.img" alt="" class="carouselImage">
        <div class="carouselText">
            <h1>{{ carousel.title }}</h1>
            <p>{{ carousel.description }}</p>
            <button class="btn btn-lg text-white px-5">İncele</button>
        </div>
    </div>
    </swiper-slide>
    
    </Swiper>
</div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {carousels} from '@/core/helpers/carousel'


</script>

<style scoped>
.container-fluid{
    height: 600px !important;
    z-index: -1 !important;
}
.carouselItem {
  position: relative;
  overflow: hidden;
}
.carouselItem h1{
    font-size: 3rem;
    line-height: 70px;
}
.carouselItem p{
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    opacity: 0.8;
}
.carouselImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
 
}
.carouselText {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  text-align: start;
  opacity: 1;
}
.btn{
    background-color: #98a726;
    border-radius: 25px;
    
}
</style>