<script>
export default{
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
  <div class="Main__body">
    <div class="Main__content">
      <div class="heading2" id='BiForArchicadContentlist'>
      <div class="heading2__inner">
        <h2 class="heading2__title">スポットライト</h2>
        </div>
      </div>
    
      <ul class="solution-category-list">
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/Home/mainImg01.jpg" alt="">
                    </a>
                  </div>
                  <div class="solution-category-list__detail">
                    <p class="solution-category-list__title">
                      <router-link to="/info360">
                      INFO360
                    </router-link>
                    </p>
                  </div>
                </li>
                <li class="solution-category-list__elm">
                  <div class="solution-category-list__image">
                    <a href="">
                      <img src="@/assets/image/Home/mainImg02.jpg" alt="" height="">
                    </a>
                  </div>
                  <div class="solution-category-list__detail">
                    <p class="solution-category-list__title">
                      <router-link to="/BiForArchiCad">
                        BI For ArchiCad
                    </router-link>
                    </p>
                  </div>
                </li>
              </ul>
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
    padding: 0 30px 100px;
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
    border-bottom: 1px solid;
    border-color: #e0e0e0;
    /* margin: 0 0 1.6em;
    padding: 3.4em 0 1.4em; */
}
.heading2__title {
    font-weight: 600;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.4em;
    text-align:center;
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
.column__item img{
    width: 880px;
    height: 520px;
}
.BiForArchiCad__intro {
    margin-bottom: 63px;
    width: 100%;
    line-height: 1.6;
    text-align: center;
}
.titleImg__inner{
  text-align: center;
}
.titleImg__inner img{
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
.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px; 
}
a.button__type:hover{
  background-color:#fff;
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
    transition: all .25s cubic-bezier(.4,0,.2,1) 0s;
}
.override-link-style{
    color: #333;
    text-decoration: none;
}
.MessageTitle{
    margin: 2em 0;
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
.solution-category-list{
    display: flex;
    flex-wrap: wrap;
    margin: 70px 0 0;
    justify-content: center;
    padding: 0;
}
.solution-category-list__elm {
    width:  42%;
    background-color: #f5f5f5;
    list-style: none;
    
}
.solution-category-list__image {
    height: 320px;
}
.solution-category-list__image img {
    width: 500px;
    height: 320px;

}
.solution-category-list a{
    color: #333;
    text-decoration: none;
}
.solution-category-list a:hover{
  text-decoration-line: underline;
}
.solution-category-list__detail {
    padding: 15px;
}
.solution-category-list__title{
    font-size: 1rem;
}
.solution-category-list__title{
    margin: 0 0 .2em;
    font-weight: 700;
    position: relative;
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
.solution-category-list__detail p {
  text-align: right;
}

</style>