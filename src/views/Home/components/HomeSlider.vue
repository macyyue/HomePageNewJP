<script>
</script>
<template>
  <div class="Main__body">
    <div class="Main__content">
      <h3 class="homeHeadline1">
          JOIN US!
          <br>
          <small>ユーズファクトリで働きませんか？</small>
        </h3>

      <ul class="solution-category-list">
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/slider01.jpg" alt="">
                    </a>
                  </div>
                </li>
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/slider02.jpg" alt="" height="">
                    </a>
                  </div>
                </li>
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/slider03.jpg" alt="" height="">
                    </a>
                  </div>
                </li>
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/slider04.jpg" alt="" height="">
                    </a>
                  </div>
                </li>
              </ul>
              <div class="adopt">
              <router-link to="/Recruit">
                    <strong>採用情報はこちら</strong>
              </router-link>
   
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
    background-color: #999;
}
.Main__content {
    padding: 4em 30px 100px;
    margin: 0 auto;
    
}
.text--right {
    margin: 10em 0 0;
    text-align: right;
    
}
.text, .text--center, .text--right {
    font-size: 1rem;
    
}
.text, .text--center {
  
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
    font-family: 游明朝体,Yu Mincho,YuMincho,ヒラギノ明朝 Pro,Hiragino Mincho Pro,MS P明朝,MS PMincho,serif;
}
.util-bold{
  font-weight: 700!important;
}
.util-link--blank:after{
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
    margin-bottom: 0!important;
}

.solution-category-list{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 30px;
}
.solution-category-list__elm {
    width: 25%;
    list-style: none;
}
.solution-category-list__image {
  height: 100%;
}
.solution-category-list__image img {
    width: 100%;
    height: 300px;
}
.solution-category-list a{
    color: #333;
    text-decoration: none;
}
.solution-category-list a:hover{
  text-decoration-line: underline;
}
.solution-category-list__title{
    font-weight: 700;
    position: relative;
    font-size: 1rem;
}
.solution-category-list__title:after{
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
.homeHeadline1 {
    text-align: center;
    color: white;
    line-height: 1.4;
    font-family: "Montserrat", YuGothic, "Noto Sans Japanese", "游ゴシック", Verdana, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
}
h3 {
    text-align: center;
    margin-top: -6px;
    margin-left: 30px;
}
.adopt {
text-align: center;
margin-top: 30px;
}
.adopt a {
    color: white;
    text-decoration: none;
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 1000px;
    padding: 0.8rem 1rem;

}
.adopt a:hover {
    color: white;
    box-shadow: 0 5px 10px #636363;
}


</style>