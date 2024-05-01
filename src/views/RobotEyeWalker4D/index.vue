<script setup>
import RobotEyeWalker4DHome from './components/RobotEyeWalker4DHome.vue'
import RobotEyeWalker4DNav from './components/RobotEyeWalker4DNav.vue'
import RobotEyeWalker4DFooter from './components/RobotEyeWalker4DFooter.vue'
</script>

<template>
    <div>
        <RobotEyeWalker4DNav />
        <RobotEyeWalker4DHome />
        <RouterView />
        <RobotEyeWalker4DFooter />
        <BackToTop />
    </div>
</template>