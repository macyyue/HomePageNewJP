<script setup>
import RecruitNav from '@/components/RecruitNav/index.vue'
import RecruitFooter from '@/components/RecruitFooter/index.vue'
import CareersHome from '@/views/Careers/components/CareersHome.vue'
</script>
<template>
<div>
  <RecruitNav />
  <RouterView />
  <CareersHome />
  <RecruitFooter />
  <BackToTop />
</div>
</template>