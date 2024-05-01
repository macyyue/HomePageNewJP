<script>
export default {
    data() {
        return {
            languages: ['日本語', 'English', '简体中文'],
            selectedLanguage: '',
            isDropdownOpen: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;

        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        selectLanguage(language) {
            this.selectedLanguage = language;
            this.isDropdownOpen = false;
        },
    }
}
</script>

<template>
            <div class="navi">
                <div class="logo">
                    <h1>
                        <img src="@/assets/UsLogo.svg" style="height: 35px; width: 35px;" alt="">
                        <router-link to="/"> U's Factory</router-link>
                    </h1>
                </div>

                <div class="ask-language">
                    <ul class="overlay-list">
                    <li class="overlay">
                        <router-link to="/Question">お問い合わせ</router-link>
                    </li>

                    <li class="overlay">
                        <a href="#" id="language" @click="toggleDropdown">LANGUAGE</a>
                        <a href="#" @click="toggleDropdown">
                            <span id="earth-icon"></span>
                        </a>
                        <div v-show="isDropdownOpen" @click="closeDropdown" class="dropdown-menu">
                            <ul class="language-list">
                                <li v-for="(language, index) in languages" :key="index"
                                    @click="selectLanguage(language)">
                                    {{ language }}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="overlay">
                        <router-link to="/Login">ログイン</router-link>
                    </li>
                </ul>

                    <div class="header-wrapper">

                        <ul class="navList">
                            <li class="menuItem"><router-link to="/Company">会社概要</router-link></li>
                        </ul>
                        <ul class="navList">
                            <li class="menuItem"><router-link to="/Access">アクセス</router-link></li>
                        </ul>
                        <ul class="navList">
                            <li class="menuItem"><a href="#">商品紹介</a>
                                <ul class="dropList">
                                    <router-link to="/Info360" class="override-link-style">INFO360</router-link>
                                    <router-link to="/BiForArchiCad" class="override-link-style">BI for
                                        ArchiCAD</router-link>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navList">
                            <li class="menuItem"><router-link to="/ResultsMedia">実績掲載</router-link></li>
                        </ul>
                        <ul class="navList">
                            <li class="menuItem"><router-link to="/News">ニュース</router-link></li>
                        </ul>
                        <ul class="navList">
                            <li class="menuItem"><router-link to="/Recruit">採用情報</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
</template>
<style scoped>
.navi {
    top: 0;
    min-width: 1390px;
    width: 100%;
    height: 20%;
    background-color: #454545;
    transition: all 450ms cubic-bezier(.23, 1, .32, 1) 0s;

}

/* @media (max-width: 700px) {
    .navi {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;

    }

    .ask-language,
    .header-wrapper {
        display: none;
    }

    .logo {
        display: block;
        margin-top: 0;
        margin-left: 0;
    }

    .logo a {
        font-size: 20px;
        line-height: 80px;
    }
} */

.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
}

.clearfix::after {
    clear: both;
}

.header-wrapper {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menuItem {
    width: 100px;
    line-height: 40px;
    margin-right: 20px;
    text-align: center;
    position: relative;
    list-style: none;
}

.navList a {
    color: #fff;
    display: block;
    text-decoration: none;
}

.navList a:hover {
    background: #666;
    border-radius: 3px;
}

.dropList {
    position: absolute;
    background: #454545;
    box-shadow: 0 1px 2px #666;
    display: none;
    border-radius: 3px;
    overflow: hidden;
    z-index: 1000;
    white-space: nowrap;
    text-align: left;
    width: 10rem;
    height: 7rem;
}

.menuItem:hover .dropList {
    display: block;
}

.override-link-style {
    margin: 15px 3px;
}


.overlay-list {
    float: right;
    margin: -70px 10px;
    list-style: none; 
}
.overlay {
    float: left;
    margin-left: 20px; 
}

.overlay a {
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
}



#earth-icon {
    float: right;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    background-image: url(@/assets/earth.svg);
    vertical-align: middle;
}

.dropdown-menu {
    top: 100%;
    left: -7px;
    min-width: 5rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
}

.language-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: small;
}

.language-list li {
    padding: 3px;
    cursor: pointer;
}

.language-list li img {
    position: absolute;
    transform: translateY(5px);
    right: 4px;
    width: 10px;
    height: 10px;
}

h1 {
    float: left;
    font-size: 20px;
}

.logo {
    display: inline-block;
    white-space: nowrap;
    margin-top: 10px;
    margin-left: 25px;
    line-height: 80px;
    background: none;
}

h1 a {
    position: relative;
    top: -4px;
    color: #fff;
    text-decoration: none;
    font-size: xx-large;
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    z-index: 6;
}

nav .menu-item {
    position: static;
    padding: 0px 20px;
    line-height: 60px;
    border: 3px solid transparent;
    text-align: center;
    transition: 0.4s;
    border-radius: 10px;
    height: 80px;
}

nav .menu-item a.active,
nav .menu-item a:hover {
    width: 80px;
    background-color: rgba(216, 206, 206, 0.1);
}

nav .menu-item a {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: .2rem;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
}
</style>