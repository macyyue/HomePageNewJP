<script setup>
import AreaCalculationHome from './components/AreaCalculationHome.vue'
import AreaCalculationNav from './components/AreaCalculationNav.vue'
import AreaCalculationFooter from './components/AreaCalculationFooter.vue'
</script>

<template>
    <div>
        <AreaCalculationNav />
        <AreaCalculationHome />
        <RouterView />
        <AreaCalculationFooter />
        <BackToTop />
    </div>
</template>