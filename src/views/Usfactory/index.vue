<script setup>
import RecruitNav from '@/components/RecruitNav/index.vue'
import RecruitFooter from '@/components/RecruitFooter/index.vue'
import UsfactoryHome from '@/views/Usfactory/components/UsfactoryHome.vue'

</script>
<template>

<div>
  <RecruitNav />
  <RouterView />
  <UsfactoryHome />
  <RecruitFooter />
  <BackToTop />
</div>
</template>
