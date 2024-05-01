<script setup>
import ArchiCADHome from './components/ArchiCADHome.vue'
import ArchiCADNav from './components/ArchiCADNav.vue'
import ArchiCADFooter from './components/ArchiCADFooter.vue'
</script>

<template>
    <div>
        <ArchiCADNav />
        <ArchiCADHome />
        <RouterView />
        <ArchiCADFooter />
        <BackToTop />
    </div>
</template>