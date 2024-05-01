<script setup>
import BiForArchiCadHome from './components/BiForArchiCadHome.vue'
import BiForArchiCadNav from './components/BiForArchiCadNav.vue'
import BiForArchiCadFooter from './components/BiForArchiCadFooter.vue'
</script>

<template>
    <div>
        <BiForArchiCadNav />
        <BiForArchiCadHome />
        <RouterView />
        <BiForArchiCadFooter />
        <BackToTop />
    </div>
</template>