<template>
    <div id="menu__contents__wrap">
        <div id="contents__wrap">
            <div id="menu__area">
                <div id="menu__wrap">
                </div>
                <div id="contents__area">
                    <div id="contents__area__wrap">
                        <div id="contents__top__img__wrap">
                            <div id="contents__top__img"></div>
                            <div id="contents__title__wrap">
                                <span id="login_info" class="login__info"></span>
                                <div id="main__contents" class="main__contents">
                                    <div class="agree__textbox">

                                        この度は当社にご関心をお寄せいただき、誠にありがとうございます。<br>
                                        ※以下の内容をよくお読みになり、その内容をご理解・<b>ご承諾いただき『同意する』ボタンをクリックして次にお進み下さい</b>。
                                    </div>
                                    <div class="agree__rule">
                                        以下の内容をよくお読みになり、その内容をご理解・ご承諾いただき『同意する』ボタンをクリックして次にお進み下さい。この度は当社にご関心をお寄せいただき、誠にありがとうございます。<br>
                                        <br>
                                        1. 個人情報の収集および利用の目的<br>
                                        当社は、採用活動及びU’s
                                        Factory株式会社の今後のイベントなどに利用する目的で、氏名・住所・電話番号・電子メールアドレス等、個人を特定し得る情報（以下「個人情報」と表記）を、指定のエントリーフォームにて取得させていただきます。<br>
                                        <br>
                                        ご登録いただいた個人情報は、採用活動及びU’s
                                        Factory株式会社の今後のイベントなどに関するご案内やご連絡等に必要となる基礎資料として利用いたします。<br>
                                        <br>
                                        なお、個人情報から個人の特定が不能なデータを抽出し、当該データから統計資料を作成するなど、統計、分析その他の目的で利用させていただくことがあります。<br>
                                        <br>
                                        2.個人情報の第三者への提供<br>
                                        当社は、以下のいずれかに該当する場合を除き、個人情報を第三者に開示または提供しません。<br>
                                        <br>
                                        (1)本人の同意が得られた場合（但し、3.で定める外部委託に際しては、本人の同意を得る必要はないものとします。）<br>
                                        <br>
                                        (2)法令に基づく場合<br>
                                        <br>
                                        (3)人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合<br>
                                        <br>
                                        (4)行政機関の通達・指導などに対して協力する必要がある場合であって、本人の同意を得ることにより行政機関の事務の遂行に支障を及ぼすおそれがある場合<br>
                                        <br>
                                        3. 個人情報を取り扱う業務の外部委託<br>
                                        当社は1.で定めた利用目的のため、個人情報の取扱業務の全部または一部を外部に委託することがあります。<br>
                                        この場合、個人情報保護水準が高いことを条件として委託先を選定し、その委託先について、機密保持契約の締結や十分な管理・監督を行い、委託先からの漏洩等の防止に努めます。<br>
                                        <br>
                                        4．個人情報の管理<br>
                                        当社は、個人情報を取り扱うにあたり管理責任者を置き、個人情報の適切な管理を行います。<br>
                                        また、個人情報の漏洩や、本人以外による個人情報の書き換え等を防止するため、厳重なセキュリティ対策を実施し、個人情報をアクセスコントロールやパスワードコントロールの施されている安全な環境下に保管します。<br>
                                        <br>
                                        5．個人情報の開示・訂正・削除<br>
                                        ご登録いただいた個人情報について、開示・訂正・削除等を請求される場合、7.に定めるお問い合わせ窓口までご連絡下さい。<br>
                                        その場合、本人以外への個人情報の漏洩や、本人以外による個人情報の書き換え等を防止するため、請求者が本人であることを確認の上、個人情報の開示・訂正・削除等を行うものとします。ただし、法令の要請に基づく場合は、この限りではありません。<br>
                                        <br>
                                        7．お問い合わせ窓口<br>
                                        TEL：045-348-1560<br>
                                        <br>
                                    </div>
                                    <form method="post" action="agreement" name="form1" autocomplete="off">
                                        <input name="fb_csrf"
                                            value="@B_@ET_aFWjfqyxf3jcCVA7nYN_Li)c47ufG)ibhi)z(hEP+4Hc4#eSQC"
                                            type="hidden">

                                        <div class="form_button">
                                            <router-link to="/Login">
                                                <input id="submit" class="btn__l btn__submit" name="submit" value="同意する"
                                                    type="submit">
                                            </router-link>
                                            <input id="submit" class="btn__l btn__submit" name="submit" value="同意しない"
                                                type="submit">
                                        </div><!-- form_button end -->
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
#page__all div #menu__contents__wrap {
    background: #fff;
}

#menu__contents__wrap {
    flex: 1 0 auto;
    position: relative;
    width: 100%;
    height: auto;
}

#page__all div#contents__wrap {
    background: transparent;
}

#contents__wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 980px;
    height: 100%;
    margin: 90px auto;
}

#page__all div#menu__area {
    background: transparent;
}

.nomenu #menu__area {
    display: none;
}

div#page__all #contents__area__wrap {
    padding: 30px 0;
}

#contents__title__wrap {
    margin: 0 0 25px;
}

#contents__title__wrap #contents__title {
    width: 100%;
}

#contents__title {
    position: relative;
    border-bottom: 1px solid #dddcd6;
    box-sizing: border-box;
    width: auto;
    margin: 0 auto;
    padding: 0 12px 10px 15px;
}

#contents__title p {
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #989582;
}

.login__info {
    color: #989582;
}

.login__info {
    display: none;
}

#main__contents {
    position: relative;
}

#main__contents {
    width: 940px;
    margin: 0 auto;
    /* line-height: 50px; */
    padding-left: 20px;
}

.agree__textbox {
    width: 100%;
    margin: 20px 0;

}

.agree__rule {
    box-shadow: 0 2px 6px -4px rgba(0, 0, 0, 0.2) inset, 0 2px 4px -4px rgba(0, 0, 0, 0.2) inset;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: calc(100% - 200px);
    height: 300px;
    margin: 15px auto 0;
    padding: 15px;
    overflow: auto;
    font-size: small;

}

.form__bottom__textbox {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding: 20px 0 10px;
    text-align: center;
}

.form_button {
    text-align: center;
    margin: 15px 0 30px;
}

.btn__l.btn__submit {
    background-color: #9198A0;
    color: #fff;
    border-bottom: 3px solid #C8CCD0;
    border-radius: 5px;
}

.btn__l {
    min-width: 100px;
    margin: 0 10px;
    padding: 12px 15px;
    font-size: 14px;
}

.btn__l.btn__submit:hover {
    background-color: #C8CCD0;
}
</style>