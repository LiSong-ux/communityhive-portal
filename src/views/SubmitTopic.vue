<template>
    <div class="main">
        <div class="container">
            <div class="topic_title">
                <Input size="large" placeholder="large size" />
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubmitTopic"
    }
</script>

<style scoped>
    .main {
        width: 100%;
        border-radius: 10px;
        background-color: #fff;
    }
    .container {
        width: 95%;
        height: 600px;
        padding: 20px 30px;
        margin: 50px auto;
        background-color: skyblue;
    }
    .topic_title {
        width: 60%;

    }
</style>