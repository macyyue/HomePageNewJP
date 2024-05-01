<script setup>
import Info360ServiceHome from './components/Info360ServiceHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <Info360ServiceHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>