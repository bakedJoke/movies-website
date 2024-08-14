<template>
  <div class="position-fixed w-100 z-3" :class="{'scrolled': isScrolled}">
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2"
      >
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src="/src//assets/logo.png" alt="" />
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2 text-white fw-bold">Filmler </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white fw-bold">Sinemalar</a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white fw-bold"
              >Kampanyalar
            </a>
          </li>
          <li><a href="#" class="nav-link px-2 text-white fw-bold">FAQs</a></li>
          <li>
            <a href="#" class="nav-link px-2 text-white fw-bold"
              ><font-awesome-icon :icon="['fas', 'chevron-left']" />
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn bg-white d-flex align-items-center rounded-pill">
            <img :src="getAssetPath('cgv_cinema_club_2x.svg')" alt="">
            <a href="" class="nav-link text-start ms-3">Giriş Yap <br> veya Üye Ol</a>
          </button>
        </div>
      </header>
    </div>
  </div>
</template>
<script setup lang="ts">

  import {onMounted, onUnmounted, ref ,inject} from 'vue'
  import { getAssetPath } from '@/core/helpers/asset';
  const isScrolled = ref<boolean>(false);
  function handleScroll() {
    isScrolled.value = window.scrollY > 50;
  }
  onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const Swal: any = inject("Swal");

// const showAlert=()=>{
//   return Swal.fire{

//   }
// }
</script>
<style scoped>
.scrolled {
  background-color: rgb(68, 68, 68);
  color: white;
  transition: background-color 0.5s;

}
</style>
