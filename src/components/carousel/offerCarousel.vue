<template>
  <div>
    <h2 class="text-white mb-5">Kampanyalar</h2>
    <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(carousel,index) in offerCarousel" :key="index" class="rounded-4 overflow-hidden">
        <img :src="carousel.img" alt="">
    </swiper-slide>
  </swiper>
</div>
</template>
<script lang="ts" setup>
import {offerCarousel} from '@/core/helpers/carousel'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const modules = [Navigation,Pagination,Mousewheel,Keyboard];

</script>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
} 
.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>