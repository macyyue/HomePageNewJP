<script setup>
import NewsHome from './components/NewsHome.vue'
import NewsNav from './components/NewsNav.vue'
import NewsFooter from './components/NewsFooter.vue'
</script>

<template>
    <div>
        <NewsNav />
        <NewsHome />
        <RouterView />
        <NewsFooter />
        <BackToTop />
    </div>
</template>