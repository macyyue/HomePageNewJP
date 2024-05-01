<script>
import Lightbox from '@/views/LightBox/LightBox.vue'

export default {
  components: {
    Lightbox,
  },
  methods: {
    openImage(src,index) {
      this.$refs.lightbox.openLightbox(src,index,this.yourImageArray);
    },
  },
};
</script>
<template>
  
  <!-- メイン__ガイド 主要__指南-->
        <div class="Main__guide">
          <ol class="main-breadcrumb" >
            <li >
                <router-link to="/" style="text-decoration: none;color: #333;">
              <span class="main-breadcrumb__type--nolink">ホーム</span>
               </router-link>
            </li>
            <li>
              <router-link to="/News" class="override-link-style">
              <span class="main-breadcrumb__type--nolink">更新一覧</span>
            </router-link>
            </li>
            <li class="last-item">
              <span class="main-breadcrumb__type--nolink">{{ $route.params.title }}</span>
            </li>
          </ol>
          <!--/Main__guide-->
        </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading1-v2">
       <div class="heading1-v2__inner">
        <h1 class="heading1-v2__title">2023年5月16日 BI For AC V26をリリース「BIM積算機能が大幅にバージョンアップ」</h1>
       </div>
      </div>
      <p class="text--right">2023年5月12日</p>
      <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">BI For AC V26のご紹介</h2>
         </div>
        </div>
      <p class="text">
        2023年5月16日にBI For AC V26がリリースされます。 <br>
        ArchiCADのV17対応版から始まり、バージョンアップを重ね、今回で10回目となるV26版です。
        「BI For Archicad」の利用者は、ゼネコン、設計事務所、施工図事務所の関係者だけでなく、
        「鉄筋工事会社」「内装専門工事会社」「防水工事専門会社」といった専門工事会社の方々が利用する実務に適したソフトウエアになっています。(図1)<br>
        とても多くの利用者様からのお声をいただき、改良を重ね、修正追加項目数が6,000件近くにものぼります。開発10年目の計算をすると平均600件/年と、通常ではありえない、ソフトウエア開発スピードだと皆さまからのお声を多くいただいております。(図2)
        </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1" style="text-align: center;">
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
                <!-- 図⑴ -->
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド1.png')">
              <img src="@/assets/image/News20230511/スライド1.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
          </figure>
            </div>
            </div>
            <!-- 図⑵ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド2.png')">
              <img src="@/assets/image/News20230511/スライド2.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption" >
              <a href="https://us-factory.jp/wp-content/uploads/2023/05/Info360%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95202308-22.pdf" rel="noopener" target="_blank" class="button__type" >
               <span class="button__label">Info360パンフレットはこちら</span> 
              </a>
            </figcaption> -->
          </figure>
            </div>
            </div>
            <div class="image-wrap--center"></div>
      </div>

       <!--操作のご紹介 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">自動化操作のご紹介</h2>
         </div>
        </div>
        <p class="text">
          「BI For AC V26」では「積算事務所」「内装専門工」「鉄筋工」様の意見を多く取り入れることで、ゼネコンでのだけでなく各専門工事会社で利用する実施積算を可能にしました。
          最近多い導入事例は、「BI For Archicad」の説明を受けた後に、初めて3DCADに取り組むという方が増えてきたことです。これこそがBIM積算利用に効果があると感じた方の表れだと実感しています。だからこそ、BIM操作が初めての方にも、簡単操作で、煩雑な3DCAD入力操作を簡略化する工夫をしています。<br>
          たとえば、建物形状が異なる複雑な設定が必要な外壁裏の断熱吹付のモデル作成も、コマンド実行するだけで自動作成されます。(図3)
          また、積算者からの質問の多い、同一部屋に腰壁や異種仕上げ、梁型といった面倒な操作も簡単に行えます。(図4)
          </p>
          <div class="column generator-column" data-col-pc="2" data-col-sp="1" style="text-align: center;">
           <!-- 図⑶-->
          <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド3.png')">
              <img src="@/assets/image/News20230511/スライド3.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⑷ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド4.png')">
              <img src="@/assets/image/News20230511/スライド4.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
          </div>
   
            <p class="text">
              内部積算をするうえで、従来作業では、「コーナービート」「梁型」「腰壁」「異種仕上げ」「巻込み部仕上」積算は手計算後、手入力で表に転記するという煩わしい作業がありました。その作業と比較すると、「BI For AC」では自動化・最適化を図った業務効率向上と見える化を実現しています。さらにBIM積算において重要なことは、積算根拠を明確にしなければならないため、積算確認図の自動作成機能を追加しました。これはBIMを活用する新しい取り組みで、多くの積算者様からの声から実現したものです。(図5~6) <br>
              内部の各部屋における辺番号を壁と梁に付与し、積算用確認図と集計の際に計算根拠を紐づけました。この機能追加により、積算根拠の提出を必要とする物件での活用を可能にしました。また、内装工事専門会社と連携したLGSボード作成機能と積算を強化しました。(図7)
            </p>
            <div class="column generator-column" data-col-pc="3" data-col-sp="2" style="margin-left: 80px;">
            <!-- 図⑸ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド5.png')">
              <img src="@/assets/image/News20230511/スライド5.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⑹ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド6.png')">
              <img src="@/assets/image/News20230511/スライド6.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⑺ -->
             <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド7.png')">
              <img src="@/assets/image/News20230511/スライド7.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
          </div>
   
        <!-- 事例のご紹介 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">事例のご紹介</h2>
         </div>
        </div>
        <p class="text">
          ゼネコン担当者から要望の多い事例として、鉄骨耐火被覆、スタッドボルトの自動作成と積算がよく利用されています。積算段階の利用や、鉄骨製作CADの「Tekla」「Real4」からのIFCデータからの耐火被覆作成が好評です。(図8) <br>
          設備担当者からは、早い段階での設備貫通スリーブ許容範囲のデータ連携の評判も良いです。RC,S造ともに配管作成の場所を示すことで、大きな手戻りを防ぐことが可能です。(図9=10)
          </p>
       <div class="column generator-column" data-col-pc="3" data-col-sp="4" style="margin-left: 80px;">
          <!-- 図⑻ -->
          <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/05/スライド8.png')">
              <img src="@/assets/image/News20230511/スライド8.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
          </div>
            <!-- 図⑼-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド9.png')">
              <img src="@/assets/image/News20230511/スライド9.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⑽ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド10.png')">
              <img src="@/assets/image/News20230511/スライド10.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div> 
        </div>
        <!-- 展示関連情報 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">展示関連情報</h2>
         </div>
        </div>
      <div class="button-wrap" data-col-pc="1" data-col-sp="1">
          <div class="button-v2">
            <router-link to="/News">
            <a href="" class="button-v2__type">
              <span class="button-v2__label">一覧へ戻る</span>
            </a>
          </router-link>
          </div>
        </div>
      </div>
    </div> 
