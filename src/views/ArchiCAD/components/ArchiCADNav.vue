<script setup>

</script>

<template>
    <div id="header" class="clearfix" style="position:relative;">
    <div class="titleLogo">
        <router-link to="/Recruit"><img src="@/assets/RecruitQuestionImg.svg"></router-link>
    </div>
</div>
<div id="globals">
<div class="content_title">
    <p >理想のプロジェクトコストマネージャー </p>
    <p >ArchiCAD サポートツール</p>
</div>

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
    display: block;
    width: 100%;
    height: 101px;
    background-color: #C8CCD0;
}
.content_title {
    color: #FFF;
    background: #9198A0;
    width: 940px;
    margin: 0 auto;
    line-height: 50px;
    font-weight: normal;
    font-size: 150%;
}
.content_title p:last-child{
    border-top: 1px solid #FFF;
}
</style>
