<script>
export default{
    data(){
      return{
            kanji_sei:"",
            kanji_na:"",
            kana_sei:"",
            kana_na:"",
            sex:"",
            birth_year:"",
            birth_month:"",
            birth_day:"",
            keng:"",
            jushog1:"",
            jushog2:"",
            jushog3:"",
            telg_h:"",
            telg_m:"",
            telg_l:"",
            keitai_h:"",
            keitai_m:"",
            keitai_l:"",
            email:"",
            email2:"",
            school:"",
            kokushi:"",
            gname:"",
            bname:"",
            kname:"",
            school_to_Y:"",
            school_to_M:""
      }
     },
     methods:{
      goSearch(){
        this.$router.push({
        path:'/NumberInfo',
        query:{
          kanji_sei:this.kanji_sei,
          kanji_na:this.kanji_na,
          kana_sei:this.kana_sei,
          kana_na:this.kana_na,
          sex:this.sex,
          birth_year:this.birth_year,
          birth_month:this.birth_month,
          birth_day:this.birth_day,
          keng:this.keng,
          jushog1:this.jushog1,
          jushog2:this.jushog2,
          jushog3:this.jushog3,
          telg_h:this.telg_h,
          telg_m:this.telg_m,
          telg_l:this.telg_l,
          keitai_h:this.keitai_h,
          keitai_m:this.keitai_m,
          keitai_l:this.keitai_l,
          email:this.email,
          email2:this.email2,
          school:this.school,
          kokushi:this.kokushi,
          gname:this.gname,
          bname:this.bname,
          kname:this.kname,
          school_to_Y:this.school_to_Y,
          school_to_M:this.school_to_M,
        }
      }) 
      }
     }
     
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
         漢字氏名
      </div>
       </div>

  <div class="need__item">必須</div> 
   <div class="form__item__group type__name fb_checkpoint">
    <div class="name__left">
     <div class="input__label">漢字姓</div>
      <input size="10" v-model="kanji_sei" placeholder="漢字姓" type="text"/></div>
       <div class="name__right"> 
        <div class="input__label">漢字名</div>
         <input size="10" v-model="kanji_na" placeholder="漢字名" type="text" ></div>
  <div class="check__mark fb_ownAlertStrs"></div>
  </div>
   </div>
    
 <div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">カナ氏名</div>
      </div>
  <div class="need__item">必須</div>
   <div class="form__item__group type__name fb_checkpoint">
    <div class="name__left">
     <div class="input__label">カナ姓</div>
      <input size="10" v-model="kana_sei" placeholder="カナ姓" type="text"/>
      </div>
   <div class="name__right">
    <div class="input__label">カナ名</div>
     <input size="10" v-model="kana_na" placeholder="カナ名" type="text"/></div>
  <div class="check__mark fb_ownAlertStrs"></div>
  </div>
   </div>

<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">性別</div>
     </div>
  <div class="need__item">必須</div>  
   <div class="form__item__group type__sex fb_checkpoint">
    <label><input value="男性" v-model="sex" type="radio">男性</label>
    <label><input value="女性" v-model="sex" type="radio">女性</label>
    <label><input value="その他" v-model="sex" type="radio">その他</label>
    <label><input value="回答しない" v-model="sex" type="radio">回答しない</label>
<div class="check__mark fb_ownAlertStrs"></div>
 </div>
  </div>
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">生年月日</div>
     </div>
  <div class="need__item">必須</div>  
   <div class="form__item__group type__birth fb_checkpoint">
    <span name="birth">
      <span class="select_wrap">
        <select name="" class="fb_dateElement_Y" v-model="birth_year">
            <option value="">--</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
        </select>
      </span>年 
      <span class="select_wrap">
        <select name="" class="fb_dateElement_m" v-model="birth_month">
        <option value="">--</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        </select>
      </span>月 
      <span class="select_wrap">
        <select name="" class="fb_dateElement_d" v-model="birth_day">
        <option value="">--</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        </select>
      </span>日
    </span>
   <div class="notice__example"></div>
  <div class="check__mark fb_ownAlertStrs"></div>
</div>
</div>           
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">現住所</div>
      </div>
  <div class="need__item">必須</div>
    <div class="form__item__multi">
     <div class="form__item item__input">
      <div class="form__item__title__wrap">
       <div class="form__item__title__sub">都道府県</div>
        </div>
      <div class="form__item__group">
       <div class="type__prefectures fb_checkpoint need__item__small">
        <span class="select_wrap">
          <select v-model="keng" id=""  name="">
          <option value="">（選択してください）</option>
          <option value="北海道">北海道</option>
          <option value="青森県">青森県</option>
          <option value="岩手県">岩手県</option>
          <option value="宮城県">宮城県</option>
          <option value="秋田県">秋田県</option>
          <option value="山形県">山形県</option>
          <option value="福島県">福島県</option>
          <option value="茨城県">茨城県</option>
          <option value="栃木県">栃木県</option>
          <option value="群馬県">群馬県</option>
          <option value="埼玉県">埼玉県</option>
          <option value="千葉県">千葉県</option>
          <option value="東京都">東京都</option>
          <option value="神奈川県">神奈川県</option>
          <option value="新潟県">新潟県</option>
          <option value="富山県">富山県</option>
          <option value="石川県">石川県</option>
          <option value="福井県">福井県</option>
          <option value="山梨県">山梨県</option>
          <option value="長野県">長野県</option>
          <option value="岐阜県">岐阜県</option>
          <option value="静岡県">静岡県</option>
          <option value="愛知県">愛知県</option>
          <option value="三重県">三重県</option>
          <option value="滋賀県">滋賀県</option>
          <option value="京都府">京都府</option>
          <option value="大阪府">大阪府</option>
          <option value="兵庫県">兵庫県</option>
          <option value="奈良県">奈良県</option>
          <option value="和歌山県">和歌山県</option>
          <option value="鳥取県">鳥取県</option>
          <option value="島根県">島根県</option>
          <option value="岡山県">岡山県</option>
          <option value="広島県">広島県</option>
          <option value="山口県">山口県</option>
          <option value="徳島県">徳島県</option>
          <option value="香川県">香川県</option>
          <option value="愛媛県">愛媛県</option>
          <option value="高知県">高知県</option>
          <option value="福岡県">福岡県</option>
          <option value="佐賀県">佐賀県</option>
          <option value="長崎県">長崎県</option>
          <option value="熊本県">熊本県</option>
          <option value="大分県">大分県</option>
          <option value="宮崎県">宮崎県</option>
          <option value="鹿児島県">鹿児島県</option>
          <option value="沖縄県">沖縄県</option>
          <option value="日本国外">日本国外</option>
         </select>
        </span>
 <div class="check__mark fb_ownAlertStrs"></div>
  </div>
   </div>
    </div>
<div class="form__item item__input">
  <div class="form__item__title__wrap">
    <div class="form__item__title__sub">市区郡町村</div>
      </div>
  <div class="form__item__group">
    <div class="fb_checkpoint need__item__small">
      <input size="30" v-model="jushog1" placeholder="現住所(市区郡町村)" type="text"/>
        <div class="check__mark fb_ownAlertStrs"></div>
         </div>
    <div class="notice__example"></div>
     </div>
      </div>

<div class="form__item item__input">
  <div class="form__item__title__wrap">
    <div class="form__item__title__sub">町域・番地</div>
      </div>
  <div class="form__item__group">
    <div class="fb_checkpoint need__item__small">
      <input size="30" v-model="jushog2" placeholder="現住所(町域・番地)" type="text"/>
        <div class="check__mark fb_ownAlertStrs"></div>
         </div>
      <div class="notice__example">記入例３－３－３</div>
       </div>
        </div>
  <div class="form__item item__input">
    <div class="form__item__title__wrap">
      <div class="form__item__title__sub">建物名</div>
        </div>
    <div class="form__item__group">
      <div class="fb_checkpoint">
       <input size="30" v-model="jushog3" placeholder="現住所(建物名)" type="text"/>
        <div class="check__mark fb_ownAlertStrs"></div>
         </div>
    <div class="notice__example"></div>
      </div>
    </div>
  </div>
</div>
          
                
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">電話番号</div>
     </div>
  <div class="need__item">必須</div>
   <div class="form__item__multi">
    <div class="form__item item__input">
      <div class="notice__example notice__type__tel">▼ 自宅電話番号・携帯電話番号のいずれかを必ずご記入ください</div>
        <div class="form__tel__wrap">
  <div class="form__item__title__wrap">
    <div class="form__item__title__sub">自宅電話番号</div>
      </div>
        <div class="form__item__group">
    <div class="jsJushoJapanG type__tel fb_checkpoint need__item__small">
      <span name="telg">
        <input v-model="telg_h" type="text" size="5" style="ime-mode:disabled;"/> - 
        <input v-model="telg_m" type="text" size="4" style="ime-mode:disabled;"/> - 
        <input v-model="telg_l" type="text" size="4" style="ime-mode:disabled;"/>
    </span>
   <div class="check__mark fb_ownAlertStrs"></div>
    </div>
     <div class="notice__example">（半角）&nbsp;例：03-1234-XXXX</div>
      </div>
       </div>
    <div class="form__tel__wrap">
      <div class="form__item__title__wrap">
        <div class="form__item__title__sub">携帯電話番号</div>
         </div>
    <div class="form__item__group">
      <div class="jsJushoJapanG type__tel fb_checkpoint need__item__small">
        <span name="keitai">
          <input v-model="keitai_h" type="text" size="5" style="ime-mode:disabled;"/> - 
          <input v-model="keitai_m" type="text" size="4" style="ime-mode:disabled;"/> -
          <input v-model="keitai_l" type="text" size="4" style="ime-mode:disabled;"/>
         </span>
      <div class="check__mark fb_ownAlertStrs"></div>
       </div>
        <div class="notice__example">（半角）&nbsp;例：090-1234-XXXX</div>
         </div>
       </div>
     </div>
   </div>
 </div>     
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">メールアドレス</div>
      </div>
  <div class="need__item">必須</div>
  <div class="form__item__group type__e-mail fb_checkpoint">
    <div class="mail__double">
      <input v-model="email" size="25" placeholder="メールアドレス" type="text" style="ime-mode:disabled;"/>
    </div>
    <div class="mail__double">
      <input v-model="email2" size="25" placeholder="確認用" type="text" style="ime-mode:disabled;"/>
      <div class="check__mark fb_ownAlertStrs"></div>
    </div>
  <div class="notice__example">入力ミス防止のため同じメールアドレスを２度ご記入ください。</div>
    <div class="notice__example">携帯電話のメールアドレスはご遠慮ください。</div>
          </div>
            </div>
              </div>

  <h2 class="simple__grp__title">
    学校情報
  </h2>
<div class="form__wrap">
  <div class="form__item">
    <div class="form__item__title__wrap">
      <div class="form__item__title">学校区分</div>
          </div>
    <div class="need__item">必須</div>
    <div class="form__item__group type__section fb_checkpoint">
      <div class="search_params_active">
        <label><input value="大学院" v-model="school" type="radio"/>大学院</label>
        <label><input value="大学" v-model="school" type="radio"/>大学</label>
        <label><input value="高等専門学校" v-model="school" type="radio"/>高等専門学校</label>
      </div>
      <div class="check__mark fb_ownAlertStrs"></div>
    </div>
  </div>

  <div class="form__item">
    <div class="form__item__title__wrap">
      <div class="form__item__title">設置区分</div>
          </div>
    <div class="need__item">必須</div>
    <div class="form__item__group type__set fb_checkpoint">
      <div class="jsAxolSchool_search_params_active search_params_active">
        <label><input value="国立" v-model="kokushi" type="radio"/>国立</label>
        <label><input value="公立" v-model="kokushi" type="radio"/>公立</label>
        <label><input value="私立" v-model="kokushi" type="radio"/>私立</label>
        <label><input value="日本国外" v-model="kokushi" type="radio"/>日本国外</label>
      </div>
      <div class="check__mark fb_ownAlertStrs"></div>
    </div>
  </div>

  <div class="form__item jsAxolSchool_freeze_scroll_top">
    <div class="form__item__title__wrap">
      <div class="form__item__title">学校名</div>
          </div>
          <div class="need__item">必須</div>
    <div class="form__item__group type__school__head fb_checkpoint">
      <div class="jsAxolSchool_dbk_text_wrap fb_checkpoint">
        <input size="40" v-model="gname" placeholder="学校名" type="text"/>
      </div>
      <div class="check__mark fb_ownAlertStrs"></div>
    </div>
  </div>

  <div class="form__item jsAxolSchool_bk_wrap">
    <div class="form__item__title__wrap">
     <div class="form__item__title">学部</div>
      </div>
    <div class="need__item">必須</div>
    <div class="form__item__group">
      <div class="jsAxolSchool_dbk_select_wrap fb_checkpoint">
        <span class="select_wrap"></span>
        <div class="check__mark fb_ownAlertStrs"></div>
      </div>
      <div class="jsAxolSchool_dbk_text_wrap fb_checkpoint">
        <input size="40" v-model="bname" placeholder="学部" type="text" />
        <div class="check__mark fb_ownAlertStrs"></div>
      </div>
    </div>
  </div>

  <div class="form__item jsAxolSchool_bk_wrap">
    <div class="form__item__title__wrap">
      <div class="form__item__title">学科</div>
          </div>
    <div class="need__item">必須</div>
    <div class="form__item__group">
      <div class="jsAxolSchool_dbk_select_wrap fb_checkpoint">
        <span class="select_wrap"></span>
        <div class="check__mark fb_ownAlertStrs"></div>
      </div>
      <div class="jsAxolSchool_dbk_text_wrap fb_checkpoint">
        <input size="40" v-model="kname" placeholder="学科" type="text"/>
        <div class="check__mark fb_ownAlertStrs"></div>
      </div>
    </div>
  </div>
     
<div class="form__item">
  <div class="form__item__title__wrap">
    <div class="form__item__title">卒業年月</div>
      </div>
  <div class="need__item">必須</div>
  <div class="form__item__group type__graduate fb_checkpoint">
    <span name="school_to"><span class="select_wrap">
        <select v-model="school_to_Y" name="" class="BY_dateElement_Y">
        <option value="">--</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </span>年
   <span class="select_wrap">
        <select v-model="school_to_M" name="" class="BY_dateElement_m">
        <option value="">--</option>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        </select>
    </span>月
   </span>
    <div class="check__mark fb_ownAlertStrs"></div>
  </div>
 </div>
</div>

<div class="form__bottom__textbox">内容を確認し、よろしければ次の画面に進んでください。</div>
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
    width: 140px;
    font-size: 0.8rem;
}
.form__item__title__wrap div {
    display: table;
    width: 100%;
    margin-bottom: 1px;
    line-height: 1.2;
    font-weight: bold;
    text-align: right;
    word-wrap: break-word;
}
.need__item {
    background:#df1212;
    color: #fff;
    border-radius: 3px;
    margin-left: 15px;
    font-size: 10px;
    text-align: center;
}
.need__item, .noneed__item {
    width: 28px;
    height: 18px;
    line-height: 18px;
}
.name__left {
    margin-right: 10px;
}
.name__left, .name__right {
    display: inline-block;
    width: calc(50% - 8px);
}
.input__label {
    margin-bottom: 2px;
    font-size: 0.8rem;
    line-height: 1.1;
}
.name__left input, .name__right input {
    width: 100%;
}
input[type="text"], input[type="password"], textarea, select {
    font-size: 0.9rem;
}
 input[type="text"], input[type="password"] {
    width: 100%;
    padding: 8px 12px;
}
input[type="text"], input[type="password"], textarea, select {
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 6px -4px rgba(0, 0, 0, 0.2) inset, 0 2px 4px -4px rgba(0, 0, 0, 0.2) inset;
    border: 1px solid #ccc;
    border-radius: 3px;
}
input[type="text"]:focus, input[type="password"]:focus, select:focus, textarea:focus {
    outline: none;
    border: 1px solid rgba(90, 180, 255, 0.5);
    box-shadow: 0 0 3px rgba(90, 180, 255, 0.5);
}
input[type="text"], input[type="password"], select, textarea, .radio__item-name, .form__item__title {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
input, textarea, select {
    padding: 3px;
    font-size: 1.2rem;
}
input:not([type="range"]):not([type="color"]):not([type="button"]):not([type="reset"]):not([type="submit"]):not([type="file"]) {
    writing-mode: horizontal-tb !important;
}
input[type="text" i] {
    padding: 8px 2px;
}
.form__item__multi, .form__item__group {
    width: calc(100% - 245px);
    margin-left: 15px;
    font-size: 0.8rem;
}
.form__item label {
    display: inline-flex;
    align-items: center;
    margin: 5px 10px 0 0;
    cursor: pointer;
    transition: 0.1s;
}
input[type=radio] {
    display: inline-block;
    margin: 0 5px 0 0;
    vertical-align: text-top;
}
.select_wrap{
    position: relative;
}
.form__item .select_wrap .fb_dateElement_Y {
    width: 85px;
    margin-left: 10px;
}
select {
    background: #fff url(@/assets/down_arrow_b.svg) right 10px center/10px no-repeat;
    width: 100%;
    padding: 8px 30px 8px 8px;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
}
input[type=text], input[type=password], textarea, select {
    font-size: 0.8rem;
}
.select_wrap + .select_wrap {
    border-radius: 0;
}
.form__item {
    display: block;
    box-sizing: border-box;
    border-top: 1px dashed #ddd;
    margin: 0;
    padding: 15px 0;
}
.form__item .select_wrap .fb_dateElement_m, .form__item .select_wrap .fb_dateElement_d {
    width: 65px;
    margin-left: 10px;
}
.notice__example {
    margin-top: 5px;
    font-size: 0.8rem;
    color: #999;
}
.form__item__multi .form__item:first-of-type {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
}
.form__item__multi .form__item {
    margin: 15px 0 0;
    padding: 15px 0 0;
}
.form__item__multi .form__item__title__wrap {
    width: 100px;
}
.form__item__multi .form__item__group {
    width: calc(100% - 120px);
}

.need__item__small, .noneed__item__small {
    position: relative;
}
.form__item__multi .form__item__title__wrap {
    width: 100px;
}
.form__item__multi .form__item__title__wrap div {
    text-align: left;
}
.type__postal {
    margin: 5px 0;
}
.need__item__small, .noneed__item__small {
    position: relative;
    width: 100%;
}
.need__item__small::before {
    color:#df1212;
}
.need__item__small::before, .noneed__item__small::before {
    position: absolute;
    content: "*";
    font-size: 15px;
    top: 8px;
    left: -10px;
}
.type__postal span[name=yubing], .type__postal span[name=yubink] {
    margin-right: 10px;
}
.type__postal input[name$=_h] {
    width: 75px;
    margin-right: 2px;
    text-align: center;
}
.type__postal input[name$=_l] {
    margin-left: 2px;
    width: 80px;
    text-align: center;
}
.type__postal input[type=button] {
    background: #eee;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 3px;
    min-width: 120px;
    height: 35px;
    margin: 0;
    padding: 9px 12px;
    vertical-align: top;
    font-size: 12px;
    color: #303030;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
}
.check__country {
    margin-top: 2px;
    vertical-align: 1px;
}
.check__country input {
    margin: 0 8px 0 0;
    vertical-align: 1px;
}
.type__prefectures select {
    display: inline-block;
    width: auto;
}
.type__tel input {
    width: 95px;
    text-align: center;
}
.form__tel__wrap {
    margin: 5px 0;
}
.address__same .form__item__group {
    width: 100%;
    margin: 8px 0 5px;
}
.type__e-mail, .type__k-mail {
    margin: 5px 0 5px 5px;
}
.mail__double:nth-child(1) input {
    border-radius: 3px 3px 0 0;
    border-bottom: 1px dashed #ccc;
    height: 35px;
    margin: 0;
}
.mail__double:nth-child(2) input {
    box-shadow: none;
    border-top: none;
    border-radius: 0 0 3px 3px;
    height: 34px;
    margin: 0 0 5px 0;
}
.noneed__item {
    background: transparent;
    color: transparent;
    margin-left: 15px;
}
.simple__grp__title {
    position: relative;
    background: #eee;
    box-sizing: border-box;
    margin: 25px 0 10px;
    padding: 8px 12px;
    font-weight: bold;
}
.type__school__head .search_params_active {
    display: inline-block;
    width: 65px;
    margin-right: 12px;
    text-align: center;
}
.type__school__head input {
    width: 100%;
}
.type__school__head .school__search, .type__school__head .school__detail__change {
    background: #555;
    color: #fff;
    border-radius: 3px;
    width: auto;
    padding: 10px 12px;
    font-size: 0.8rem;
}
.type__school__head .school__detail__change {
    margin-left: 0;
}
#entry_input div.form__bottom__textbox {
    text-align: center;
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
.go__pagetop a, .type__postal input[type=button], .type__school__head .school__search, .type__school__head .school__detail__change, .axol_pager .axol_pager_page_now, .axol_pager .axol_pager_page_txt, .axol_pager .axol_pager_pre_txt, .axol_pager .axol_pager_post_txt, .mynavi__banner a, .mynavi__link__btn a, .btn__s, .btn__l {
    position: relative;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
}
.btn__s.btn__confirm:hover, .btn__l.btn__confirm:hover {
    background-color: #1967af;
}
.form__item .select_wrap .BY_dateElement_Y{
    width: 65px;
}
.form__item .select_wrap .BY_dateElement_m{
    width: 65px;
    margin-left: 10px;
}

</style>
    