</template>
<style scoped>
body *, body :after, body :before {
  box-sizing: border-box;

}.Main__guide {
    min-width: 1264px;
}
.Main__guide .main-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 13px 40px 11px;
  
}
.Main__guide .main-breadcrumb>li {
  font-size: 0.9rem;
}

.Main__guide li, .Main__guide ol {
  margin: 0;
  padding: 0;
  list-style-type: none;

}
.override-link-style{
  color: #333;
  text-decoration: none;
}
.Main__guide .main-breadcrumb>li:after {
  margin: 0 10px;
  color: #666;
  content: "＞";
}
.Main__guide .main-breadcrumb>li.last-item:after {
  content: ""; 
}
.Main__guide .main-breadcrumb>li>span {
  color: #333;
  font-weight: 700;
  text-decoration: none;
}
.Main__body{
    min-width: 1390px;
}
.Main__content {
    max-width: 1264px;
    padding: 4em 30px 100px;
    margin: 0 auto;
}
.heading1-v2 {
    margin: 1.6em 0;
}
.heading1-v2__title {
    font-size: 2.05rem;
    line-height: 1.4em;
    margin: 0;
    font-family: 游明朝体,Yu Mincho,YuMincho,ヒラギノ明朝 Pro,Hiragino Mincho Pro,MS P明朝,MS PMincho,serif;
    font-weight: 500;
}
.text--right {
    margin: 6em 0 0;
    text-align: right;
}
.text, .text--center, .text--right {
    font-size: 1rem;
}
.text, .text--center {
  
    margin: 1em 0 0;
}

[data-col-pc]:not([data-col-pc="1"]) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}
[data-col-pc="2"]>:nth-child(odd) {
    margin-left: 0!important;
}
[data-col-pc="2"]>:nth-child(-n+2) {
    margin-top: 0!important;
}
[data-col-pc="2"]>* {
    width: calc((100% - 36px)/2 - .1px);
}
.column {
    margin: 2em 0 0;
}
.image-wrap--center {
    justify-content: center;
}
.image-wrap, .image-wrap--center {
    display: flex;
    margin: 2em 0 0;
}
.image {
    margin: 0;
}
.image-wrap--center>* {
    text-align: center;
}

.image__caption, .image__caption--center, .image__caption--right {
    line-height: 1.6em;
    text-align: left;
    margin: .6em 0 0;
    font-size: 0.9rem;
}
.image__caption a{
  color: #000;
}
.image__frame img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
    border-style: none;
}
.image {
    margin: 0;
}
.image__frame, .image a.image__frame, .image a.image__frame--modal {
    display: inline-block;
    cursor:pointer;
}
[data-col-pc]:not([data-col-pc=auto])>* {
    margin-top: 1.25em;
    margin-left: 36px;
}
.heading2 {
    border-bottom: 2px solid;
    border-color: #333;
    margin: 0 0 1.6em;
    padding: 3.4em 0 1.4em;
}
.heading2__title {
    font-size: 2rem;
    line-height: 1.4em;
    font-weight: 700;
    margin: 0;
    font-family: 游明朝体,Yu Mincho,YuMincho,ヒラギノ明朝 Pro,Hiragino Mincho Pro,MS P明朝,MS PMincho,serif;
}
a.button__type{
    padding: 1em 20px 1em 20px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    line-height: 1.4em;
    text-decoration: none;
}
.button__label {
    display: inline-block;
}
a.button__type:hover{
  background-color:#fff;
  color: #333;
}
.AboutText{
    display: block;
    position: relative;
    margin-bottom: 1em;
    content: ""; 
}
.AboutText a{
  color: #333;
}
.util-bold{
  font-weight: 700!important;
  
}
.util-link-Youtube--blank:after{
  position: relative;
  width: 20px;
  height: 20px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}
.util-link-Youtube--blank:after {
    background: url(@/assets/image/Info360/NewsYoutebe.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}
.util-link--blank:after{
  position: relative;
  width: 14px;
  height: 14px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}
.util-link--blank:after {
    background: url(@/assets/image/NewsHome20230818/linkArrowBlack.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}
.Main__content>:last-child {
    margin-bottom: 0!important;
}
.button-wrap {
    margin: 1em 0 0;
}
.button-wrap, .button-wrap--center {
    display: flex;
    flex-flow: row wrap;
}
.button-v2 .button-v2__type{
  padding: .8em 25px .8em 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 0;
  background-color: #dbdbdb;
  line-height: 1.4em;
  text-align: center;
  color: #333;

}
.button-v2 a {
    display: inline-block;
    text-decoration: none;
}

</style>