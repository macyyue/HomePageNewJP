<script setup>

</script>

<template>
    <div id="header" class="clearfix" style="position:relative;">
        <div class="titleLogo"><router-link to="/Recruit"><img src="@/assets/RecruitQuestionImg.svg"></router-link></div>
</div>
<div id="globals">
<p class="BasicInfoheading_title">登録フォーム</p>
</div>
    </template>
    <style>
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
    background: #eee;
}
.BasicInfoheading_title {
    
    width: 940px;
    margin: 0 auto;
    line-height: 50px;
    padding-left: 20px;
    font-weight: normal;
    font-size: 100%;
    font-weight: bold;
}
</style>
