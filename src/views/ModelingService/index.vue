<script setup>
import ModelingServiceHome from './components/ModelingServiceHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <ModelingServiceHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>