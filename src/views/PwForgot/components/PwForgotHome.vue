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
                                    <span class="Email">
                                        使用可能なメールアドレスを入力して、「メール送信」ボタンを押してください。<br>
                                        入力したメールアドレス宛に新規会員用登録フォームへのURLリンクを記載したメールが届きます。
                                    </span>
                                    <table class='noborder'>
                                        <tr>
                                            <th class='w100'>ログインID</th>
                                            <td><input type='text' id='uid' name='uid' size=40 placeholder='メールアドレス' />
                                            </td>
                                        </tr>
                                    </table>

                                    <div class="form_button">
                                        <router-link to="/Login">
                                            <input id="submit" class="btn__l btn__submit" name="submit" value="メール送信"
                                                type="submit">
                                        </router-link>
                                    </div>
                                    <!-- form_button end -->
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

.form_button.input {
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 6px -4px rgba(0, 0, 0, 0.2) inset, 0 2px 4px -4px rgba(0, 0, 0, 0.2) inset;
    border: 1px solid #ccc;
    border-radius: 3px;
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

table.noborder {
    min-width: 100px;
    padding: 12px 188px;
    font-size: 14px;

}

table.noborder th,
table.noborder td {
    line-height: 28px;
    font-size: 12px;
    text-align: left;
    padding: 0 20px 0 10px;
}

.noborder td input {
    width: 100%;
    height: 25px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 6px -4px rgba(0, 0, 0, 0.2) inset, 0 2px 4px -4px rgba(0, 0, 0, 0.2) inset;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.w100 {
    width: 100px !important;
    min-width: 100px !important;
}

table.noborder {
    border: none;
    margin: 20px 0;
    border-spacing: 10px;
}

.PwForget {
    white-space: nowrap;
    font-size: 90%;
    color: #333;
}
</style>