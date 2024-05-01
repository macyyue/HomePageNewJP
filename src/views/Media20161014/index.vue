<script setup>
import MediaHome from './components/MediaHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <MediaHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>