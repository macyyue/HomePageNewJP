﻿<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)

//定义数据模型
const registerData = ref({
    username:'',
    password:'',
    rePassword:''
})
//校验密码的函数
const checkRePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('パスワードを確認してください。'))
  } else if (value !== registerData.value.password) {
    callback(new Error('パスワードを確認してください。'))
  } else {
    callback()
  }
}
//定义表单校验规则
const rules ={
    username:[
        { required: true, message: 'ユーザIDを入力してください', trigger: 'blur' },
        { min: 5, max: 16, message: '6文字以上半角英数字', trigger: 'blur' },
    ],
    password:[
        { required: true, message: 'パスワードを入力してください', trigger: 'blur' },
        { min: 5, max: 16, message: '6文字以上半角英数字', trigger: 'blur' },
    ],
    rePassword:[
        { validator: checkRePassword, trigger: 'blur' }
    ]
}
//调用后台接口，完成注册
import {userRegisterService,userLoginService} from '@/api/user.js'
const register =async()=>{
    //registerData是一个响应式对象，如果要获取值，需要.value
    let result = await userRegisterService(registerData.value);

    // eslint-disable-next-line no-undef
    ElMessage.success(result.msg? result.msg:'新規登録完了')
}

//绑定数据，服用注册表单的数据模型
//表单数据校验
//登录函数
import { useTokenStore } from '@/stores/token.js';
import {useRouter} from 'vue-router'
const router = useRouter()
const tokenStore = useTokenStore();
const login =async ()=>{
    //调用接口，完成登录
    let result = await userLoginService(registerData.value);
    // eslint-disable-next-line no-undef
    ElMessage.success(result.msg? result.msg:'ログイン完了')
    
    //把得到的token存储到pinia中
    tokenStore.setToken(result.data)
    //借助于路由跳转到首页
    router.push('/')

}
//定义函数，清空数据模型的数据
const clearRegisterData = ()=>{
    registerData.value={
        username:'',
        password:'',
        rePassword:''
    }
}

</script>

<template>
    <div class="mainContent">
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="isRegister" :model="registerData" :rules="rules">
                <el-form-item>
                    <h1>新規登録</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="ユーザーネーム" v-model="registerData.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :prefix-icon="Lock" type="password" placeholder="パスワード" v-model="registerData.password"></el-input>
                </el-form-item>
                <el-form-item prop="rePassword">
                    <el-input :prefix-icon="Lock" type="password" placeholder="パスワード確認" v-model="registerData.rePassword"></el-input>
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="register">
                        新規登録
                    </el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = false;clearRegisterData()">
                        ← 戻る
                    </el-link>
                </el-form-item>
            </el-form>

            <!-- 登录表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-else :model="registerData" :rules="rules">
                <el-form-item>
                    <h1>ログイン</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="ユーザID" v-model="registerData.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password" :prefix-icon="Lock" type="password" placeholder="パスワード" v-model="registerData.password"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <div class="flex">
                        <el-checkbox>パスワードを保存</el-checkbox>
                        <router-link to="/PwForgot">
                        <el-link type="primary" :underline="false">パスワードを忘れた場合</el-link>
                    </router-link>
                    </div>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="login">ログイン</el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = true;clearRegisterData()">
                        初回登録 →
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</div>
</template>

<style lang="scss" scoped>
.mainContent{
    min-width: 1390px;
}
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url('@/assets/RecruitQuestionImg.svg') no-repeat 50% center / 280px auto,
            url('@/assets/img10.jpg') no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>