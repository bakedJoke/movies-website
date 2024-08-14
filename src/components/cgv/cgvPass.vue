<template>
    <div class="d-flex position-relative align-items-center justify-content-center text-center my-5">
        <div class="position-absolute top-0 start-0">
                <img :src="getAssetPath('cgv-pass-sm.svg')" alt="" class="img-fluid">
        </div>
        <div class="w-50">
            
            <h2 class="text-white">CGV MoviePass</h2>
            <p class="text-secondary">Sinemada film izlemenin daha hesaplı, daha kolay, çook sürprizli yolu CGV MoviePass’te! Haydi hiç vakit kaybetmeden, paketini seç sinemaya gel! CGV Para’larınla hem mısır hem de sürpriz hediyeler senin olsun.</p>
            <a href="" class="text-secondary">Detaylı Bilgi İçin Tıkla</a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getAssetPath } from "../../core/helpers/asset";

</script>