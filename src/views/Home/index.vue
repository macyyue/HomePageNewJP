<script setup>
import HomeNav from './components/HomeNav.vue'
import HomeGoods from './components/HomeGoods.vue'
import HomeAboutus from './components/HomeAboutus.vue'
import HomeNews from './components/HomeNews.vue'
import HomeSlider from './components/HomeSlider.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>
<template>
  <div>
  <HomeNav />
  <RouterView />
  <HomeGoods />
  <HomeNews />
  <HomeAboutus />
  <HomeSlider />
  <HomeFooter />
  <BackToTop />
</div>
</template>
<style>
</style>