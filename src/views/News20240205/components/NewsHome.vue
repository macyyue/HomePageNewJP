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
  <div>
    <div class="Main__guide">
      <ol class="main-breadcrumb">
        <li>
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
            <h1 class="heading1-v2__title">わずか5分で完了！！仮設足場計画～発注数量算出を自動化</h1>
          </div>
        </div>
        <p class="text--right">2024年2月5日</p>
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">開発背景・解決策のご紹介</h2>
          </div>
        </div>
        <p class="text">
          新築及び改修工事における中低層の建築物において、足場計画はとても重要な作業である。<br>また、足場計画とともに、各工程ごとに足場数量を算出し、運搬車両の設定とともに発注しなければならない。
          この地味な作業に、多くの時間を費やし、いまだに手作業で計算し、発注を行っている。<br>
          特に、最近次世代足場（アルバトロス）の足場計画が多く、足場拾いの手計算がとても面倒になっている声が多く聞かれる。<br><br>
          これらの問題を解決するために、だれでも簡単に足場計画から、発注帳票作成までの自動化を可能にした。
        </p>
        <div class="column__item item__image01">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="item-movie">
                <iframe width="584" height="390" src="https://www.youtube.com/embed/_D6q6--Xtug"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="">
                </iframe>
              </div>
            </figure>
          </div>
        </div>
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">BI For Archicadのご紹介</h2>
          </div>
        </div>
        <p class="text">
          ではもう少し詳しい使い方を見てみると、以下のようになっている。
        </p>
        <div class="column generator-column" data-col-pc="2" data-col-sp="1">
          <!-- 図⑴ -->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2024/02/スライド1.png')">
                    <img src="@/assets/image/News20240205/スライド1.png" alt="Web情報共有システム"
                      style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑵-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2024/02/スライド2.png')">
                    <img src="@/assets/image/News20240205/スライド2.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑶-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド3.png')">
                    <img src="@/assets/image/News20240205/スライド3.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑷-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド4.png')">
                    <img src="@/assets/image/News20240205/スライド4.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div class="column generator-column" data-col-pc="2" data-col-sp="1">
          <!-- 図⑸ -->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <Lightbox ref="lightbox" />
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド5.png')">
                    <img src="@/assets/image/News20240205/スライド5.png" alt="Web情報共有システム"
                      style="width: 300px; max-width: 100%;">
                  </a>
                </div>
                <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
              </figure>
            </div>
          </div>
          <!-- 図⑹-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド6.png')">
                    <img src="@/assets/image/News20240205/スライド6.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑺-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド7.png')">
                    <img src="@/assets/image/News20240205/スライド7.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑻-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド8.png')">
                    <img src="@/assets/image/News20240205/スライド8.png" alt="" style="width: 300px; max-width: 100%;">
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
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド9.png')">
                    <img src="@/assets/image/News20240205/スライド9.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑽-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド10.png')">
                    <img src="@/assets/image/News20240205/スライド10.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑾-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド11.png')">
                    <img src="@/assets/image/News20240205/スライド11.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <!-- 図⑿-->
          <div class="column__item">
            <div class="image-wrap--center">
              <figure class="image">
                <div class="image__frame">
                  <a @click="openImage('https://us-factory.jp/wp-content/uploads/2024/02/スライド12.png')">
                    <img src="@/assets/image/News20240205/スライド12.png" alt="" style="width: 300px; max-width: 100%;">
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
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
  </div>
</template>
<style scoped>
body *,
body :after,
body :before {
  box-sizing: border-box;

}

.Main__guide {
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

.Main__guide li,
.Main__guide ol {
  margin: 0;
  padding: 0;
  list-style-type: none;

}

.override-link-style {
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

.Main__body {
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
  font-family: 游明朝体, Yu Mincho, YuMincho, ヒラギノ明朝 Pro, Hiragino Mincho Pro, MS P明朝, MS PMincho, serif;
  font-weight: 500;
}

.text--right {
  margin: 6em 0 0;
  text-align: right;
}

.text,
.text--center,
.text--right {
  font-size: 1rem;
}

.text,
.text--center {
  margin: 1em 0 0;
}

[data-col-pc]:not([data-col-pc="1"]) {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

[data-col-pc="2"]>:nth-child(odd) {
  margin-left: 0 !important;
}

[data-col-pc="2"]>:nth-child(-n+2) {
  margin-top: 0 !important;
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

.image-wrap,
.image-wrap--center {
  display: flex;
  margin: 2em 0 0;
}

.image {
  margin: 0;
}

.image-wrap--center>* {
  text-align: center;
}

.image__caption,
.image__caption--center,
.image__caption--right {
  line-height: 1.6em;
  text-align: left;
  margin: .6em 0 0;
  font-size: 0.9rem;
}

.image__caption a {
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

.image__frame,
.image a.image__frame,
.image a.image__frame--modal {
  display: inline-block;
  cursor: pointer;
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
  font-family: 游明朝体, Yu Mincho, YuMincho, ヒラギノ明朝 Pro, Hiragino Mincho Pro, MS P明朝, MS PMincho, serif;
}

a.button__type {
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

a.button__type:hover {
  background-color: #fff;
  color: #333;
}

.AboutText {
  display: block;
  position: relative;
  margin-bottom: 1em;
  content: "";
}

.AboutText a {
  color: #333;
}

.util-bold {
  font-weight: 700 !important;

}

.util-link-Youtube--blank:after {
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

.util-link--blank:after {
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
  margin-bottom: 0 !important;
}

.button-wrap {
  margin: 1em 0 0;
}

.button-wrap,
.button-wrap--center {
  display: flex;
  flex-flow: row wrap;
}

.button-v2 .button-v2__type {
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