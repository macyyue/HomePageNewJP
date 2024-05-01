<script setup>
import QuestionHome from './components/QuestionHome.vue'
import HomeNav from '@/components/HomeNav/index.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'
</script>

<template>
    <div>
        <HomeNav />
        <QuestionHome />
        <RouterView />
        <HomeFooter />
        <BackToTop />
    </div>
</template>