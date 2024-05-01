<script setup>
import AccessHome from './components/AccessHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'

</script>

<template>


<div>
  <HomeNav />
  <AccessHome />
  <RouterView />
  <HomeFooter />
  <BackToTop />

</div>

  

</template>