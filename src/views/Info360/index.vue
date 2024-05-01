<script setup>
import Info360Home from './components/Info360Home.vue'
import Info360Nav from './components/Info360Nav.vue'
import Info360Footer from './components/Info360Footer.vue'
</script>

<template>
    <div>
        <Info360Nav />
        <Info360Home />
        <RouterView />
        <Info360Footer />
        <BackToTop />
    </div>
</template>