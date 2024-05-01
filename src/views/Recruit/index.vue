<script setup>
    import RecruitNav from '@/components/RecruitNav/index.vue'
    import RecruitFooter from '@/components/RecruitFooter/index.vue'
    import RecruitHome from '@/views/Recruit/components/RecruitHome.vue'
</script>
<template>
<div>
  <RecruitNav />
  <RouterView />
  <RecruitHome />
  <RecruitFooter />
  <BackToTop />
</div>
</template>