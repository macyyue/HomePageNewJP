<script setup>

</script>
<template>
  <div id="mainWrap">	
  
   <h1 class="module-title1">アクセス</h1>
  
  
  <table class="module-table1">
  <tbody>
    <tr>
      <th>お知らせ</th>
      <td>2017年2月13日より会社住所及び電話番号が変更になりました</td>
    </tr>
    <tr>
      <th>所 在 地</th>
      <td>〒240-0005 神奈川県横浜市保土ケ谷区神戸町１３４<br>
          横浜ビジネスパーク イーストタワー5階
      </td>
    </tr>
  <tr>
    <th>代 表 電 話</th>
    <td>TEL.045-348-1560 FAX.045-348-1561</td>
  </tr>
  <tr>
      <th>電車でお越しの場合</th>
        <td>JR保土ヶ谷駅より無料シャトルバス5分<br>
          <a class="MapTitle" href="https://www.officenomura.jp/ybp/access/">詳細地図はこちら</a><br>
            相鉄線 天王町駅より徒歩5分
            
        </td> 
    </tr>
  </tbody>
  </table>
  <p><iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6500.064898165357!2d139.59960237301632!3d35.453991083933886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185bed56cd5b4f%3A0x9156ee24708c3163!2z5pel5pysLCDjgJIyNDAtMDAwNSDnpZ7lpYjlt53nnIzmqKrmtZzluILkv53lnJ_jgrHosLfljLrnpZ7miLjnlLog6YeO5p2R44K_44Ov44O844K644Kk44O844K544OI44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1487721877433" width="800" height="600" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
  
  
  </div>
  </template>
  
  <style>
  
   #mainWrap{
    min-width: 1390px;
     width :760px;
      margin: 0 auto;
      display: flex;
     flex-direction: column;
     align-items: center;
     /* background-color:pink; */
   }
   .module-title1{
    margin: 36px 0;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    box-sizing: border-box;
    /* font-family: "游明朝",YuMincho,"ヒラギノ明朝 ProN W3","Hiragino Mincho ProN","HG明朝E","MS P明朝","MS 明朝",serif; */
   }
   .module-table1 {
      width: 100%;
      border-top: 1px solid #e9e9e9;
      line-height: 1.8;
      border-spacing: 0;
      
   }
   .module-table1 th {
      width: 20%;
      min-width: 20%;
      padding: 15px 0;
      text-align: left;
      border-bottom: 1px solid #e9e9e9;
      vertical-align: top;
   }
   .module-table1 td {
      width: 80%;
      padding: 15px 0;
      border-bottom: 1px solid #e9e9e9;
  }
  .module-table1 td a{
  color: #000;
  }
  .module-table1 tbody .MapTitle{
    color: blue;
  }
  
  .module-table1 tbody .MapTitle:hover{
     text-decoration: none;
  }
  </style>