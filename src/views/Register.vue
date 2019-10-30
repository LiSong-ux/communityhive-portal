<template>
    <div class="main">
        <div class="container">
            <div class="container_head">注册</div>
            <Form class="container_form" :model="form" label-position="top">
                <FormItem label="账号">
                    <Input v-model="form.account" placeholder="请输入账号"/>
                </FormItem>
                <FormItem label="用户名">
                    <Input v-model="form.username" placeholder="请输入用户名"/>
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="form.password" placeholder="请输入密码"/>
                </FormItem>
                <FormItem>
                    <Button type="primary">注册</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    account: '',
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            register() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        width: 100%;
        padding: 10px;
        background-color: #dcdee2;
        /*border: 2px solid #999;*/
    }
    .container {
        width: 40%;
        padding: 30px 0px;
        margin: 22px auto;
        border-radius: 10px;
        background-color: #f8f8f9;
    }
    .container_head {
        font-size: 2.0em;
        font-weight: bold;
        text-align: center;
    }
    .container_form {
        width: 80%;
        margin: 30px auto;
        Button {
            width: 100%;
        }
    }
</style>
