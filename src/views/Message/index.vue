<script setup>
import RecruitNav from '@/components/RecruitNav/index.vue'
import RecruitFooter from '@/components/RecruitFooter/index.vue'
import MessageHome from '@/views/Message/components/MessageHome.vue'

</script>
<template>

<div>
  <RecruitNav />
  <RouterView />
  <MessageHome />
  <RecruitFooter />
  <BackToTop />
</div>
</template>
