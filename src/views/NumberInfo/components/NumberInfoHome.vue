<script>
export default{
     
    }
</script>

<template>
<div id="page__all">
 <div id="main__contents" class="main__contents"> 
  <form>
    <h2 class="simple__grp__title">
        基本情報
    </h2>
<div class="form__wrap">
  <div class="form__item">
   <div class="form__item__title__wrap">
    <div class="form__item__title">
        漢字氏名：
        {{ $route.query.kanji_sei }}{{ $route.query.kanji_na }}
      </div>
       </div>
        </div>
<div class="form__item">
  <div class="form__item__title__wrap">
   <div class="form__item__title">
    カナ氏名：
    {{ $route.query.kana_sei }}{{ $route.query.kana_na }}
    </div>
     </div>
      </div>

<div class="form__item">
  <div class="form__item__title__wrap">
   <div class="form__item__title">
    性別：
    {{ $route.query.sex }}
    </div>
     </div>
      </div>
<div class="form__item">
  <div class="form__item__title__wrap">
   <div class="form__item__title">
    生年月日：{{ $route.query.birth_year }}年{{ $route.query.birth_month }}月{{ $route.query.birth_day }}日
  </div>
    </div>
     </div>           
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      現住所：{{ $route.query.keng }}{{ $route.query.jushog1 }}{{ $route.query.jushog2 }}{{ $route.query.jushog3 }}
    </div>
     </div>
      </div>
                       
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      自宅電話番号：{{ $route.query.telg_h }}-{{ $route.query.telg_m }}-{{ $route.query.telg_l }}
    </div>
      </div>
       </div>
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      携帯電話番号：{{ $route.query.keitai_h }}-{{ $route.query.keitai_m }}-{{ $route.query.keitai_l }}
    </div>
      </div>
       </div>  

<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      メールアドレス：{{ $route.query.email }}
    </div>
     </div>
      </div>
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      メールアドレス確認用：{{ $route.query.email2 }}
    </div>
     </div>
      </div>
       </div>

<h2 class="simple__grp__title">
    学校情報
</h2>

<div class="form__wrap">
  <div class="form__item">
    <div class="form__item__title__wrap">
      <div class="form__item__title">
        学校区分：{{ $route.query.school }}
       </div>
         </div>
          </div>

  <div class="form__item">
    <div class="form__item__title__wrap">
     <div class="form__item__title">
      設置区分：{{ $route.query.kokushi }}
      </div>
       </div>
        </div>

  <div class="form__item jsAxolSchool_freeze_scroll_top">
    <div class="form__item__title__wrap">
     <div class="form__item__title">
      学校名：{{ $route.query.gname }}
      </div>
       </div>
        </div>

  <div class="form__item jsAxolSchool_bk_wrap">
    <div class="form__item__title__wrap">
      <div class="form__item__title">
        学部：{{ $route.query.bname }}
       </div>
       </div>
        </div>

  <div class="form__item jsAxolSchool_bk_wrap">
    <div class="form__item__title__wrap">
      <div class="form__item__title">
        学科：{{ $route.query.kname }}
      </div>
       </div>
         </div>
     
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">
      卒業年月：{{ $route.query.school_to_Y }}年{{ $route.query.school_to_M }}月
    </div>
     </div>
      </div>
       </div>

<div class="form__bottom__textbox">
  内容を確認し、よろしければ次の画面に進んでください。
  </div>
<div class="form_button" >
    <button @click="goSearch" class="btn__l btn__confirm next__arrow" type="submit">次の画面に進む</button>
</div>
  <!-- form_button end -->
</form>
 </div>
  </div>

</template>

<style scoped>
.main__contents{
    position: relative;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    margin-bottom: 20px;
}
.textbox{
    margin-top: 30px; 
}
div#page__all {
    height: auto;
}
#page__all {
    -js-display: flex;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 980px;
    min-height: 100%;
    height: 100%;
}
.form__wrap {
    width: calc(100% - 80px);
    margin: 0 auto;
}
.form__item:first-of-type {
    border-top: none;
}
.form__item__title__wrap, .need__item, .need__item__small, .noneed__item, .noneed__item__small, .form__item__group, .form__item__multi {
    display: inline-block;
    vertical-align: middle;
}
.form__item {
    display: block;
    box-sizing: border-box;
    border-top: 1px dashed #ddd;
    margin: 0;
    padding: 15px 0;
}
.form__item__title__wrap {
    font-size: 0.8rem;
}
.form__item__title__wrap div {
    width: 100%;
    margin-bottom: 1px;
    line-height: 1.2;
    font-weight: bold;
    text-align: right;
    word-wrap: break-word;
}
.simple__grp__title {
    position: relative;
    background: #eee;
    box-sizing: border-box;
    margin: 25px 0 10px;
    padding: 8px 12px;
    font-weight: bold;
}
.form__bottom__textbox {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding: 20px 0 10px;
    text-align: center;
    font-size: 0.8rem;
}
.form_button {
    text-align: center;
    margin: 15px 0 30px;
}
.next__arrow.btn__l {
    padding: 12px 12px;
}
.btn__s.btn__confirm, .btn__l.btn__confirm {
    background-color: #1f81db;
    color: #fff;
    border-bottom: 3px solid #1967ae;
}
.btn__s.btn__confirm:hover, .btn__l.btn__confirm:hover {
    background-color: #1967af;
}

</style>
    