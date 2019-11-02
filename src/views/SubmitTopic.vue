<template>
    <div class="main">
        <div class="container">
            <h2>发表帖子</h2>
            <div class="topic_top">
                <div class="topic_label">
                    <Input v-model="topic.label" size="large" placeholder="四字标签" style="width: 86px;"/>
                </div>
                <div class="topic_title">
                    <Input v-model="topic.title" size="large" placeholder="请输入标题" style="width: 60%;"/>
                    <span>还可输入80个字符</span>
                </div>
            </div>
            <div class="topic_content">
                <editor ref="editor"></editor>
                <Button class="submit_button" type="primary" size="large" @click="submitTopic">发表帖子</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/Editor'
    export default {
        name: "SubmitTopic",
        components: {Editor},
        data() {
            return {
                topic: {
                    label: '',
                    title: '',
                    content: ''
                }
            }
        },
        // computed: {
        //     content: function () {
        //         return this.$store.getters.getContent;
        //     }
        // },
        methods: {
            submitTopic() {
                this.$refs.editor.getContent();
                this.topic.content = this.$store.getters.getContent;
                let params = this.qs.stringify(this.topic);
                this.axios.post('/submitTopic', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.instance('error', resp.msg);
                    }
                    this.$router.push({path:'/toTopic', query:{id:resp.data}});
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
        border-radius: 10px;
        background-color: #fff;
    }
    .container {
        width: 95%;
        padding: 10px 30px;
        margin: 20px auto;
    }
    .topic_top {
        width: 100%;
        margin-top: 20px;
    }
    .topic_label {
        width: 20%;
        display: inline;
    }
    .topic_title {
        width: 80%;
        margin-left: 15px;
        display: inline;
        Input {
            display: inline;
        }
        span {
            display: inline;
            font-size: 1.15em;
            margin-left: 15px;
            line-height: 38px;
        }
    }
    .topic_content {
        width: 100%;
        margin-top: 15px;
    }
    .submit_button {
        width: 120px;
    }
</style>
