<template>
<div class="bg-black">
    <Header/>
    <RouterView></RouterView>
    <Footer/>
</div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Header from '@/layouts/main-layout/header/header.vue'
import Footer from '@/layouts/main-layout/footer/footer.vue'


</script>