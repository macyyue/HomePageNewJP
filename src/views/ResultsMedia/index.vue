<script setup>
    import ResultsMediaNav from '@/views/ResultsMedia/components/ResultsMediaNav.vue'
    import ResultsMediaFooter from '@/views/ResultsMedia/components/ResultsMediaFooter.vue'
    import ResultsMediaHome from '@/views/ResultsMedia/components/ResultsMediaHome.vue'
</script>
<template>
<div>
  <ResultsMediaNav />
  <RouterView />
  <ResultsMediaHome />
  <ResultsMediaFooter />
  <BackToTop />
</div>
</template>