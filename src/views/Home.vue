<template>
    <div class="home">
        <table class="table">
            <tr class="tr_head border_bottom">
                <th class="th_title" align="left">
                    <div class="title_box">全部主题</div>
                </th>
                <th align="center">作者</th>
                <th align="center">回复 / 查看</th>
                <th align="center">最后发表</th>
            </tr>
            <tr class="tr_topic" v-for="(topic, index) in topics" :key="index">
                <td :class="index==topics.length-1?'label':'label border_bottom'">
                    【<span>生活吐槽</span>】
                </td>
                <td :class="index==topics.length-1?'title':'title border_bottom'">
                    <router-link to="/toTopic">{{ topic.title }}</router-link>
                </td>
                <td :class="index==topics.length-1?'author':'author border_bottom'">
                    <h3>{{ topic.author }}</h3>
                    <p>{{ topic.submit }}</p>
                </td>
                <td :class="index==topics.length-1?'reply_view':'reply_view border_bottom'">
                    <h3>{{ topic.replyNum }}</h3>
                    <p>{{ topic.viewNum }}</p>
                </td>
                <td :class="index==topics.length-1?'latestReply':'latestReply border_bottom'">
                    <h3>{{ topic.latestReply }}</h3>
                    <p>{{ topic.latestSubmit }}</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                topics: [
                    {
                        title: '想讨论一下字音的变迁，阿斯顿发送到发阿',
                        author: '一条小团团000',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                    {
                        title: '想讨论一下字音的变迁',
                        author: '一条小团团',
                        submit: '2019-10-22 10:15:56',
                        replyNum: '127',
                        viewNum: '3756',
                        latestReply: '乔碧萝殿下',
                        latestSubmit: '2019-10-26 15:27:14'
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
        padding: 0px 20px;
        border-radius: 10px;
        background-color: #fff;
    }
    .table {
        width: 100%;
        border-collapse:collapse;
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
        border-bottom:1px solid #999;
    }
</style>
