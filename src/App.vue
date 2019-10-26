<template>
    <div id="app" class="app">
        <div class="nav">
            <di class="logo">
                <h2>啊哈哈哈哈哈啊</h2>
            </di>
            <div class="func_zone">
                <Menu class="menu" mode="horizontal" :theme="theme" active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper"/>
                        内容管理
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people"/>
                        用户管理
                    </MenuItem>
                    <Submenu name="3">
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
                    </MenuItem>
                </Menu>
                <div class="login_register">
                    <div class="login">
                        <Button type="success" ghost>登录</Button>
                    </div>
                    <div class="register">
                        <Button type="warning" ghost>注册</Button>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                theme: 'dark'
            }
        }
    }
</script>

<style lang="scss">
    .app {
        text-align: center;
    }
    .nav {
        width: 100%;
        height: 60px;
        background-color: #515a6e;
    }
    .logo {
        float: left;
        color: #fff;
        margin-top: 13px;
        margin-left: 40px;
    }
    .func_zone {
        float: right;
        width: 85%;
    }
    .menu {
        float: left;
    }
    .login_register {
        float: right;
        margin-right: 5%;
        width: 10%;
        height: 60px;
    }
    .login {
        float: left;
        margin-top: 13px;
    }
    .register {
        float: right;
        margin-top: 13px;
    }
</style>
