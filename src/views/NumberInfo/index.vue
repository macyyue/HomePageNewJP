<script setup>
import NumberInfoHome from './components/NumberInfoHome.vue'
import NumberInfoNav from './components/NumberInfoNav.vue'
import NumberInfoFooter from './components/NumberInfoFooter.vue'

</script>

<template>
    <div>

        <NumberInfoNav />
        <NumberInfoHome />
        <RouterView />
        <NumberInfoFooter />
        <BackToTop />
    </div>
</template>