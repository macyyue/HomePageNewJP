<script setup>
import RobotEyeWalker4DExampleHome from './components/RobotEyeWalker4DExampleHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <RobotEyeWalker4DExampleHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>