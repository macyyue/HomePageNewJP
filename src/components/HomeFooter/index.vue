<script>

</script>
<template>
<div class="footer">
        <div class="wrapper">
           <div class="usFactory">
            <img src="@/assets/Uslogo-copyright01.svg" alt="" style="height: 35px; width: 35px;">
            <span id="title-us"><strong>U's Factory</strong></span>


            <div class="bottom">
                <section>
                    <address class="footerAddress">"〒240-0005"神奈川県横浜市保土ヶ谷区神戸町134番地 
                        <br>
                        横浜ビジネスパーク イーストタワ ー 11階
                    <p id="telephone-img"><img src="@/assets/telephone.svg" style="width: 20px;
                    height: 25px;"></p> 
                    
                    <h3 class="telephone-number">045-348-1560</h3>
                    <small>受付時間 9:30 ~ 17:30 ( 土・日・祝日除く )</small>
                    </address>

                </section>
                <div class="media">
                <p>
                    <a href="#">このサイトについて</a> |
                    <a href="#">個人情報保護方針</a> |
                    <a href="#">サイトポリシー</a>
                </p>

                <ul class="media-img">
                    <li ><a title="クラッソーネ Youtubeページ "  href="https://www.youtube.com/@yako9302674/featured" >
                        <img src="@/assets/Youtube.svg" alt="">
                    </a></li>
                </ul>                
                    <ul class="media-img">
                    <li ><a title="クラッソーネ Facebookページ " href="#" >
                        <img src="@/assets/facebook.svg" alt="">
                    </a></li>
                </ul>
                    
            </div>  

           </div>   
            </div>
            <p>
        <small class="copyright"> Copyright©2013-2024 U'sFactory All Rights Reserved.</small>
            </p>
        </div>
    </div>
    
</template>

<style>
.footer {
    min-width: 1390px;
    width: 100%;
    height: 250px;
    background-color: #454545;
}
.usFactory {
    margin: 0 auto;
    width: 900px;
    height: 220px;
    z-index: 9;
    padding-top: 10px;
    background-color: #454545;
    color: #999;
}

.usFactory #title-us {
    display: inline-block;
    font-size: xx-large;
    vertical-align: bottom;
    margin-left: 5px;
    margin-top: 5px;
}

.footer .bottom {
    font-style: 14px;
    color: #999;
    z-index: -1;
    text-align: right;
}

.footer .bottom a {
    display: inline-block;
    font: size 14px;
    color: #999;
    text-decoration: none;
}

.copyright {
    display: block;
    color: #999;
    text-align: center;
}

.media-img {
    display: inline-block;
    list-style: none;
    margin-top: 20px;
    margin-right: 20px;
}

.footerAddress {
    text-align: left;
}

.media p {
    margin-top: -100px;
}

#telephone-img {
    margin-top: 1px;
}

.telephone-number {
    margin-top: -22px;
    margin-left: 30px;
}
</style>

