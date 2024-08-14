<template>
<div>
    <carousel></carousel>

    <div class="container">
        <content></content>
        <cinemaCard></cinemaCard>
        <offerCarousel></offerCarousel>
        <cgvPass></cgvPass>
        <cgvCarousel></cgvCarousel>
    </div>
</div>
</template>
<script lang="ts" setup>
import offerCarousel from '@/components/carousel/offerCarousel.vue'
import carousel from '@/components/carousel/carousel.vue'
import cinemaCard from '@/components/cards/cinemaCards.vue'
import content from '@/components/content/content.vue'
import cgvCarousel from '@/components/carousel/cgvCarousel.vue'
import cgvPass from '@/components/cgv/cgvPass.vue'


</script>