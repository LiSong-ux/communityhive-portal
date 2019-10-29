<template>
    <div id="app" class="app">
        <div class="header">
            <div class="logo" :style="{ width: logoWidth + 'px' }">
                <router-link to="/">
                    <h2>啊哈哈哈哈啊</h2>
                </router-link>
            </div>
            <div class="nav">
                <Menu class="menu" mode="horizontal" :theme="theme" :active-name="selected">
                    <router-link to="/">
                        <MenuItem name="1">
                            <Icon type="md-home" size="18"/>
                            <span>首页</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/toSubmitTopic">
                        <MenuItem name="2">
                            <Icon type="ios-create" ize="18"/>
                            <span>发表帖子</span>
                        </MenuItem>
                    </router-link>
                    <!-- <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats"/>
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="ios-construct"/>
                        综合设置
                    </MenuItem>-->
                </Menu>
                <div class="login_register">
                    <div class="login">
                        <Button type="success" ghost @click="toLogin">登录</Button>
                    </div>
                    <div class="register">
                        <Button type="warning" ghost @click="toRegister">注册</Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="main" :style="{ minHeight: minHeight + 'px' }">
            <img class="top_img" src="./assets/images/topImg.jpg"/>
            <router-view/>
        </div>
        <div class="footer">
            <div class="about">
                <router-link to="/">网站介绍</router-link> |
                <router-link to="/">联系方式</router-link> |
                <router-link to="/">帮助与反馈</router-link> |
                <router-link to="/">侵权与投诉</router-link>
            </div>
            <div class="website">Copyright © 2019 啊哈哈哈哈哈啊</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                logoWidth: null,
                theme: 'dark',
                minHeight: null,
                selected: 1,
            }
        },
        mounted() {
            this.minHeight = document.documentElement.clientHeight - 170;
            let clientWidth = window.innerWidth - 17;
            this.logoWidth = (clientWidth - 1200)/2;
        },
        created: function () {
        },
        methods: {
            toLogin () {
                this.$router.push('/toLogin');
            },
            toRegister () {
                this.$router.push('/toRegister');
            },
        }
    }
</script>

<style lang="scss">
    .app {
        background-color: #f1f2f3;
    }
    .header {
        width: 100%;
        height: 50px;
        background-color: #515a6e;
    }
    .logo {
        float: left;
        color: #fff;
        text-align: center;
        margin-top: 9px;
    }
    .nav {
        float: left;
        width: 1200px;
    }
    .menu {
        float: left;
        width: 1070px;
        span {
            font-size: 1.2em;
        }
    }
    .nav .ivu-menu-horizontal {
        height: 50px !important;
        line-height: 50px !important;
    }

    .login_register {
        float: left;
        width: 130px;
        height: 50px;
    }
    .login {
        float: left;
        margin-top: 9px;
    }
    .register {
        float: right;
        margin-top: 9px;
    }


    .main {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0px;
    }
    .top_img {
        margin-bottom: 10px;
    }


    .footer {
        width: 100%;
        height: 120px;
        color: #fff;
        padding-top: 30px;
        text-align: center;
        background-color: #515a6e;
    }
    .about a {
        color: #fff;
    }
    .website {
        margin-top: 15px;
    }
</style>
