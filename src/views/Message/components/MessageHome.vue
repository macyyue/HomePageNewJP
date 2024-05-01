<script setup>

</script>
<template>
    <div class="MainContent">
    <div class="meassageMainArea delayed-image"><img src="@/assets/company01.jpg" alt="" style="width: 100%; height:100% ;">
        <div class="centeredText">
        <p>MESSAGE</p>
        <p>メッセージ</p>
     </div> 
    </div>
    <div class="messageWrapper">
    <article class="mainContents recruitWrap intWrap">
    <figure class="intTitle">
<figcaption>
    <div class="imgName">
    <img src="@/assets/int02.jpg" alt="">
    <h3><span>代表取締役</span><br />
    上嶋 泰史</h3>
</div>
<p>高専を卒業後、スーパーゼネコンへ入社。現場監督や技術研究所、見積部、技術部とさまざまな経験を積んできた。現場監督は10年のキャリアがあり、測量を始めとする現場調査業務の非効率さに頭を悩ませていた。建設業界全体における課題と捉え、業界を改革するべく、2013年に株式会社U&#8217;sFactoryを設立。『3DCADを活用した見積装置および見積プログラム』など、建設現場の働きやすさを実現するシステムを発明した。趣味は硬式テニスや乗馬、ドライブ、旅行。土曜の午前中はテニスで汗を流すことが習慣となっている。</p>
 </figcaption>
</figure>

<section class="interviewWrap">
<div class="interviewBox">
<h2><i class="far fa-square"></i>動画でcheck！インタビューの様子</h2>
<p><video muted playsinline controls src="@/assets/interview.mp4"></video></p>
<p>仕事で何かを成し遂げたい、その意欲を応援する会社です。<br />
U&#8217;sFactoryは、建設業界の当たり前を変えて、より良い働き方を創造するために設立しました。そんな志を持って立ち上げた会社で働く社員にも、仕事に前向きに取り組んでほしいと社長は考えています。「新しいチャレンジがしたい」「海外を相手に仕事がしたい」「大きなことを成し遂げたい」など、どんな志も応援し、実現に向けてサポートする環境があります。
</p>
</div>
<div class="interviewBox">
<h2><i class="far fa-square"></i>仕事をする上で大切にしていること</h2>
<p><img src="@/assets/company02.jpg" alt="" align="right">どんな難しい問題でも「できるようになるための方法を徹底的に考えること」を大切にしています。当社のシステムを開発できたのも、この考えがあったからです。現地調査で撮影した写真のナンバリングも「そういうものだ」という捉え方が業界内では定着していました。でも「こんなものがあったらいいな」という想いは誰にもあるはずで。その実現を追求することで、新しい価値が生まれるのです。</p>
<p>それと社会や誰かのためになる仕事をすることも大切にしています。測量から積算までをシステムで簡単にできるようにすれば、今まで専門知識がなければできなかった建設の仕事が身近になり、雇用の可能性が広がると思うんですね。若手の雇用も増えるきっかけになればとも思いますし、建設業界で働く人が多くなると業界の将来も明るくなります。目先の仕事の成果を見ても、喜んでいただいているお客様は大勢いて。もっといいシステムを提供したいと意欲が湧いてきますね。
</p>
</div>
<div class="interviewBox">
<h2><i class="far fa-square"></i>今回入社される方に期待すること</h2>
<p>スタッフをまとめること、私と一緒に組織や事業をつくることを期待していますね。建設業界の働き方を改革する当社のシステムは、急激に取引先を増やしています。測量や積算のデータ作成や作図などを当社が引き受ける案件も、増加の一途です。多くの依頼に応えるために、組織としてワンランク上を目指したいんです。</p>
<p>だから、入社される方には私の右腕として、組織運営や事業拡大を進めてほしい。2013年設立というまだ若い会社ですから、チャレンジを続けていく段階です。マネジメントでも組織でも、タブーはありません。作業の工程表作成や仕事の割り振り方なども、イチから見直していいです。とはいえ、最初から組織や事業への改善提案を求めることはないので、ご安心ください。まずはスタッフと関係性を育み、組織としての一体感を作っていくことに期待しています。その後は、私と同じ目線で事業を育てるアイデアを考え、一緒に業界を改革してほしいです。
</p>
</div>
</section>

</article>
</div>
<div id="ftEntry">
    <img src="@/assets/img16.jpg" alt="" class="ftEntryImg">
    <p class="tit yugothic">現場の働きやすさを創造する</p>
    <router-link to="/LoginForm"><p class="Btn"><span>INTERNSHIP ENTRY</span></p></router-link>
</div>	
</div>
</template>

<style>
.MainContent{
    min-width: 1390px;
}
.meassageMainArea {
    width: 100%; 
    height: 650px;
    background-size: cover;
    background-position: center;
    position: relative; 
}
.centeredText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: .6rem;
  background-color: rgba(239, 236, 236, 0.8);
  width: 500px;
}
.centeredText p {
  position: relative;
  text-align: center;
  color: #000;
  margin: 0;
  padding: 0.5rem 0;
}
.meassageMainArea p:nth-of-type(1){
    font-size: 7.5rem;
}
.meassageMainArea p:nth-of-type(2){
    font-size: 1.5rem;

}
.mainContents{
    margin: auto;
    width: 960px;
}
figure.intTitle {
    position: relative;
    width: 100%;
}
.imgName > img {
    position: absolute;
    top: -180px;
    width: 120px;
    left: 20px;
    border: 3px solid #ffffff;
    border-radius: 10px;
}
.imgName h3 {
    padding-left: 160px;
    padding-top: 12px;
    font-size: 150%;
    color: #000000;
    font-weight: bold;
    border-bottom: none;
    margin: -90px 0 0;
    line-height: 1.2em;
}
figure.intTitle figcaption p {
    font-size: 100%;
    padding: 0 0 0 0;
    line-height: 1.8em;
    margin: 20px;
}
.mainContents p {
    font-size: 100%;
    line-height: 2.5em;
    vertical-align: baseline;
    padding: 0 0 20px;
}

.interviewWrap .interviewBox {
    border-top: 1px solid #696060;
    margin: 20px auto;
}
.interviewWrap .interviewBox p {
    margin: 0 auto 20px;
    width: 95%;
}
.interviewWrap .interviewBox img{
  top: 50%;
  left: 50%;
  transform: translate(10%, 7%);
}
.interviewWrap .interviewBox video {
    width: 100%;
    height: 100%;
    margin: 20px auto;
    display: block;
}
video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
}
.interviewWrap .interviewBox h2 {
    font-size: 120%;
    font-weight: bold;
    background: none;
    color: #000000;
    text-indent: 0;
    margin: 20px auto 10px;
    width: 95%;
}

</style>