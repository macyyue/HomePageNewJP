<script setup>
import BiForArchiCadHome from './components/BiForArchiCadHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'

</script>

<template>
    <div>
        <HomeNav />
        <BiForArchiCadHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>