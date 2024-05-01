<script setup>
import Info360Home from './components/Info360Home.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <Info360Home />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>