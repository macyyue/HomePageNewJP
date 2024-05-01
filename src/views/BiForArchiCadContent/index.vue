<script setup>
import BiForArchiCadContentHome from './components/BiForArchiCadContentHome.vue'
import BiForArchiCadContentNav from './components/BiForArchiCadContentNav.vue'
import BiForArchiCadContentFooter from './components/BiForArchiCadContentFooter.vue'
</script>

<template>
    <div>
        <BiForArchiCadContentNav />
        <BiForArchiCadContentHome />
        <RouterView />
        <BiForArchiCadContentFooter />
        <BackToTop />
    </div>
</template>