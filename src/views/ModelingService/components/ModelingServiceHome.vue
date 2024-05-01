<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const newsTitle = ref('');
    const route = useRoute();
    const newsData = [
      {
        id: '20230611',
        title: '必見！！「超初めてのArchicad操作法」を無料公開',
      },
    ];
    onMounted(() => {
      const newsId = route.params.id;
      const selectedNews = newsData.find((news) => news.id === newsId);
      if (selectedNews) {
        newsTitle.value = selectedNews.title;
      }
    });

    return {
      newsTitle,
    };
  },
};
</script>
<template>
  <!-- メイン__ガイド 主要__指南-->
  <div id="mainWrap">
  <div class="Main__guide">
    <ol class="main-breadcrumb">
      <li>
        <router-link to="/" style="text-decoration: none;color: #333;">
          <span class="main-breadcrumb__type--nolink">ホーム</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ModelingService" class="override-link-style">
          <span class="main-breadcrumb__type--nolink">高精度3D計測サービス</span>
        </router-link>
      </li>
    </ol>
    <!--/Main__guide-->
  </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">高精度3D計測サービス</h2>
         </div>
        </div>
        <p class="text">
          話題の技術や取組みをピックアップして紹介します。<br><br>
            本商品は（株）岩根研究所と（株）U’sFactoryの共同開発商品であり、リアルとバーチャルをつなぐ革新的なプラットフォームを提供しています。<br><br>
            また、岩根研究所独自のCV（カメラベクター）技術を使い、全周囲動画映像からカメラ位置を高精度に求め、
            座標値を持ち合わせる三次元化映像を作成と3DACADを作成します。
        </p>
        <div class="column__item item__image01">
        <div class="image-wrap--center">
        <figure class="image">
        <div class="item-movie">
        <iframe width="584" height="390" 
        src="https://www.youtube.com/embed/peDermJTMkU" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen="">
      </iframe>
        </div>
        </figure>
        </div>
        </div>
      <!-- 関連情報 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">関連情報</h2>
        </div>
      </div>
      <p class="MessageTitle">高精度3D計測サービスに関する情報はこちらからご覧いただけます。</p>

      <div class="AboutText">
          <a href="https://us-factory.jp/wp-content/uploads/2015/06/3D_A4-2018%E6%9C%80%E7%B5%82.pdf" target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold">高精度３Ｄ計測サービス２０１８パンフはこちら</span>
        </a>
      </div>
      <div class="AboutText">
        <a href="https://www.youtube.com/watch?v=_YZeWCFbLnk" target="_blank" rel="noopener" class="util-link-youtube--blank">
          <span class="util-bold"> 急傾斜地敷地計測サービス</span>
        </a>
      </div>
      <div class="AboutText">
        <a href="https://www.youtube.com/watch?v=BSIhGZ31zEE" target="_blank" rel="noopener" class="util-link-youtube--blank">
          <span class="util-bold"> 世界初C1 ルート左右廻り3Dモデル</span>
        </a>
      </div>
      <div class="AboutText">
        <a href="https://www.youtube.com/watch?v=suZ_nUo7PQQ" target="_blank" rel="noopener" class="util-link-youtube--blank">
          <span class="util-bold"> 高精度3D計測サービス（ハイブリッド）</span>
        </a>
      </div>
      <div class="button-wrap" data-col-pc="1" data-col-sp="1">
        <div class="button-v2">
          <router-link to="/Info360">
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

.Main__guide li:last-child {
  margin-top: -0.5px;
}

.Main__guide .main-breadcrumb>li:last-child::after {
  content: none;
}

.Main__guide .main-breadcrumb>li>span {
  color: #333;
  font-weight: 700;
  text-decoration: none;
}

.Main__body {
  min-width: 1200px;
}

.Main__content {
  max-width: 1264px;
  padding: 4em 30px 100px;
  margin: 0 auto;
}
.text--right {
  margin: 10em 0 0;
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
  width: calc((103% - 36px)/2 - .1px);
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

.MessageTitle {
  margin: 2em 0;
}

.util-link-youtube--blank:after {
  position: relative;
  width: 20px;
  height: 20px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}

.util-link-youtube--blank:after {
  background: url(@/assets/image/Info360/NewsYoutebe.svg) no-repeat 0 0;
  color: rgb(51, 51, 51);
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
.image__caption {
  line-height: 1.6em;
  text-align: left;
  margin: 10em 0 0;
  font-size: 0.9rem;
}
/* @media (max-width: 700px) {
  .image__caption {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30em 0 0;

  }
} */
</style>