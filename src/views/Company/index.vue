<script setup>

import CompanyHome from './components/CompanyHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'

</script>

<template>
<div>
  <HomeNav />
  <CompanyHome />
  <RouterView />
  <HomeFooter />
  <BackToTop />

</div>

  

</template>