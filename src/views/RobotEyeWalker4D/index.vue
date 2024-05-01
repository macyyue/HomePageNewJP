<script setup>
import RobotEyeWalker4DHome from './components/RobotEyeWalker4DHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <RobotEyeWalker4DHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>