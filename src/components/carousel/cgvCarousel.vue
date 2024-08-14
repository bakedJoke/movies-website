<template>
  <div class="mb-5">
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }"
    >
      <swiper-slide v-for="(carousel,index) in cgvCarousel" :key="index" class="h-100 overflow-hidden bg-secondary text-white">
        <div class="position-relative">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h2 class="fw-bold">{{ carousel.price }}</h2>
            <div class="text-start">
             
             <p>{{ carousel.contents }}</p>
              
            </div>
          </div>
          <div class="rounded-4 overflow-hidden">
            <img :src="carousel.img" alt="Carousel Image" style="background-color: #6c757d;">
          </div>
          <div class="position-absolute button d-flex flex-column">
            <button class="btn btn-success mb-2 rounded-5 px-5">Satın Al</button>
            <button class="btn btn-outline-light rounded-5  px-5">Hediye Et</button>
          </div>
        </div>
      </swiper-slide>
      
    </swiper>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {cgvCarousel} from '@/core/helpers/carousel'

</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  padding: 25px 50px !important;
  font-size: 18px;
  border-radius: 30px;
  background:rgba(255, 255, 255, 0.195) !important;
  width: 450px !important;
  border: 1px solid green !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width : 1000px){
  .swiper-slide{
    width: 250px !important;
    padding: 10px 30px !important;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.button{
  bottom: 20px;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
