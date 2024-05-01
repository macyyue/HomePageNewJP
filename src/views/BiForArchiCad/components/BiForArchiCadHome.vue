<script>
export default {
  methods: {
    goAnchor(hash) {
      if (hash) {
        // 使用 document.querySelector(hash) 来查找具有指定哈希值的元素
        const anchor = document.querySelector(hash);
        if (anchor) {
          // 平滑滚动到该元素
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  },
  mounted() {
    // this.$nextTick() 方法确保在 Vue 实例已经渲染完毕后执行回调函数
    this.$nextTick(() => {
      // 检查当前 URL 中的哈希值，并尝试滚动到匹配的元素
      this.goAnchor(window.location.hash);
    });
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
          <router-link to="/BiForArchiCad" class="override-link-style">
            <span class="main-breadcrumb__type--nolink">BI for ArchiCad</span>
          </router-link>
        </li>
      </ol>
      <!--/Main__guide-->
    </div>

    <div class="Main__body">
      <div class="Main__content">
        <div class="BiForArchiCad__inner">
          <div class="BiForArchiCad__intro">
            <div class="titleImg__inner">
              <img src="@/assets/image/BiForArchiCAD/BiTitle.jpg" alt="" class="titleImg">
            </div>
          </div>
        </div>
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">スポットライト</h2>
          </div>
        </div>
        <p class="text">
          BI For
          ARCHICADは従来のモデリング・修正作業を1/10にする技術を徹底的に追及し、エキスパート者が考える自動モデリング・最適化機能を実装し、誰でも簡単に積算・施工モデルを提供可能。BIMの煩わしさから解放され、省人化・効率化を実現しました。
        </p>
        <p class="text">
          ARCHICADだけで見積書・発注と工程シミュレーションができるのは、このソフトだけです。
        </p>
        <div class="column generator-column">
          <div class="column__item" style="text-align: center;">
            <img src="@/assets/image/BiForArchiCAD/BI-For-ARCHICAD構成.png" alt="">

            <figcaption class="image__caption">
              <div class="button-container">
                <a href="https://us-factory.jp/wp-content/uploads/2022/09/002_BI-For-ArchiCAD%E3%83%91%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%882022.pdf"
                  rel="noopener" target="_blank" class="button__type" data-v-a31dbd20="">
                  <span class="button__label" data-v-a31dbd20="">
                    BI For ArchiCADパンフレット2022はこちら
                  </span>
                </a>
              </div>
            </figcaption>
          </div>
        </div>
        <div class="heading2" id='BiForArchicadContentlist'>
          <div class="heading2__inner">
            <h2 class="heading2__title">BI For ArchiCAD</h2>
          </div>
        </div>

        <ul class="solution-category-list">
          <li class="solution-category-list__elm">
            <div class="solution-category-list__image">
              <a href="">
                <img src="@/assets/image/BiForArchiCAD/biImg01.png" alt="">
              </a>
            </div>
            <div class="solution-category-list__detail">
              <p class="solution-category-list__title">
                <router-link to="/BiForArchiCadContent">
                  BI For ArchiCad
                </router-link>
              </p>
            </div>
          </li>
          <li class="solution-category-list__elm">
            <div class="solution-category-list__image">
              <a href="">
                <img src="@/assets/image/BiForArchiCAD/biImg05-1.png" alt="" height="">
              </a>
            </div>
            <div class="solution-category-list__detail">
              <p class="solution-category-list__title">
                <router-link to="/AreaCalculation">
                  面積計算方法の概要
                </router-link>
              </p>
            </div>
          </li>
          <li class="solution-category-list__elm">
            <div class="solution-category-list__image">
              <a href="">
                <img src="@/assets/image/BiForArchiCAD/スライド1.png" alt="" height="">
              </a>
            </div>
            <div class="solution-category-list__detail">
              <p class="solution-category-list__title">
                <router-link to="/ArchiCAD">
                  ArchiCAD サポートツール
                </router-link>
              </p>
            </div>
          </li>

        </ul>

        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">関連情報</h2>
          </div>
        </div>
        <p class="MessageTitle">BI For ArchiCADに関する情報はこちらからご覧いただけます。</p>
        <div class="AboutText">
          <a href="https://www.youtube.com/watch?v=_D6q6--Xtug&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9"
            target="_blank" rel="noopener" class="util-link--blank">
            <span class="util-bold"> BI Structureから鉄筋発生方法</span>
          </a>
        </div>

        <div class="AboutText">
          <a href="https://www.youtube.com/watch?v=5MqjWHk78cE&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9"
            target="_blank" rel="noopener" class="util-link--blank">
            <span class="util-bold">超簡単！！「ALC/ECP/LGSボード最適化手法」</span>
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

.column {
  margin: 2em 0 0;
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

.column__item img {
  width: 880px;
  height: 520px;
}

.BiForArchiCad__intro {
  margin-bottom: 63px;
  width: 100%;
  line-height: 1.6;
  text-align: center;
}

.titleImg__inner {
  text-align: center;
}

.titleImg__inner img {
  width: 1500px;
  max-width: 100%;
  height: auto;
  vertical-align: top;
  margin: 2em 0 0;
}

.image__caption {
  margin: 3em 0 0;
  font-size: 0.9rem;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

a.button__type:hover {
  background-color: #fff;
  color: #333;
}

a.button__type {
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  line-height: 1.4em;
  text-decoration: none;
  width: 337px;
  height: 50px;
}

a {
  transition: all .25s cubic-bezier(.4, 0, .2, 1) 0s;
}

.override-link-style {
  color: #333;
  text-decoration: none;
}

.MessageTitle {
  margin: 2em 0;
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

.solution-category-list {
  display: flex;
  flex-wrap: wrap;
  margin: 70px 0 0;
  justify-content: center;
  padding: 0;
}

.solution-category-list__elm {
  width: 33.333333%;
  background-color: #f5f5f5;
  list-style: none;
}

.solution-category-list__image {
  height: 272px;
}

.solution-category-list__image img {
  width: 399px;
  height: 272px;

}

.solution-category-list a {
  color: #333;
  text-decoration: none;
}

.solution-category-list a:hover {
  text-decoration-line: underline;
}

.solution-category-list__detail {
  padding: 15px;
}

.solution-category-list__title {
  font-size: 1rem;
}

.solution-category-list__title {
  margin: 0 0 .2em;
  font-weight: 700;
  position: relative;
}

.solution-category-list__title:after {
  display: inline-block;
  position: relative;
  top: -4px;
  width: 24px;
  height: 8px;
  margin-left: 8px;
  background: url(@/assets/image/BiForArchiCad/title-img.svg) no-repeat 0 0;
  vertical-align: middle;
  content: "";
}
</style>