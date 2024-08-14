<template>
    <div class="my-5">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb px-2">
            <li class="breadcrumb-item"><a href="#" class="nav-link text-white">Home</a></li>
            <li class="breadcrumb-item text-secondary">{{ activeLink }}</li>
        </ol>
    </nav>
  <div class="row justify-content-between align-items-center">
    <div class="col-6 nav-item d-flex fs-3">
      <a 
        href="#" 
        class="nav-link px-2" 
        :class="{ active: activeLink === 'Vizyonda' }" 
        @click="setActiveLink('Vizyonda')"
      >
        Vizyonda
      </a>
      <a 
        href="#" 
        class="nav-link px-2" 
        :class="{ active: activeLink === 'Yakında' }" 
        @click="setActiveLink('Yakında')"
      >
        Yakında
      </a>
    </div>
    <div class="col-3">
      <select class="form-select p-3 bg-secondary border-0 text-white">
        <option value="1">Akıllı Sıralama</option>
        <option value="2">Vizyon Tarihine Göre</option>
        <option value="3">Puana Göre</option>
      </select>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeLink = ref<string | null>(null);

function setActiveLink(link: string) {
  activeLink.value = link;
}
</script>
<style scoped>
.active{
    color: #fff !important;
    border-bottom: 3px solid #fff;
}
.nav-link:hover{
    color: #fff !important;
}
</style>