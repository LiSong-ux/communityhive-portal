<template>
    <div class="home">
        <table class="table_notice">
            <tr class="tr_head border_bottom">
                <th class="th_title" align="left" colspan="2">
                    <div class="title_box">全部公告</div>
                </th>
                <th align="center">作者</th>
                <th align="center">查看</th>
                <th align="center">最后修改</th>
            </tr>
            <tr class="tr_topic" v-for="(notice, index) in noticeList" :key="index">
                <td :class="index==noticeList.length-1?'notice_label':'notice_label border_bottom'" align="center">
                    【<span>{{ notice.label }}</span>】
                </td>
                <td :class="index==noticeList.length-1?'title':'title border_bottom'">
                    <router-link :to="'/toNotice?id='+notice.id">{{ notice.title }}</router-link>
                </td>
                <td :class="index==noticeList.length-1?'author':'author border_bottom'">
                    <h3>{{ notice.username }}</h3>
                    <p>{{ notice.submitTime | dateFormat }}</p>
                </td>
                <td :class="index==noticeList.length-1?'reply_view':'reply_view border_bottom'">
                    <p>{{ notice.viewCount }}</p>
                </td>
                <td :class="index==noticeList.length-1?'latestReply':'latestReply border_bottom'">
                    <h3>{{ notice.lastEdit }}</h3>
                    <p>{{ notice.lastSubmitTime | dateFormat }}</p>
                </td>
            </tr>
        </table>
        <table class="table_topic">
            <tr class="tr_head border_bottom">
                <th class="th_title" align="left" colspan="2">
                    <div class="title_box">全部主题</div>
                </th>
                <th align="center">作者</th>
                <th align="center">回复 / 查看</th>
                <th align="center">最后发表</th>
            </tr>
            <tr class="tr_topic" v-for="(topic, index) in topicList" :key="index">
                <td :class="index==topicList.length-1?'label':'label border_bottom'" align="center">
                    【<span>{{ topic.label }}</span>】
                </td>
                <td :class="index==topicList.length-1?'title':'title border_bottom'">
                    <router-link :to="'/toTopic?id='+topic.id">{{ topic.title }}</router-link>
                </td>
                <td :class="index==topicList.length-1?'author':'author border_bottom'">
                    <h3>{{ topic.username }}</h3>
                    <p>{{ topic.submitTime | dateFormat }}</p>
                </td>
                <td :class="index==topicList.length-1?'reply_view':'reply_view border_bottom'">
                    <h3>{{ topic.replyCount }}</h3>
                    <p>{{ topic.viewCount }}</p>
                </td>
                <td :class="index==topicList.length-1?'latestReply':'latestReply border_bottom'">
                    <h3>{{ topic.lastReply }}</h3>
                    <p>{{ topic.lastSubmit | dateFormat }}</p>
                </td>
            </tr>
        </table>
        <div class="paging_box">
            <Page v-if="paging.total>0" :current="paging.currentPage" :page-size="paging.pageSize"
                  :total="paging.total" show-elevator @on-change="changePage"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                noticeList: [],
                topicList: [],
                paging: {
                    currentPage: 1,
                    pageSize: 45,
                    total: 0,
                },
                form: {
                    page: 1,
                    terminal: ''
                }
            }
        },
        created: function () {
            this.init();
        },
        methods: {
            init() {
                this.getNoticeList();
                this.getTopicList();
            },
            getNoticeList() {
                let initParams = {
                    'terminal': navigator.userAgent
                };
                let params = this.qs.stringify(initParams);
                this.axios.post('/noticeList', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.noticeList = resp.data;
                });
            },
            getTopicList() {
                let initParams = {
                    'page': this.paging.currentPage,
                    'terminal': navigator.userAgent
                };
                let params = this.qs.stringify(initParams);
                this.axios.post('/topicList', params).then(response => {
                    let resp = response.data;
                    if (resp.status != 200) {
                        this.$Message.error(resp.msg);
                        return;
                    }
                    this.topicList = resp.data.topicList;
                    this.paging.total = resp.data.topicCount;
                });
            },
            changePage(page) {
                this.paging.currentPage = page;
                this.getTopicList();
            },
        }
    }
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
        padding: 0px 20px 20px 20px;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
    }

    .table_notice {
        width: 100%;
        border-collapse: collapse;
    }

    .notice_label {
        width: 8%;
        color: red;
    }

    .table_topic {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    .tr_head {
        height: 40px;
        font-size: 1.2em;
        font-weight: bold;
    }

    /*.th_title {
        border-left: 6px solid dodgerblue;
    }*/
    .title_box {
        padding-left: 15px;
        border-left: 6px solid dodgerblue;
    }

    .tr_topic {
        height: 60px;
    }

    .label {
        width: 8%;

        span {
            color: #ff78f2;
        }
    }

    .title {
        width: 52%;
        font-size: 1.2em;
        font-weight: bold;

        a {
            color: #515a6e;
        }

        a:hover {
            color: #2d8cf0;
        }
    }

    .author {
        text-align: center;

        h3 {
            color: #7673ff;
        }

        p {
            color: #ffa41e;
        }
    }

    .reply_view {
        text-align: center;
        width: 8%;
        font-size: 1.1em;

        h3 {
            color: cadetblue;
        }

        p {
            color: steelblue;
        }
    }

    .latestReply {
        text-align: center;

        h3 {
            color: #7673ff;
        }

        p {
            color: #ffa41e;
        }
    }

    .border_bottom {
        border-bottom: 1px solid #999;
    }

    .paging_box {
        float: right;
        margin: 20px 0px 0px 0px;
    }
</style>
