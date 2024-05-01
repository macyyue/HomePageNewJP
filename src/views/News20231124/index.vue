<script setup>
import NewsHome from './components/NewsHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <NewsHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>