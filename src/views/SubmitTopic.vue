<template>
    <div class="main">
        <div class="container">
            <h2>发表帖子</h2>
            <div class="topic_title">
                <Input size="large" placeholder="请输入标题" style="width: 60%;"/>
                <span>还可输入80个字符</span>
            </div>
            <div class="topic_content">
                <editor label="发表帖子"></editor>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/Editor'
    export default {
        name: "SubmitTopic",
        components: {Editor},
        comments: {
            Editor
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
    .topic_title {
        width: 100%;
        margin-top: 20px;
        Input {
            float: left;
        }
        span {
            float: right;
            font-size: 1.15em;
            margin-right: 26.5%;
            line-height: 38px;
        }
    }
    .topic_content {
        width: 100%;
        margin-top: 15px;
    }
</style>