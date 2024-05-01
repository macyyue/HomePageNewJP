<script>
export default{
    methods: {
//跳转方法 
    goto(page, selectID) { 
        console.log(this.$route.path, "this.$route.path"); 
        if (page == this.$route.path) { 
            //如果当前已经在这个页面不跳转 直接去 
            let toElement = document.getElementById(selectID); 
            toElement.scrollIntoView(true); 
            } else { 
            //否则跳转路由 
            localStorage.setItem("toId", selectID); 
            this.$router.push({ path: page }); 
         } 
     }, 
  },
}
</script>

<template>  
    <div class="container" data-wide="false" data-sidebar="false">
      <div class="contents">
         <section>
            <div class="heading-lv2">
                <div class="block">
                    <h2 class="heading_title">メリット</h2>
                </div>
            </div>
            <ul class="list-bullet is-bullet_large">
                <li>図面の整合性を高め理想の建物を追求</li>
                <li>利益管理業務を標準化</li>
                <li>業務効率を大幅に向上</li>
                <li>外注費を削減し無駄を軽減</li>
                <li>正確な利益把握と課題の早期抽出を推進</li>

            </ul>
        </section>
        <section>
            <div class="heading-lv2">
                <div class="block">
                    <h2 class="heading_title">技術の特徴</h2>
                </div>
            </div>
            <div class="column-media" data-layout-sp="col-reverse">
                <div class="column_detail" data-wraparound="true">
                    <p>積算の従来業務である数量確認表を、全自動で出力。明確な積算根拠を基に、集計結果と3D表示を連動させることで、積算確認作業の効率化と信頼性を実現しました。</p>
                    <dl class="list-description">
                        <dt>3Dモデルの特性</dt>
                        <dd>
                            <ul class="list-bullet">
                                <li>設計・作図業務に寄り添うとともに、ARCHICADのデータをそのまま利用できます</li>
                                <li>誰でも簡単に見積書を短時間で作成するシステム（アドオンツール）です</li>

                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="column-layout" data-row-pc="2" data-row-sp="1">
                <div class="column_item gp-al-center">
                    <div class="image-set">
                        <figure class="image_inner">
                            <figcaption class="image_caption gp-al-center">アプリケーションによる技術の全体イメージ</figcaption>
                            <img src="@/assets/image/BiForArchiCAD/biImg03.png" alt="">
                        </figure>
                    </div>
                </div>
                <div class="column_item gp-al-center">
                    <div class="image-set">
                        <figure class="image_inner">
                            <figcaption class="image_caption gp-al-center">各種プロパデイの一括設定</figcaption>
                            <img src="@/assets/image/BiForArchiCAD/biImg04.png" alt="">
                        </figure>
                    </div>
                </div>
    </div>
</section>
<section>
    <div class="heading-lv2">
        <div class="block">
            <h2 class="heading_title">実績・事例</h2>
        </div>
    </div>
    <ul class="list-bullet">
        <li class="list-case">
          <a href="https://www.youtube.com/watch?v=eVzFSLdUh7I&t=1s&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9" target="_blank" rel="noopener" class="util-link--blank">
           内装業者のための積算・発注業務革命
        </a>
      </li>
        <li class="list-case">
        <a href="https://www.youtube.com/watch?v=wmqvkJztpnY&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9" target="_blank" rel="noopener" class="util-link--blank">
          Revitデータを最適にARCHICADデータへ変換する方法
        </a>
      </li>
    </ul>
</section>  
        <div class="close-button-wrap">
          <ul class="list-button gp-al-center" data-row-pc="3">
            <li class="link-button i-close">
                <a href="/BiForArchiCad#BiForArchicadContentlist" class="link_label">閉じる</a>
            </li>
          </ul>
        </div>
      </div>
    </div>         

</template>
<style scoped>
.container {
    padding-bottom: 60px;
    width: 800px;
    margin: 0 auto;
    padding: 75px 0;
}
.contents > *:first-child, .contents > section:first-child > *:first-child {
    margin-top: 0 !important;
}
.heading-lv2 {
    margin: 30px 0;
}
.heading-lv2 .block {
    position: relative;
    display: block;
    padding: 4px 0 3px 30px;
}
.heading-lv2 .heading_title {
    position: relative;
    font-size: 1.5rem;
    line-height: 1.5;
}
.heading-lv2 .block::before {
    background: #2e70db;
}
.heading-lv2 .block::before, .heading-lv2 .block::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    content: "";
}
.heading-lv2 .block::after {
    height: 15px;
    background: #da1818;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    content: "";
}
.list-bullet.is-bullet_large > li {
    font-size: 1.2rem;
    font-weight: bold;
}
.list-bullet > li {
    position: relative;
    padding-left: 20px;
}
.list-bullet > li.is-bullet_large::before, .list-bullet.is-bullet_large > li::before {
    top: .35em;
    left: 0;
    width: 12px;
    height: 12px;
}
.list-bullet > li.is-bullet_large::before, .list-bullet.is-bullet_large > li::before {
    top: .35em;
    left: 0;
    width: 12px;
    height: 12px;
}
.list-bullet > li::before {
    position: absolute;
    top: .45em;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #6f88b0;
    content: "";
}
.column-media > .column_detail > *:first-child {
    margin-top: 0 !important;
}
.list-description > dt {
    margin: 0 0 .2em;
    font-weight: bold;
}
.list-description {
    margin-top: 1em;
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
.image-set .image_caption {
    margin: 19px 0 .2em;
    font-weight: bold;
}
.close-button-wrap {
    margin-top: 35px;
}
.list-button[data-row-pc].gp-al-center {
    -webkit-justify-content: center;
    justify-content: center;
}
[data-row-pc]:not([data-row-pc="1"]) {
    -webkit-display: flex;
    display: flex;
    flex-flow: row wrap;
}
.list-button {
    margin-top: 20px;
}
/* .gp-al-center {
    text-align: center!important;
} */
ul, ol {
    list-style: none;
}
.list-button[data-row-pc] > li {
    -webkit-display: flex;
    display: flex;
}
.list-button[data-row-pc] > li > a {
    -webkit-display: flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    min-width: 0;
}
 .link-button > a {
    display: inline-block;
    position: relative;
    padding: 13px 30px 12px;
    padding-left: -18px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #333;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
}
.link-button .link_label {
    display: inline-block;
    line-height: 1.5;
} 
.link-button.i-close > a::before,
.link-button.i-close > a::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    width: 12px;
    height: 2px;
    margin-top: -1px;
    background: #888;
    transform: rotate(45deg);
    transform-origin: center;
}

.link-button.i-close > a::after {
    transform: rotate(-45deg);
}

.link-button.i-close > a::before {
    margin-top: -1px;
    margin-left: 3px;
    display: block;
}

.link-button.i-close > a::after {
    margin-top: -1px;
    margin-left: 3px;
    display: block;
}

.link-button > a:hover {
    color: #00a27c;
    background-color: #eff8f6;
    border-color: #d6efe9;
}
.list-case a{
    color: #333;
    /* text-decoration: none; */
}
/* .list-case a:hover{
    text-decoration-line: underline;
} */
.list-case  ::after{
    position: relative;
    width: 14px;
    height: 14px;
    top: -2px;
    margin: 0 .5em;
    display: inline-block;
    vertical-align: middle;
    content: "";
    background: url(@/assets/image/NewsHome20230818/linkArrowBlack.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}
.util-link--blank:after{
  position: relative;
  width: 20px;
  height: 20px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}
.util-link--blank:after {
    background: url(@/assets/image/Info360/NewsYoutebe.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}
</style>
    
    
   
    