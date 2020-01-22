<template>
    <div class="page_main">
        <div class="page_content">
            <div class="notice">
                <div class="notice_top">
                    <div class="notice_label">【<span>{{ notice.label }}</span>】</div>
                    <div class="notice_title">{{ notice.title }}</div>
                </div>
                <div class="notice_head">
                    <div class="notice_author">{{ notice.username }}</div>
                    <div class="notice_time">发表于 {{ notice.submitTime | dateFormat }}</div>
                </div>
                <div class="notice_content" v-html="notice.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        data() {
            return {
                notice: {},
            }
        },
        created: function () {
            this.init();
        },
        methods: {
            init() {
                this.getNotice();
            },
            getNotice() {
                let initParams = {
                    'id': this.$route.query.id,
                    'terminal': navigator.userAgent
                };
                let params = this.qs.stringify(initParams);
                this.axios.post('/notice', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        this.$router.push('/');
                        return;
                    }
                    this.notice = resp.data;
                });
            },
        }
    }
</script>

<style scoped>

    .page_main {
        width: 100%;
        border-radius: 10px;
    }

    .page_content {
        width: 100%;
        padding: 30px 0px;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
    }


    .notice {
        width: 96%;
        padding: 20px;
        margin: 0px auto;
        border-radius: 10px;
        border: 2px solid #819799;
    }

    .notice_top {
        width: 100%;
        border-bottom: 3px solid #1c5899;
    }

    .notice_label {
        display: inline;
    }

    .notice_label span {
        /*color: #ff78f2;*/
        color: red;
    }

    .notice_title {
        display: inline;
        padding: 10px 5px;
        font-size: 1.5em;
        font-weight: bold;
    }

    .notice_head {
        width: 100%;
        font-size: 1.2em;
        margin-top: 25px;
        border-bottom: 1px solid #999;
    }

    .notice_author {
        color: #27313e;
        display: inline;
        padding: 0px 15px;
        border-right: 2px solid darkgrey;
    }

    .notice_time {
        color: cadetblue;
        display: inline;
        padding: 0px 15px;
    }

    .notice_content {
        width: 100%;
        padding: 0px 15px;
        margin-top: 25px;
        font-size: 1.3em;
        color: black;
    }
</style>
