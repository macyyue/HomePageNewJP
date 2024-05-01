<script setup>
    import HomeNav from '@/components/HomeNav/index.vue'
    import HomeFooter from '@/components/HomeFooter/index.vue'
    import ResultsMediaHome from '@/views/ResultsMedia/components/ResultsMediaHome.vue'
</script>
<template>
<div>
  <HomeNav />
  <RouterView />
  <ResultsMediaHome />
  <HomeFooter />
  <BackToTop />
</div>
</template>