<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: '1',
          title: '',
        },
      ],
    };
  },
};
</script>

<template>
    <div class="Main__inner">
      <div class="Main__guide">
        <ol class="main-breadcrumb">
          <li>
            <router-link to="/" style="text-decoration: none;color: #333;">
              <span class="main-breadcrumb__type--nolink">ホーム</span>
            </router-link>
          </li>
          <li class="last-item">
            <span class="main-breadcrumb__type--nolink">更新一覧</span>
          </li>
        </ol>
        <!--/Main__guide-->
      </div>
    </div>
    <router-view></router-view>
    <div class="Main__body">
      <div class="Main__head">
      <div class="heading1">
        <div class="heading1__inner">
          <h1 class="heading1__title">更新一覧</h1>
        </div>
      </div>
      <!--/Main__head-->
    </div>
      <div class="Main__content">
        <div class="pulldown-navi">
          <!-- <div class="pulldown-navi__inner">
            <select class="pulldown-navi__select js-pulldown-navi">
              <optgroup label="">
                <option value>年度を選択してください</option>
                <option value="/news/2024/">2024年度</option>
                <option value="/news/2023/">2023年度</option>
                <option value="/news/2022/">2022年度</option>
                <option value="/news/2021/">2021年度</option>
                <option value="/news/2020/">2020年度</option>
                <option value="/news/2019/">2019年度</option>
                <option value="/news/2018/">2018年度</option>
                <option value="/news/2017/">2017年度</option>
              </optgroup>
            </select>
          </div> -->
        </div>
        <div class="news" data-news-pc="row">
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2024年02月05日</time>
                  <div class="news__category"><i class="util-badge--news">技術</i></div>
                </div>
                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20240205/わずか5分で完了！！仮設足場計画～発注数量算出を自動化" class="override-link-style">
                      わずか5分で完了！！仮設足場計画～発注数量算出を自動化
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年11月24日</time>
                  <div class="news__category"><i class="util-badge--news">お知らせ</i></div>
                </div>
                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20231124/AI Structureがリリースされました" class="override-link-style">
                      AI Structureがリリースされました
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年8月18日</time>
                  <div class="news__category"><i class="util-badge--events">イベント</i></div>
                </div>

                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20230818/【U’sFactory祝10周年】革新的Web情報共有システム「Info360Ⓡ」に新機能追加【8月30日~9月1日大阪DX展に出展】"
                      class="override-link-style">
                      【U’sFactory祝10周年】革新的Web情報共有システム「Info360Ⓡ」に新機能追加【8/30~9/1大阪DX展に出展】
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年6月11日</time>
                  <div class="news__category"><i class="util-badge--news">お知らせ</i></div>
                </div>
                <div class="news__caption">

                  <h3 class="news__title">
                    <router-link to="/News20230611/必見！！「超初めてのArchicad操作法」を無料公開" class="override-link-style">
                      必見！！「超初めてのArchicad操作法」を無料公開
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年5月22日</time>
                  <div class="news__category"><i class="util-badge--cat1612">イベント</i></div>
                </div>
                <div class="news__caption">
                  <router-link to="/News20230522/Info360（web PointCloud Viewer）がリリースされました（千葉幕張メッセ CSPI-EXPOに展示します）"
                    class="override-link-style">
                    <h3 class="news__title">Info360（web PointCloud Viewer）がリリースされました（千葉幕張メッセ CSPI-EXPOに展示します）</h3>
                  </router-link>

                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年5月12日</time>
                  <div class="news__category"><i class="util-badge--news">お知らせ</i></div>
                </div>
                <div class="news__caption">
                  <router-link to="/News20230512/2023年5月16日 BI For AC V26をリリース「BIM積算機能が大幅にバージョンアップ」"
                    class="override-link-style">
                    <h3 class="news__title">2023年5月16日 BI For AC V26をリリース「BIM積算機能が大幅にバージョンアップ」</h3>
                  </router-link>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2023年2月14日</time>
                  <div class="news__category"><i class="util-badge--cat1612">お知らせ</i></div>
                </div>
                <div class="news__caption">
                  <router-link to="/News20230214/「BI For Archicad」が国交省の建築BIM加速化事業で補助対象となるソフトウェアに認定されました"
                    class="override-link-style">
                    <h3 class="news__title">「BI For Archicad」が国交省の建築BIM加速化事業で補助対象となるソフトウェアに認定されました</h3>
                  </router-link>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2022年12月28日</time>
                  <div class="news__category"><i class="util-badge--news">技術</i></div>
                </div>
                <div class="news__caption">
                  <router-link to="/News20221228/内装業者のための積算・発注業務革命とは" class="override-link-style">
                    <h3 class="news__title">内装業者のための積算・発注業務革命とは</h3>
                  </router-link>

                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2022年8月23日</time>
                  <div class="news__category"><i class="util-badge--events">技術</i></div>
                </div>
                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20220823/【3次元計測モデリングサービス『Ｉｎｆｏ３６０®』が好調】" class="override-link-style">
                      【3次元計測モデリングサービス『Ｉｎｆｏ３６０®』が好調】
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2022年7月25日</time>
                  <div class="news__category"><i class="util-badge--news">技術</i></div>
                </div>
                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20220725/BI Structureが各社に必要とされる理由とは" class="override-link-style">
                      BI Structureが各社に必要とされる理由とは
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <article class="news__article">
            <div class="news__type">
              <div class="news__body">
                <div class="news__property">
                  <time class="news__date">2022年5月21日</time>
                  <div class="news__category"><i class="util-badge--news">お知らせ</i></div>
                </div>
                <div class="news__caption">
                  <h3 class="news__title">
                    <router-link to="/News20220521/産経新聞に「BIMデータの自動変換による見える化で合意形成を早期に実現へ」の記事が掲載されました"
                      class="override-link-style">
                      産経新聞に「BIMデータの自動変換による見える化で合意形成を早期に実現へ」の記事が掲載されました
                    </router-link>
                  </h3>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
