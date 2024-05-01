<script setup>

</script>
<template>
    <div id="footer">
        <div id="footer_utility">
            <ul>
                <router-link to="/">
                    <li><a href="" title="企業ホームページへ" target="_blank">企業ホームページへ</a></li>
                </router-link>
                <router-link to="/Question">
                    <li><a href="" title="お問い合わせ" accesskey="m">お問い合わせ</a></li>
                </router-link>
            </ul>
            <p id="copy_right">Copyright©2013-2023 U'sFactory All Rights Reserved.</p>
        </div>
    </div>
</template>

<style scoped>
#footer {
    width: 100%;
    padding-top: 0;
    margin-bottom: 20px;
}

#footer_utility {
    width: 960px;
    background: none;
    margin: 0 auto 20px auto;
    padding: 20px 0 0 0;
    border-top: 1px solid #CCC;
}

#footer_utility ul li {
    float: left;
    margin-right: 30px;
}

#copy_right {
    float: right;
    font-size: 70%;
}

#footer_utility ul li a {
    width: auto;
    font-size: 70%;
}

#footer_utility ul li a {
    color: #333;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#footer_utility ul li a:hover {
    color: #0259B1;
}
</style>
