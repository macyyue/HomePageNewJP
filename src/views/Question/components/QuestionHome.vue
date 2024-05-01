<template>

  <article class="mainContents inquiryWrap">
  <h1 class="module-title1">お問い合わせ</h1>
  <div class="module-leadtext">
    <p>お問い合わせフォームからのご質問には、回答を差し上げるまでお時間をいただく場合や回答しかねる場合がありますことを予めご了承ください。</p>
  </div>
  <div class="formArea">
  <form method="post" name="sfm-form" id="sfm-form" action="">
  <dl class="formList">
  <dt>◯会社名</dt><dd><input type="text" name="cname" id="cname" /></dd>
  <dt>◯部署名</dt><dd><input type="text" name="ckana" id="ckana" /></dd>
  <dt>◯担当者名</dt><dd class="namebox"><input type="text" name="name_s" id="name" /></dd>
  <dt>◯電話番号</dt>
  <dd class="telbox">
    <input type="text" name="tel01_s" id="tel01" />-
    <input type="text" name="tel02_s" id="tel02" />-
    <input type="text" name="tel03_s" id="tel03" />
</dd>
  <dt>◯メールアドレス</dt><dd><input type="text" name="email_s" id="email" /></dd>
  <dt>◯お問い合わせ件名</dt>
  <dd>
  <select name="subject_s" class="text-box" id="subject">
  <option value="※お選びください">※お選びください</option>
  <option value="INFO360">INFO360</option>
  <option value="BI for Archi CAD">BI for Archi CAD</option>
  <option value="求人について">求人について</option>
  <option value="その他">その他</option>
  </select>
  </dd>
  <dt>◯お問い合わせ内容</dt>
  <dd><textarea name="message_s" cols="30" rows="5" id="message"></textarea></dd>
  <p id="confirm-button" class="submit-container"></p>
  <span>
  <input type="hidden" name="mailToNum" id="mailToNum" value="3" />
  <input name="autoReply" type="hidden" value="1" />
  <input type="hidden" name="mode" id="mode" value="CONFIRM" />
  <input type="submit" style=" " value="お問い合わせ内容を確認" />
  </span>
  </dl>
  </form>
  </div>
  </article>
  </template>
  <style>
  .mainContents{
    min-width: 1390px;
  }
  .inquiryWrap{
    width :760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .inquiryWrap dl.formList {
      padding: 0 0 30px;
  }
  .inquiryWrap dl.formList dt:first-child {
      padding: 30px 0 5px;
  }
  .inquiryWrap dl.formList dd {
      width: 90%;
  }
  .inquiryWrap dl.formList dd input {
      border: 1px solid #ccc;
      padding: 5px;
      color: #999;
      background: #fff;
      border-radius: 5px;
      font-size: 125%; 
      width: 500px; 

  }
  .inquiryWrap dl.formList dd.telbox input[type="text"] {
    width: 100px; 
    margin-right: 5px; 
}

  .inquiryWrap dl.formList dt {
      padding: 30px 0 5px;
  }
  .inquiryWrap dl.formList dd.telbox {
      width: auto;
  }
  #subject {
      border: 1px solid #ccc;
      padding: 5px;
      color: #999;
      background: #fff;
      border-radius: 5px;
      font-size: 100%;
      width: 200px; 
  }
  #message {
      border: 1px solid #ccc;
      padding: 5px;
      color: #999;
      background: #fff;
      border-radius: 5px;
      font-size: 125%;
  }
  
  .inquiryWrap input[type="submit"] {
      border: 1px solid #777;
      padding: 4px 10px;
      color: #fff;
      cursor: pointer;
      background: #4e4c4c;
      border-radius: 5px;
      font-size: 125%;
      background: -moz-linear-gradient( top, #9ea2a4, #9fa9b1 );
      margin-bottom: 60px;
  }
  .inquiryWrap input:hover{
      background: #999; 
  }
  </style>