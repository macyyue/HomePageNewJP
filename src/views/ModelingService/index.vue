<script setup>
import ModelingServiceHome from './components/ModelingServiceHome.vue'
import ModelingServiceNav from './components/ModelingServiceNav.vue'
import ModelingServiceFooter from './components/ModelingServiceFooter.vue'
</script>

<template>
    <div>
        <ModelingServiceNav />
        <ModelingServiceHome />
        <RouterView />
        <ModelingServiceFooter />
        <BackToTop />
    </div>
</template>