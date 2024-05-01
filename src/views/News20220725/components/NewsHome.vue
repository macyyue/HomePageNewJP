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
        <h1 class="heading1-v2__title">BI Structureが各社に必要とされる理由とは</h1>
       </div>
      </div>
      <p class="text--right">2022年7月25日</p>
      <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">BI Structureのご紹介</h2>
         </div>
        </div>
      <div class="column generator-column-v3" data-col-pc="2" data-col-sp="1">

        <div class="column__item item__text">
        <p class="text" style="padding-top: 30px;">
        2021年7月にリリースされた「BI Structure」がすべてのプロジェクトに必須となっている。
        そもそもBI Structureとは何か？というと、<br><br>
        構造計算データからも連携が可能かつ、ARCHICADに直接変換し、BI For ARCHICADで鉄筋や鉄骨詳細を作成するためには欠かせない、「構造3Dモデル(RC・S・SRC)を作成する専用ツール」である。
        </p>
        </div>
        <div class="column__item item__image01">
        <div class="image-wrap--center">
        <figure class="image">
        <div class="item-movie">
        <iframe width="584" height="390" 
        src="https://www.youtube.com/embed/_D6q6--Xtug" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen="">
      </iframe>
        </div>
        </figure>
        </div>
        </div>
      </div>

       <!--プロジェクトのご紹介 -->
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title">プロジェクトのご紹介</h2>
         </div>
        </div>
        <p class="text">
          画面イメージを見ると以下のような構成になっている。(図1~4)
          </p>
          <div class="column generator-column" data-col-pc="2" data-col-sp="1">
            <!-- 図⑴ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド1.png')">
              <img src="@/assets/image/News20220725/スライド1.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド2.png')">
              <img src="@/assets/image/News20220725/スライド2.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⑶ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド3.png')">
              <img src="@/assets/image/News20220725/スライド3.png" alt="" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド4.png')">
              <img src="@/assets/image/News20220725/スライド4.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
        </div>
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
         </div>
        </div>
        <p class="text">
          ではもう少し詳しい使い方を見てみると、以下のようになっている。<br>
          構造計算データがある場合はそちらを利用する。また、計算データがない場合においても簡単に登録ができる仕掛けとなっている。(図5~6)<br>
          この定義データだけでの入力は、ヒューマンエラーによる入力ミスや、間違えに気が付かないため、リスト図を自動作図し、リスト図を見ながら直接データを修正するところが大きな特徴である。こうすることで、だれでも簡単に部材リストを登録確認することを実現している。(図7~8)
          </p>
          <div class="column generator-column" data-col-pc="2" data-col-sp="1">
            <!-- 図⑸ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド5.png')">
              <img src="@/assets/image/News20220725/スライド5.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド6.png')">
              <img src="@/assets/image/News20220725/スライド6.png" alt="" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド7.png')">
              <img src="@/assets/image/News20220725/スライド7.png" alt="" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド8.png')">
              <img src="@/assets/image/News20220725/スライド8.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>

            
        </div>
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
         </div>
        </div>
        <p class="text">
          さらに、部材配置を直感的に行えるようにしたことで、簡単な入力であることを皆が理解し、より多くの担当者が抵抗なく利用できるように配慮した。(図9~10)<br>
          「BI Structure」で入力されたデータをArchiCADに連携されると同時に、部材詳細情報がプロパティに登録される。ことプロパティ情報をもとに鉄筋詳細モデルが簡単に作成される。このように、ArchiCADに連携し、鉄筋詳細を作図するために利用されていることがわかる。また、鉄筋詳細を作成した後、加工帳及び積算に活用していくことを可能としている。(図11~12)
          </p>
          <div class="column generator-column" data-col-pc="2" data-col-sp="1">
            <!-- 図⑼ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド9.png')">
              <img src="@/assets/image/News20220725/スライド9.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
          </figure>
            </div>
            </div>
            <!-- 図⑽-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド10.png')">
              <img src="@/assets/image/News20220725/スライド10.png" alt="" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド11.png')">
              <img src="@/assets/image/News20220725/スライド11.png" alt="" style="width: 300px; max-width: 100%;">
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
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド13.png')">
              <img src="@/assets/image/News20220725/スライド12.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>

            
        </div>
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
         </div>
        </div>
        <p class="text">
          しかし、BIMで作成した鉄筋数量と、積算で利用する鉄筋数量は異なる。
          <br>それは一体どういうことかというと、積算協会が定める積算基準では、鉄筋のかぶり厚さを考慮しないのである。では、実務運用をするにはどうすればよいのかということを考えた結果、積算時は補正数量を算出し、その両方を算出し、それぞれのシチュエーションに合わせて提供できれば良いという結論に達した。(図13)
          <br>そして、その仮説が正しいかを立証するために、ゼネコン各社様と検証を重ね、実務運用の目途を立てたところである。(図14)
          <br>さらに、自動作成した鉄筋詳細は、1本ずつバラバラにもでき、詳細納まりに応じて修正を可能とした。(図15)
          </p>
          <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
            <!-- 図⒀ -->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド14.png')">
              <img src="@/assets/image/News20220725/スライド13.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
          </figure>
            </div>
            </div>
            <!-- 図⒁-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド15.png')">
              <img src="@/assets/image/News20220725/スライド14.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⒂-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド16.png')">
              <img src="@/assets/image/News20220725/スライド15.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
        </div>
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
         </div>
        </div>
       <p class="text">
        では、DX活用ということで一歩進んでみると、鉄筋詳細モデルはそのまま土工事の掘削施工図（床付け図）に活用される。また、型枠の自動発生から、型枠数量だけでなく、納まりを確認。さらには、コンクリート施工図利用（自動作図）といった一気通関の流れが見えてくる。(図16~18)
       </p>
        <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
            <!-- 図⒃-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド17.png')">
              <img src="@/assets/image/News20220725/スライド16.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
          </figure>
            </div>
            </div>
            <!-- 図⒄-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド18.png')">
              <img src="@/assets/image/News20220725/スライド17.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図⒅-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド19.png')">
              <img src="@/assets/image/News20220725/スライド18.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
        </div>
        <div class="heading2">
          <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
         </div>
        </div>
        <p class="text">
          では、鉄骨造の場合はどうであろうか。<br>
          鉄骨造の場合も同様で、「BI Structure」に読み込んで、構造計算データを活用し、計算データに入っていない部分を手修正および追加することで最終構造モデルを簡単に作成していく。最終的に、早期の合意形成されたモデルを鉄骨FABへ送り利用していくという流れだ。(図19~25)
          <br>このように「BI Structure」は各社にとって必要なツールであることが理解できる。
       </p>
        <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
            <!-- 図⒆-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <Lightbox ref="lightbox" />
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド21.png')">
              <img src="@/assets/image/News20220725/スライド19.png" alt="Web情報共有システム" style="width: 300px; max-width: 100%;">
            </a>
            </div>
            <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
          </figure>
            </div>
            </div>
            <!-- 図⒇-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド22.png')">
              <img src="@/assets/image/News20220725/スライド20.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>
            <!-- 図21-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド23.png')">
              <img src="@/assets/image/News20220725/スライド21.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
           <!-- 図22-->
             <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド24.png')">
              <img src="@/assets/image/News20220725/スライド22.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
          <!-- 図23-->
          <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド25.png')">
              <img src="@/assets/image/News20220725/スライド23.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
          <!-- 図24-->
            <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド26.png')">
              <img src="@/assets/image/News20220725/スライド24.png" alt="" style="width: 300px; max-width: 100%;">
            </a>
            </div>
          </figure>
            </div>
            </div>  
           <!-- 図25-->
           <div class="column__item">
            <div class="image-wrap--center">
            <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド27.png')">
              <img src="@/assets/image/News20220725/スライド25.png" alt="" style="width: 300px; max-width: 100%;">
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
        <!-- <h3 class="AboutText">
          <a href="https://www.youtube.com/watch?v=YQeaFC0zXXs&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9" target="_blank" rel="noopener" class="util-link-Youtube--blank">
          <span class="util-bold"> info360 PointCloud viewer</span>
        </a>
      </h3>
      <h3 class="AboutText">
          <a href="https://us-factory.jp/wp-content/uploads/2023/05/Info360%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95202308-22.pdf" target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold"> Info360パンフレットはこちら</span>
        </a>
      </h3> -->
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