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
  <div id="mainWrap">
  <!-- メイン__ガイド 主要__指南-->
  <div class="Main__guide">
    <ol class="main-breadcrumb">
      <li>
        <router-link to="/" style="text-decoration: none;color: #333;">
          <span class="main-breadcrumb__type--nolink">ホーム</span>
        </router-link>
      </li>
      <li>
        <router-link to="/News" class="override-link-style">
          <span class="main-breadcrumb__type--nolink">Ｉｎｆｏ３６０サービス</span>
        </router-link>
      </li>
    </ol>
    <!--/Main__guide-->
  </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading2">
        <div class="heading2__inner">
          <h1 class="heading2__title">「Ｉｎｆｏ３６０」サービス</h1>
        </div>
      </div>
          <p class="text">
            現地調査や点検・計測など、現実空間の情報を共有するために、「現地での作業が早く簡単に、一人で操作可能なシステム」が必要である。<br><br>
            本商品は（株）岩根研究所と（株）U’sFactoryの共同開発商品であり、リアルとバーチャルをつなぐ革新的なプラットフォームを提供する。
          </p>
          <div class="column__item item__image01">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="item-movie">
                <iframe width="584" height="390" src="https://www.youtube.com/embed/XO0t0NIvcKA"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="">
                </iframe>
              </div>
            </figure>
          </div>


      <!-- 関連情報 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">関連情報</h2>
        </div>
      </div>
      <p class="MessageTitle">Ｉｎｆｏ３６０サービスに関する情報はこちらからご覧いただけます。</p>

      <div class="AboutText">
        <a href="https://www.youtube.com/watch?v=qNoxAXAeagQ" target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold"> KASUMIと学ぶInfo360</span>
        </a>
      </div>
      <div class="AboutText">
        <a href="https://www.youtube.com/watch?v=Fdd3DwWRyII" target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold"> RICOH THETA-ｓを活用した画像計測技術 </span>
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
</div>


</template>
<style scoped>
body *,
body :after,
body :before {
  box-sizing: border-box;

}
#mainWrap{
  min-width: 1390px;
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
  margin-top: 1.2px;
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

.image__caption {
  line-height: 1.6em;
  text-align: left;
  margin: 14.6em 0 0;
  font-size: 0.9rem;
}
</style>