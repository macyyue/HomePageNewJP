<script setup>
import RobotEyeWalker4DExampleHome from './components/RobotEyeWalker4DExampleHome.vue'
import RobotEyeWalker4DExampleNav from './components/RobotEyeWalker4DExampleNav.vue'
import RobotEyeWalker4DExampleFooter from './components/RobotEyeWalker4DExampleFooter.vue'
</script>

<template>
    <div>
        <RobotEyeWalker4DExampleNav />
        <RobotEyeWalker4DExampleHome />
        <RouterView />
        <RobotEyeWalker4DExampleFooter />
        <BackToTop />
    </div>
</template>