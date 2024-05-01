<script setup>

</script>

<template>
    <div id="header" class="clearfix" style="position:relative;">
        <div class="titleLogo"><router-link to="/Recruit"><img src="@/assets/RecruitQuestionImg.svg"></router-link>
        </div>
    </div>
    <div id="globals">
        <p class="heading_title">パスワードの再設定</p>
    </div>
</template>

<style scoped>
#header {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    margin-bottom: 20px;
    position: relative;
}

#globals {
    width: 100%;
    height: 50px;
    background: #C8CCD0;
}

.heading_title {
    color: #FFF;
    background: #9198A0;
    width: 940px;
    margin: 0 auto;
    line-height: 50px;
    padding-left: 20px;
    font-weight: normal;
    font-size: 150%;
}
</style>