</template>
<style scoped>
  body *, body :after, body :before {
    box-sizing: border-box;
}
.Main__body{
    min-width: 1390px;
}
.Main__content {
    max-width: 1264px;
    padding: 4em 30px 100px;
    margin: 0 auto;
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
    font-size: 1rem;
}

.Main__guide li, .Main__guide ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
 
}
.Main__guide .main-breadcrumb>li:after {
    margin: 0 10px;
    color: #666;
    content: "＞";
}
.Main__guide .main-breadcrumb>li.last-item:after {
  content: ""; 
}

.override-link-style {
  text-decoration: none; 
  color: #333; 
}
.Main__guide .main-breadcrumb>li>span {
    color: #333;
    font-weight: 700;
    text-decoration: none;
}
.heading1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    margin-bottom: 0;
    padding: 1.5em 0;
    background-color: #454545;
    color: #fff;
}
.heading1__inner {
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 32px;
}
.Main__content {
    padding: 4em 32px 100px;
}
.Main__content>:first-child, .Main__content>[class^=list-wrap]>:first-child, .Main__content>section:first-child>:first-child {
    margin-top: 0!important;
}
.pulldown-navi {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 2em 0 0;
}
.pulldown-navi__inner {
    display: block;
    min-width: 273px;

}
.pulldown-navi__select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    color: #fff;
    line-height: 1.4;
    cursor: pointer;
}
.pulldown-navi__inner {
    position: relative;
    border: 1px solid #666;
    background-color: #454545;
    display: inline-block;
    order: 1;
    min-width: 273px;
    transition: background-color .25s cubic-bezier(.4,0,.2,1) 0s,border-color .25s cubic-bezier(.4,0,.2,1) 0s;
    position: relative;
    border: 1px solid #666;

}
.pulldown-navi__inner:hover {
    background-color: #fff;
}
.pulldown-navi__inner:hover>.pulldown-navi__select {
    color: #454545;
}
div.Main__body .pulldown-navi__inner .pulldown-navi__select {
    border: none !important;
}
.pulldown-navi__select {
    padding: .8em 3.6em .8em 1.4em;
    font-size: 1rem;
    font-weight: 700;

}
.pulldown-navi__select option {
    color: #454545;
    font-weight: 500;
}
.Main__content>:last-child {
    margin-bottom: 0!important;
}
.news {
    margin: 1.2em 0 0;
    border-top: 1px solid #e0e0e0;
}
.news__article {
    border-bottom: 1px solid #e0e0e0;
}
.news .news__type, .news .news__type--blank, .news .news__type--excel, .news .news__type--modal, .news .news__type--nolink, .news .news__type--pdf, .news .news__type--powerpoint, .news .news__type--rss, .news .news__type--video, .news .news__type--word, .news .news__type--zip {
    padding: 1.2em 0;
    display: flex;
    align-items: flex-start;
    background-color: #fff;
    
}
.news__type ,.news__type--blank {
    color:#454545;
    text-decoration: none;
}
.news__caption:hover {
    text-decoration-line: underline;
}
.news[data-news-pc=row] .news__body {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
}
.news__body {
    flex: 1 1;
    order: 1;
}
.news__property {
    display: flex;
    align-items: baseline;
}
.news__date {
    font-size: 1rem;
    line-height: 22px;
    min-width: 10.5em;
    color: #999;
    font-weight: 700;
    white-space: nowrap;
}
.news[data-news-pc=row] .news__category {
    flex-direction: column;
    margin-right: 26px;
}
.news__category {
    display: inline-flex;
    flex-flow: row wrap;
    margin-bottom: -.83333em;
}
.util-badge--csr, .util-badge--events, .util-badge--ir, .util-badge--news, .util-badge--other, .util-badge--release {
    background-color: #454545;
}
[class*=util-badge--] {
    background-color: #454545;
    color: #fff;
}
.news[data-news-pc=row] .news__category>* {
    margin-right: 0;
}

[class*=util-badge--] {
    min-width: 104px;
    height: 25px;
    padding: 1px 10px 0;
    font-size: 0.8rem;
    line-height: 19px;
}
.util-badge, [class*=util-badge--] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    text-align: center;
    vertical-align: middle;
}
.news__caption {
    flex: 1 1;
}
.news .news__type .news__title {
    position: relative;
    line-height: 1.6em;
}
.news__title {
    font-size: 1rem;
}
.news__title {
    margin: 0;
    font-weight: 400;
}
</style>