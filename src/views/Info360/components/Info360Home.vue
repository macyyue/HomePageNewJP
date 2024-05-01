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
          <router-link to="/Info360" class="override-link-style">
            <span class="main-breadcrumb__type--nolink">INFO360</span>
          </router-link>
        </li>
        <!-- <li class="last-item">
              <span class="main-breadcrumb__type--nolink">{{ newsTitle }}</span>
            </li> -->
      </ol>
      <!--/Main__guide-->
    </div>
    <div class="Main__body">
      <div class="Main__content">
        <div class="Info360__inner">
          <div class="Info360__intro">
            <span>建築・土木・鉄道・高速道路といったさまざまな分野において、
              <br>現地調査や点検・計測など第三者を含む複数人に対して、
              <br>現実空間の情報を共有する仕組みが求められています。
            </span>
          </div>

        </div>
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">スポットライト</h2>
          </div>
        </div>

        <!-- 商品の四つ動画 -->
        <ul class="sol_environment__list type01">
          <li>
            <router-link to="/ModelingService">
              <div class="ph">
                <iframe width="584" height="390" src="https://www.youtube.com/embed/peDermJTMkU"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="">
                </iframe>

              </div>
              <div class="body">
                <div class="title">高精度3D計測サービス</div>
                <div class="txt">
                  本商品は（株）岩根研究所と（株）U’sFactoryの共同開発商品であり、リアルとバーチャルをつなぐ革新的なプラットフォームを提供しています。
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/Info360Service">
              <a href="">
                <div class="ph">
                  <iframe width="584" height="390" src="https://www.youtube.com/embed/XO0t0NIvcKA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="">
                  </iframe>

                </div>
                <div class="body">
                  <div class="title">Ｉｎｆｏ３６０サービス</div>
                  <div class="txt">
                    現地での作業が早く簡単に、一人で操作可能なシステム

                    ※Info360（現地調査版）は2018年4月中旬よりサービスを開始しました。
                  </div>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/RobotEyeWalker4DExample">
              <a href="" target="_blank">
                <div class="ph">
                  <iframe width="584" height="390" src="https://www.youtube.com/embed/b0PQmmzDAZE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="">
                  </iframe>
                </div>
                <div class="body">
                  <div class="title">Robot Eye Walker4Dの活用</div>
                  <div class="txt">
                    主催 : 大塚商会・竹中工務店・東大グリーンICTプロジェクト(GUTP)・Tスポット・SDM 協賛:株式会社U’Sfactory
                  </div>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/RobotEyeWalker4D">
              <a href="" target="_blank">
                <div class="ph">
                  <iframe width="584" height="390" src="https://www.youtube.com/embed/yD_M6P0JUVk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="">
                  </iframe>
                </div>
                <div class="body">
                  <div class="title">Robot Eye Walker4D</div>
                  <div class="txt">
                    改修工事前の状況を確認する技術の紹介です。
                    改修後の間仕切り位置や、工事に係る準備作業の確認に有効であり、現地に行かなくても確認ができるという評価を
                    いただいた事例です。
                  </div>
                </div>
              </a>
            </router-link>
          </li>
        </ul>
        <!-- 関連情報 -->
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">関連情報</h2>
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
/* #mainWrap{
min-width: 1390px;
} */
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

.Main__guide li:last-child {
  margin-top: 1.5px;
}

.Main__guide .main-breadcrumb>li:after {
  margin: 0 10px;
  color: #666;
  content: "＞";
}

.Main__guide .main-breadcrumb>li:last-child:after {
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
  width: calc((103% - 37px)/2 - .1px);
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
  margin: 2em 42px 0;
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
  margin-bottom: 1em;
  position: relative;
  content: "";
}

.AboutText a {
  color: #333;
}

.util-bold {
  font-weight: 700 !important;

}

.util-link--blank:after {
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

.Info360__intro {
  margin-bottom: 63px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.6;
  text-align: center;
}

.titleImg {
  justify-content: center;
  display: flex;
  margin: 2em 0 0;
  margin-bottom: 50px;
}

.titleImg__inner {
  text-align: center;
}

.titleImg__inner img {
  width: 2000px;
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

.image__caption {
  line-height: 1.6em;
  text-align: left;
  margin: 10em 0 0;
  font-size: 0.9rem;


}

.image__caption02 {
  line-height: 1.6em;
  text-align: left;
  margin: 15em 0 0;
  font-size: 0.9rem;
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

.sol_environment__list.type01 {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 70px;
  padding: 0;
}

.sol_environment__list.type01 li:nth-child(odd) {
  margin-left: 0;
}

.sol_environment__list.type01 li {
  width: 49.91667%;
  margin-left: .1667%;
  list-style-type: none;
}

.sol_environment__list.type01 li a {
  display: flex;
  flex-direction: column;
  height: 100%;

}

.sol_environment__list li a:link,
a:visited {
  color: #333;
  text-decoration: none;
}

a {
  transition: all .25s cubic-bezier(.4, 0, .2, 1) 0s;
}

.sol_environment__list.type01 .title {
  margin-bottom: 18px;
  padding-bottom: 15px;
  border-bottom: 1px solid #000;
  font-size: 1.7rem;
  font-weight: 700;
}

.sol_environment__list.type01 .body {
  flex-grow: 1;
  padding: 22px 24px;
  background-color: #f5f5f5;
}

.override-link-style {
  color: #333;
  text-decoration: none;
}
</style>