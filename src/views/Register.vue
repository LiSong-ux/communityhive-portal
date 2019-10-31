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
                <FormItem label="邮箱">
                    <Input v-model="form.email" placeholder="请输入邮箱"/>
                </FormItem>
                <FormItem>
                    <RadioGroup v-model="form.gender">
                        <Radio label="0">女</Radio>
                        <Radio label="1">男</Radio>
                        <Radio label="2">未知</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="register">注册</Button>
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
                    email: '',
                    gender: '',
                }
            }
        },
        methods: {
            register() {
                let params = this.qs.stringify(this.form);
                this.axios.post("/register", params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.instance('error', resp.msg);
                    }
                    this.$store.commit('setUser', resp.data);
                    let content = '<p style="font-size: 16px">你现在已经是一个红领巾啦，快去发帖庆祝吧。。。</p>';
                    this.instance('success', content);
                })
            },
            instance(type, content) {
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: '操作成功！',
                            content: content,
                            onOk: () => {
                                this.$router.push('/');
                            },
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: '操作失败！',
                            content: content
                        });
                        break;
                }
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
