<script setup>
import MediaHome from './components/MediaHome.vue'
import MediaNav from './components/MediaNav.vue'
import MediaFooter from './components/MediaFooter.vue'
</script>

<template>
    <div>
        <MediaNav />
        <MediaHome />
        <RouterView />
        <MediaFooter />
        <BackToTop />
    </div>
</template>