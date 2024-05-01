<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const aboutSections = ref([]);
const router = useRouter();

onMounted(() => {
 
  aboutSections.value = document.querySelectorAll('.about__section');
  
  // 添加路由导航守卫
  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      // 如果是从其他页面跳转而来，则隐藏元素
      aboutSections.value.forEach((section) => {
        section.classList.remove('is-visible');
      });
    }
    next();
  });

  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  aboutSections.value.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
   
      section.classList.add('is-visible');
    }
  });
};
</script>
<template>
  <div class="mainContent">
    <div class="UsfactoryMainArea delayed-image"><img src="@/assets/company01.jpg" alt="" style="width: 100%; height:100% ;">
        <div class="UsfactoryCenteredText">
        <p>ユーズファクトリーについて</p>
        <p>U’S FACTORY</p>
     </div> 
    </div>
    <div class="about">
    <div class="about__inner">
        <div class="about__content">
            <div class="about__intro">
               <picture>
                  <img src="@/assets/companyTitle3.svg" alt="ABOUT USFACTORY GROUP">
               </picture>
              </div>
        <div class="about__message">
            <section class="about__section about__section--01">
                  <h2 class="about__heading is-inscreen"><img src="@/assets/point01.svg" alt="">
                            これまでのユーズファクトリー
                        </h2>
                <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                    当社は、2013年に設立。スーパーゼネコンで施工管理を務め、キャリアを積んできた社長が立ち上げた会社です。
                    長年の現場での経験から、「測量や作図などに複数の会社が関わること」や「現場の技量がなければ大型工事は手掛けられない」などの非効率な現状に疑問を感じた社長。
                    測量・作図・モデリング・積算を自動で行なう独自システム『Info360（R）』『BI For ARCHICAD』の開発に成功し、業界の常識を覆す事業を展開しています。
                    既に大手ゼネコンを始め、多くの取引先へサービスを提供。
                </p>
        <div class="about__image is-inscreen" data-inscreen data-inscreen-type="fadein-up">
                <picture>
                <img class="point01img" src="@/assets/point01img1.svg" alt="">
                </picture>
             </div>
            </section>
            <section class="about__section about__section--02">
                  <h2 class="about__heading is-inscreen">
                    <img src="@/assets/point02.svg" alt="">
                            これからのユーズファクトリー
                    </h2>
                <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                    これまでの建設業界にはないサービスを提供し、業界を改革したい。その想いをカタチにするべく、当社は独自のITシステムを開発し、業務効率化を始めとする価値を提供しています。事業にかける想いの根底には、私がスーパーゼネコンに勤めていたときの経験があって。工事前の現地調査は、電線や電柱、道路などの膨大な写真を撮影し、ナンバリングします。これが時間も費用もかかる。その他にも、現場が負担に感じる業務は数多くありました。もっと効率的に働く方法を作れないかと考え、当社を立ち上げたのです。
                    <br><br>
                    測量や3DCADモデル、設計図、積算、施工図を一貫して自動で手掛ける当社のシステムは、他に類を見ません。リピート率はほぼ100％という実績からも、ニーズに応えられていると自負しています。海外からも問い合わせが来ているため、海外展開も計画中です。国内外の建設業界に新しい価値を提供するために、これから事業を加速させます。
                </p>
               </section>
               <section class="about__section about__section--03">
                  <h2 class="about__heading is-inscreen">
                    <img src="@/assets/point03.svg" alt="">
                            ユーズファクトリーの姿
                    </h2>
                <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                    建築業界のなかにおいてBIM（Building Information Modeling）の重要性が非常に高まっています。<br>
                    Informationという単語に表されるように、ただのビジュアルツールとして利用する３DCADではなく、多くの情報をどのように組み合わせるのかが重要となります。海外ではBIMマネージャーと呼ばれる方が、何をどのようにしたら上手くいくのかをコントロールしています。
                    そこで、株式会社U’sFactoryではBIMマネージャーとしての活動だけでなく、各企業に適したBIMの活用スタイルを提案し、教育・実施のサポートを全国に展開します。<br><br>

                    特に弊社で力を注いでいるBIM活用事業は大きく二つありまして、<br>
                    ①点群計測と360°カメラを活用した建物・道路の３DCADモデル作成及びXYZ座標付360°動画の提供が可能な<br>
                    「Info360」サービス<br><br>

                    ②３DCADを活用した積算・集計システム<br>
                    「BI For ARCHICAD」<br><br>

                    の開発・販売及びサービスの提供をしております。
                    この大きな二つの事業により、建築における「リアルとバーチャルの融合」を目指し、今後も日々研鑽し、より良いサービスの提供に力を注いでいきたいと考えます。
                </p>
               </section>
            </div>
        </div>
    </div>

</div>
<div id="ftEntry">
    <img src="@/assets/img16.jpg" alt="" class="ftEntryImg">
    <p class="tit yugothic">現場の働きやすさを創造する</p>
    <router-link to="/LoginForm"><p class="Btn"><span>INTERNSHIP ENTRY</span></p></router-link>
</div>
</div>
</template>

<style>
.mianContent{
    min-width: 1390px;
}
.UsfactoryMainArea {
    width: 100%; 
    height: 650px;
    background-size: cover;
    background-position: center;
    position: relative; 
}
.UsfactoryCenteredText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: .6rem;
  background-color: rgba(239, 236, 236, 0.8);
  width: 600px;
  height: 208px;
}
.UsfactoryCenteredText p {
  position: relative;
  text-align: center;
  color: #000;
  margin: 0;
  padding: 0.5rem 0;
  /* font-family: "Montserrat", "Noto Sans Japanese", -apple-system, BlinkMacSystemFont, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, sans-serif; */
}
.UsfactoryMainArea p:nth-of-type(1){
    font-size: 2.8rem;
    font-weight: bold;
}
.UsfactoryMainArea p:nth-of-type(2){
    font-size: 1.5rem;
    margin-top: 68px;
}
.about{

    padding: 0 15px;
}
.about__inner {
    width: 81.25%;
    margin: auto;
    position: relative;
    background-repeat: no-repeat;
    background-position: center top 92px;
    padding-top: 40px;
    padding-bottom: 160px;
}
.about__inner::before {
    left: 0;
    width: 100%;
    height: 30px;
    content: "";
    position: absolute;
    bottom: calc(100% - 1px);
    width: calc(100% + 40px);
    left: -20px;
    height: 40px;
    background-color:#fff;
}
.about__content {
    display: flex;
    flex-direction: column;
    padding: 0 3.8%;
}
.about__intro {
    position: relative;
    height: auto;
}
.about__intro img {
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: auto;
    height: 95px;
}
.about__message{
    position: relative;
    margin-top: 50px; 
    
}
.about__section {
    padding: 20px 0;
    position: relative;
    margin: 20px 16.7%;  
}
.is-inscreen {

    font-family: "Montserrat", "Noto Sans Japanese", -apple-system, BlinkMacSystemFont, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, sans-serif;
}
.about__text {
    margin-top: 30px;
    text-align: justify;
    text-justify: inter-ideograph;
    text-justify: inter-character;
    font-size: 15px;
    letter-spacing: 0.6px;
    line-height: 2.1;
}
.about__heading {
    font-size: 28px;
    letter-spacing: 1.4px;
}
.about__heading img{
    content: "";
    display: inline-block;
    width: 160px;
    height: 142px;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    margin-right: 30px;
}
.about__section .point01img{
  width: 100%;
  height: auto;
  margin-top: 20px;
}
.about__section {
  opacity: 0;
  transition: opacity 1s ease;
}

.about__section.is-visible {
  opacity: 1;
}
</style>