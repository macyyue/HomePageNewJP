<script>

export default {    
        
        data() {
          return {
            logoString:"U's Factory",
            index:0,
            text:''
          }
        },
        props:{
        _showLogo:Boolean
        },
        mounted:function(){
          document.getElementById('move-down').addEventListener('animationend',()=>{
            this.$emit('logo-animation-end',!this._showLogo)
          })
        }
    }

</script>

<template>

    <div id="logo_box"  >
        <img id="logo" src="@/assets/UsLogo.svg" style="height: 37px;" />  
        <div class="wavy" >
        <span style="--i:1  ;--j:10 ;">U</span>
        <span style="--i:2  ;--j:9 ;">'</span>
        <span style="--i:3  ;--j:8 ;">s</span>
        <span style="--i:4  ;--j:7 ;"> </span>
        <span style="--i:5  ;--j:6 ;">F</span>
        <span style="--i:6  ;--j:5 ;">a</span>
        <span style="--i:7  ;--j:4 ;">c</span>
        <span style="--i:8  ;--j:3 ;">t</span>
        <span style="--i:9  ;--j:2 ;">o</span>
        <span style="--i:10 ;--j:1;">r</span>
        <span style="--i:11 ;--j:0;">y</span>
        <p id="move-down">ゼネコン・サブコン様における熟練技術者不足の問題を解決する会社</p>

        </div>
    </div>



</template>

<style>
/* 定义动画关键帧 */

@keyframes logo_anime {
    0% {
        width: 0px;
        height: 0px;
    }
    25% {
        width: 37px;
        height: 37px;
    }
}

@keyframes logo_box_anime {
    25% {
        transform: translateX(0%);
    }
    100% {
        /* transform: rotate(360deg); */
        transform: translateX(-260%);
    }
}


/* 应用动画效果 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
}

#logo_box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 37px;
    height: 37px;
    background-color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: logo_box_anime 1s linear;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}

#logo {
    position: absolute;
    transform: translate(-50%, 0);
    animation: logo_anime 1s linear;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}

.wavy span {
    position: absolute;
    margin-left: 15px;
    margin-top: -5px;
    width: 15px;
    color: rgba(0, 0, 0, 0);
    font-size: 2em;
    animation: animate 1s linear;
    animation-fill-mode: forwards;
    animation-delay: calc(.1s * var(--j));
    --distance: var(--i)/11;
}

@keyframes animate {
    0% {
        transform: translateX(0%);
    }
    20% {
        color: rgba(0, 0, 0, 0);
    }
    40% {
        color: rgba(0, 128, 255, 0.99);
    }
    100% {
        color: rgba(0, 0, 0, 0.75);
        transform: translateX(calc(1100%*var(--distance)));
    }
}

#move-down {
    position: absolute;
    margin-top: 20px;
    left: -138px;
    white-space: nowrap;
    /* 禁止文字换行 */
    overflow: hidden;
    /* 隐藏溢出的文字 */
    /* 应用滚动动画 */
    animation: moveD 3s linear;
    animation-fill-mode: forwards;
}

@keyframes moveD {
    0% {
        color: rgba(0, 0, 0, 0);
    }
    30% {
        transform: translateY(0);
        color: rgba(0, 0, 0, 0);
    }
    60% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(20px);
    }
}
</style>
