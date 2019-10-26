<template>
    <div class="home">
        <table class="table">
            <tr class="tr_topic" v-for="(topic, index) in topics" :key="index">
                <td :class="index==topics.length-1?'title':'title border_bottom'">
                    {{ topic.title }}
                </td>
                <td :class="index==topics.length-1?'author':'author border_bottom'">
                    <h3>{{ topic.author }}</h3>
                    <p>{{ topic.submit }}</p>
                </td>
                <td :class="index==topics.length-1?'reply_view':'reply_view border_bottom'">
                    {{ topic.replyNum }}/{{ topic.viewNum }}
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
                        title: '想讨论一下字音的变迁',
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
        border: 1px solid lawngreen;
    }
    .table {
        width: 100%;
        border-collapse:collapse;
    }
    .title {
        width: 60%;
        font-size: 1.2em;
        font-weight: bold;
    }
    .tr_topic {
        height: 60px;
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
        font-size: 1.2em;
        color: cadetblue;
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
        border-bottom:1px solid lawngreen;
    }
</style>
