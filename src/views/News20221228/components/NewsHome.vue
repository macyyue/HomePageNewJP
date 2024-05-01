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
              <span class="main-breadcrumb__type--nolink">{{ $route.params.title }}</span>
            </li>
          </ol>
          <!--/Main__guide-->
        </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading1-v2">
       <div class="heading1-v2__inner">
        <h1 class="heading1-v2__title">内装業者のための積算・発注業務革命とは</h1>
       </div>
      </div>
      <p class="text--right">2022年12月28日</p>
      <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">開発コンセプトのご紹介</h2>
         </div>
        </div>
      <p class="text">
      内装工事におけるLGS/ボード工事はすべてのプロジェクトにおいて必須作業です。
      しかしながら、事前に調整をしっかりとしないと現場が大変なことになります。<br><br>
      &nbsp;&nbsp;&nbsp;◆仕上施工図（開口補強位置/設備スリーブ/下地補強鉄板/ボードの種類/厚み）
      ⇒墨出し ⇒LGSスタッド ⇒下地補強・設備配管 ⇒ボード貼り<br><br>
      これらはすべて、積算・発注作業が煩雑で、内装業者の多くは手作業で行っていることが実情です。
      この大変な作業を一気通貫に行える仕組みを構築しました。
      それが「内装業者のための積算・発注業務革命」です。</p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1" style="text-align: center;">
        <div class="column__item">
          <Lightbox ref="lightbox" />
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/12/スライド1.png')">
              <img src="@/assets/image/News20221228/スライド1.png" alt="" style="width: 300px; max-width: 100%;">
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
            <!-- 図⑵ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/12/スライド2.png')">
              <img src="@/assets/image/News20221228/スライド2.png" alt="" style="width: 300px; max-width: 100%;">
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
        <!-- 展示関連情報 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">展示関連情報</h2>
         </div>
        </div>
        <h3 class="AboutText">
          <a href="https://www.youtube.com/watch?v=eVzFSLdUh7I&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9" target="_blank" rel="noopener" class="util-link-Youtube--blank">
          <span class="util-bold">内装業者のための積算・発注業務革命</span>
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