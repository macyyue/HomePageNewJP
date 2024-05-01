<script setup>
</script>

<template>
<div class="mainContent">
    <div class="homeMainArea delayed-image"><img src="@/assets/MainArea-image01.jpg" alt="" style="width: 100%; height:100% ;">
        <p class="fadeInText">建設業界の慣習を覆す</p> 
    </div>
    <div class="homeWrapper">
        <div class="homeContents">
            <router-link to="/Message" >
                <p class="fRobotoCon cRed">MESSAGE</p>
                <p class="fNotoSansB cRed">メッセージ</p>
            </router-link>
        </div>
        <div class="homeContents">
            <router-link to="/Careers">
               <p class="fRobotoCon cBlue">CAREERS</p>
                <p class="fNotoSansB cBlue">募集情報</p>
            </router-link>
        </div>
        <div class="homeContents">
            <router-link to="/Question">
                <p class="fRobotoCon cYgreen">FAQ</p>
                <p class="fNotoSansB cYgreen">よくあるご質問</p>
            </router-link>
        </div>
        <div class="homeContents">
            <router-link to="/Company">
                <p class="fRobotoCon cPurple">ABOUT U'SFACTORY</p>
                <p class="fNotoSansB cPurple">
                    会社情報
                    <span class="linkArrow"></span>
                </p>
            </router-link>
        </div>
    </div>
</div>


</template>
<style>
.mainContent{
   min-width: 1390px;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.homeMainArea {
    width: 100%; 
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative; 
    min-height: 100%;

}
.delayed-image {
    animation: fadeIn 7s ease 0s 1 normal;
    -webkit-animation: fadeIn 7s ease 0s 1 normal;
}

.fadeInText{
    position: absolute;
    width: 900px;
    height: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-37%, -60%);
    font-size: 70px;
    text-shadow: 2px 2px 4px rgba(255, 251, 251, 0.9);
    animation: fadeIn 2s ease 0s 1 normal; 
    -webkit-animation: fadeIn 2s ease 0s 1 normal;
}
.homeWrapper{
    width: 100%;
    background-color:#000;
    padding: 9rem 0;

}
.homeContents {
    width: 90%;
    margin: auto;
    margin-bottom: 9rem;
}
.homeContents > a {
    display: block;
    text-decoration: none;
}
.homeContents > a > p:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px; 
}
.homeContents > a > p:nth-of-type(1) {
    font-size: 5.5rem;
    line-height: 100%;
    text-align: center;
}
.homeContents > a > p:nth-of-type(2) {
    font-size: 1.5rem;
    line-height: 150%;
    text-align: center;
}
.fRobotoCon {
    font-family: 'Roboto Condensed',sans-serif;
    font-weight: 700;
}
.fNotoSansB {
    font-family: 'Noto Sans JP',sans-serif;
    font-weight: 500;
}
.linkArrow {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    margin: auto;
    top: 0;
    bottom: 0;
    background-image: url(@/assets/linkArrowPurple.svg);
    background-repeat: no-repeat;
}
.cRed {
    color: #c85036;
}
.cBlue {
    color: #07bdd7;
}
.cYgreen {
    color: #27807f;
}
.cPurple{
    color:#AAB6FB;
}

</style>