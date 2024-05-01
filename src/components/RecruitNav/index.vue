<script setup>

</script>


<template>
            <div class="header sp headerHomeBg">
                <div class="headerBox">
                    <div class="titleLogo">
                        <router-link to="/Recruit">
                            <img src="@/assets/logo-recruit.svg">
                        </router-link>
                    </div>
                    <div class="headerLogo">
                        <router-link to="/">
                            <img src="@/assets/Uslogo-copyright.svg" style="height:35px;width:35px;">
                        </router-link>
                    </div>
                </div>
                <div class="menuPanelBody">
                    <div class="menuArea">
                        <div class="menuBox">
                            <router-link to="/Message">
                                <p class="fNotoSansB">メッセージ</p>
                            </router-link>
                        </div>
                        <div class="menuBox">
                            <router-link to="/Careers">
                                <p class="fNotoSansB">募集情報</p>
                            </router-link>
                        </div>
                        <div class="menuBox">
                            <router-link to="/Usfactory">
                                <p class="fNotoSansB">会社情報</p>
                            </router-link>
                        </div>
                        <div class="menuBox">
                            <router-link to="/LoginForm">
                                <p class="fNotoSansB">エントリー</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
</template>
<style>
.headerHomeBg {
    background-color: rgba(255, 255, 255, 0.5);
}
.header {
    min-width: 1390px;
    width: 100%;
    height: 4.5rem;
    z-index: 9998;
    position: fixed;
    top: 0;
}

.headerLogo {
    margin-top: 10px;

}

.recruitWrap {
    width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headerBox {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 1rem;
    margin: auto;
}

.menuArea {
    display: flex;
    justify-content: flex-end;
    margin-top: -55px;
    margin-right: 120px;
}

.menuBox {
    margin: 10px;

}

.menuBox>a {
    display: block;
    text-decoration: none;
    color: #000;
}

.menuBox>a:hover {
    text-decoration-line: underline;

}
</style>
