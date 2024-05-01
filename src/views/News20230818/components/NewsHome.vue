<script>

import Lightbox from '@/views/LightBox/LightBox.vue'

export default {
  components: {
    Lightbox,
  },
  methods: {
    openImage(src) {
      this.$refs.lightbox.openLightbox(src);
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
              <span class="main-breadcrumb__type--nolink">{{ $route.params.title}}</span>
            </li>
          </ol>
          <!--/Main__guide-->
        </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading1-v2">
       <div class="heading1-v2__inner">
        <h1 class="heading1-v2__title">【U’sFactory祝10周年】革新的Web情報共有システム「Info360Ⓡ」に新機能追加【 8/30～9/1 大阪DX展に出展】</h1>
       </div>
      </div>
      <p class="text--right">2023年8月18日</p>

      <p class="text">
            革新的Web情報共有システム「Info360Ⓡ」に新機能追加 <br><br>
            「Info360Ⓡ」のベータ版を昨年10月から、ゼネコン様、設計事務所様、専門工事会社様などの多くの方々にTESTをいただき意見交換を重ねることで、修正および機能追加をしてきました。
            様々なご要望等の意見を集約することで、コンセプトが明確となり、実践的に活用できるものになってきました。
        </p>
      <p class="text">
        点群をクラウドにアップロードするだけで即座にモデリングするとともに、３６０度画像、３次元設計データ、ＰＤＦ、写真データなどを一元的に管理する。共有したいデータを登録し、ＵＲＬを関係者に送信することで、専用アプリをインストールすることなく手軽に現場で閲覧できることが特徴です。
      </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1" style="text-align: center;">
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <!-- 図⑴ -->
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2023/08/Info360-Concept-768x758.png')">
              <img src="@/assets/image/NewsHome20230818/Info360.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <figcaption class="image__caption">Web情報共有システム</figcaption>
          </figure>
            </div>
            </div>
            <!-- 図⑵ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage (' https://us-factory.jp/wp-content/uploads/2023/08/高さー360度-1024x508.png')">
              <img src="@/assets/image/NewsHome20230818/360映像.png" alt="オフィス内の様子" style="width: 750px; max-width: 100%;">
            </a>
            </div>
            <figcaption class="image__caption" >
              <a href="https://tools.us-factory.jp/pcv/guest/cont/64c3186983762" rel="noopener" target="_blank" class="button__type" >
               <span class="button__label">Info360 Sample Page はこちら</span> 
              </a>
            </figcaption>
          </figure>
            </div>
            </div>
            <div class="image-wrap--center"></div>
      </div>
       <!-- 機能追加のご紹介 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">機能追加のご紹介</h2>
         </div>
        </div>
        <p class="text">
                中でも、今回新たに機能追加した部分は、改修工事や増築工事が多い中で、古い図面（手書き図）をPDFにしたものを「Info360Ⓡ」の3D空間上に出現させ、現況と比較できることを実現しました。<br><br>
                今回、新たに「Building Plan PDF Converter」というWebアプリを開発したことにより、古い図面を3D空間上に切り出す手順として、①PDFを読み込み ②各フロアの範囲を切り出し ③原点及びスケール調整とフロア高さ設定することで、登録されたPDFを「Info36oⓇ」上で表現し、3Dモデル化することなく、短時間でイメージを共有することを可能とした。<br><br>
                登録されたPDFを「Info36oⓇ」上で表現し、3Dモデル化することなく、短時間でイメージを共有することを可能とした。
          </p>
       <div class="column generator-column" data-col-pc="3" data-col-sp="4">
          <div class="column__item item__image01">
            <div class="image-wrap">
            <figure class="image">
              <!-- 図⑶ -->
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/Info360-PDF01.png')">
                <img src="@/assets/image/NewsHome20230818/Info360-PDF01.png" alt="" style="width: 320px; max-width: 100%;">
              </a>
              <figcaption class="image__caption">Building Plan PDF Converter</figcaption>
              </div>
              </figure>
            </div>
          </div>
          <div class="column__item item__image02">
          <div class="image-wrap">
          <figure class="image">
            <!-- 図⑷ -->
          <div class="image__frame">
            <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/Info360-PDF02.png')" >
            <img src="@/assets/image/NewsHome20230818/Info360-PDF02.png" alt="" style="width: 320px; max-width: 100%;">
          </a>
          <figcaption class="image__caption" >
            <a href="https://us-factory.jp/wp-content/uploads/2023/05/Info360%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95202308-22.pdf" rel="noopener" target="_blank" class="button__type" >
            <span class="button__label">Info360パンフはこちら</span> 
            </a>
            </figcaption>
          </div>
          </figure>
          </div>
            </div>
          <div class="column__item item__image03">
          <div class="image-wrap">
          <figure class="image">
            <!-- 図⑸ -->
          <div class="image__frame">
            <a  @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/Info360-PDF03.png')" >
            <img src="@/assets/image/NewsHome20230818/Info360-PDF03.png" alt="" style="width: 450px; max-width: 100%;">
          </a>
          </div>
          </figure>
          </div>
          </div>
        </div>
        <!-- U’sFactory祝10周年 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">U’sFactory祝10周年</h2>
         </div>
        </div>
        <p class="text">
          おかげ様で、U’sFactoryは2013年8月20日に創業し、10周年を迎えました。社員数は2023年8月現在で、11人パートタイマー10人アルバイト2~4名の総勢26人体制となっています。<br><br>
          また、昨年末には事務所を移転し、作業環境の向上を図る上で、社員自らが内装設計・施工を実施し創意工夫と自由な職場づくりを体験しました。
          </p>
       <div class="column generator-column" data-col-pc="3" data-col-sp="4" style="margin-left: 48px;">
          <div class="column__item item__image01">
            <div class="image-wrap">
            <figure class="image">
              <!-- 図⑹ -->
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/jimusyo-1.png')">
                <img src="@/assets/image/NewsHome20230818/jimusyo-1.png" alt="" style="width: 320px; max-width: 100%;">
              </a>
              </div>
              </figure>
            </div>
          </div>
          <div class="column__item item__image02">
          <div class="image-wrap">
          <figure class="image">
            <!-- 図⑺ -->
          <div class="image__frame">
            <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/jimusyo-2.png')">
            <img src="@/assets/image/NewsHome20230818/jimusyo-2.png" alt="" style="width: 320px; max-width: 100%;">
            </a>
          </div>
          </figure>
          </div>
            </div>
          <div class="column__item item__image03">
          <div class="image-wrap">
          <figure class="image">
            <!-- 図⑻ -->
          <div class="image__frame">
            <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/08/jimusyo-3.png')">
            <img src="@/assets/image/NewsHome20230818/jimusyo-3.png" alt="" style="width: 320px; max-width: 100%;">
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
        <h3 class="AboutText">
          <a href="https://www.japan-build.jp/osaka/ja-jp/about/previous.html" target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold"> 第7回 JAPAN BUILD OSAKA－建築の先端技術展（建築DX展HP）</span>
        </a>
      </h3>
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
    margin: 10em 0 0;
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
    display: inline-block;
    position: relative;
    vertical-align: middle;
    content: ""; 
}
.AboutText a{
  color: #333;
}
.util-bold{
  font-weight: 700!important;
  
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
.lightbox-image {
  max-width: 250px; 
  max-height: 50%; 
}
.small-click-area{
  position: relative;
  display: inline-block;
  padding: 50px;
}
</style>