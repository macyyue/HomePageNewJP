<script setup>
import Info360ServiceHome from './components/Info360ServiceHome.vue'
import Info360ServiceNav from './components/Info360ServiceNav.vue'
import Info360ServiceFooter from './components/Info360ServiceFooter.vue'
</script>

<template>
    <div>
        <Info360ServiceNav />
        <Info360ServiceHome />
        <RouterView />
        <Info360ServiceFooter />
        <BackToTop />
    </div>
</template>