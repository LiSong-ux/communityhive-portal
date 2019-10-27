<template>
    <div class="page_main">
        <div class="page_content">
            <div class="topic">
                <div class="topic_title">在连载区看了篇主角叫何三生的np文，现在怎么都找不到了</div>
                <div class="topic_head">
                    <div class="topic_author">云中沙雕</div>
                    <div class="topic_time">2019-5-12 15:37:42</div>
                    <div class="floor">楼主</div>
                </div>
                <div class="topic_content">
                    首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care，有过性｀经验并不代表就是放｀荡或不检点的人，只要是出于爱意的结合都是应当被祝福的，不论是否能走到最后。
                </div>
            </div>
            <div class="reply" v-for="(reply, index) in replyList" :key="index">
                <div class="reply_head">
                    <div class="reply_author">{{ reply.author }}</div>
                    <div class="reply_time">发表于 {{ reply.submitTime }}</div>
                    <div class="floor">{{ index+1 }}楼</div>
                </div>
                <div class="reply_content">
                    {{ reply.content }}
                </div>
            </div>
        </div>
        <div class="submit_reply">
            <editor label="回复"></editor>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/Editor'
    export default {
        name: "Topic",
        components: {Editor},
        comments: {
            Editor
        },
        data() {
            return {
                replyList: [
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                    {
                        author: '天空之母',
                        submitTime: '2019-10-12 10:58:29',
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .page_main {
        width: 100%;
        border-radius: 10px;
    }


    .page_content {
        width: 100%;
        padding: 30px 0px;
        border-radius: 10px;
        background-color: #fff;
    }


    .topic {
        width: 96%;
        padding: 20px;
        margin: 0px auto;
        border-radius: 10px;
        border: 2px solid #819799;
    }
    .topic_title {
        width: 100%;
        padding: 10px 15px;
        font-size: 1.5em;
        font-weight: bold;
        border-bottom: 3px solid #1c5899;
    }
    .topic_head {
        width: 100%;
        font-size: 1.2em;
        margin-top: 25px;
        border-bottom: 1px solid #999;
    }
    .topic_author {
        color: #27313e;
        display: inline;
        padding: 0px 15px;
        border-right: 2px solid darkgrey;
    }
    .topic_time {
        color: cadetblue;
        display: inline;
        padding: 0px 15px;
    }
    .topic_content {
        width: 100%;
        padding: 0px 15px;
        margin-top: 25px;
        font-size: 1.3em;
        color: black;
    }


    .reply {
        width: 96%;
        padding: 20px;
        margin: 10px auto;
    }
    .reply_head {
        width: 100%;
        font-size: 1.2em;
        border-bottom: 1px solid #999;
    }
    .reply_author {
        color: #27313e;
        display: inline;
        padding: 0px 15px;
        border-right: 2px solid darkgrey;
    }
    .reply_time {
        color: cadetblue;
        display: inline;
        padding: 0px 15px;
    }
    .floor {
        float: right;
        margin-right: 15px;
    }
    .reply_content {
        width: 100%;
        padding: 0px 15px;
        margin-top: 25px;
        font-size: 1.3em;
        color: #515a6e;
    }



    .submit_reply{
        width: 100%;
        padding: 35px;
        margin: 50px auto;
        border-radius: 10px;
        background-color: #fff;
    }
</style>