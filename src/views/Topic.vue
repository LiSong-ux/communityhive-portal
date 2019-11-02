<template>
    <div class="page_main">
        <div class="page_content">
            <div class="topic">
                <div class="topic_top">
                    <div class="topic_label">【<span>{{ topic.label }}</span>】</div>
                    <div class="topic_title">{{ topic.title }}</div>
                </div>
                <div class="topic_head">
                    <div class="topic_author">{{ topic.username }}</div>
                    <div class="topic_time">{{ topic.submittime | dateFormat }}</div>
                    <div class="floor">楼主</div>
                </div>
                <div class="topic_content" v-html="topic.content"></div>
                <div class="reply_operate">
                    <a @click="showModal">回复</a>
                </div>
            </div>
            <div class="reply" v-for="(reply, index) in replyList" :key="index">
                <div class="reply_head">
                    <div class="reply_author">{{ reply.username }}</div>
                    <div class="reply_time">发表于 {{ reply.submittime | dateFormat }}</div>
                    <div class="floor">{{ reply.floor }}楼</div>
                </div>
                <div class="reply_content">
                    <div class="reply_quote" v-show="reply.quote!=0">
                        <div class="quote_icon_e">
                            <div class="reply_quote_head">
                                <span class="reply_quote_info">画航听雨眠 发表于 2019-10-22 21:32:19</span>
                                <span class="reply_quote_floor">5楼</span>
                            </div>
                            <span>
                                首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。
                                当然我也觉得攻受是不是第一次完全不需要care
                            </span>
                        </div>
                    </div>
                    <span v-html="reply.content"></span>
                </div>
                <div class="reply_operate">
                    <a @click="showModal(index+1)">回复</a>
                </div>
            </div>
        </div>
        <div class="submit_reply">
            <editor ref="editor" :isClear="isClear"></editor>
            <Button class="submit_button" type="primary" size="large" @click="submitReply(0)">回复</Button>
        </div>
        <Modal class="modal_reply" v-model="modal" footer-hide width="1000">
            <div class="reply_quote">
                <div class="quote_icon_e">
                    <div class="reply_quote_head">
                        <span class="reply_quote_info">画航听雨眠 发表于 2019-10-22 21:32:19</span>
                        <span class="reply_quote_floor">5楼</span>
                    </div>
                    <div class="modal_reply_overflow">
                        首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care.
                        首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care.
                        首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care.
                        首先非常理解那些对角色抱有“一辈子只和这一个人在一起” 想法的读者姑娘们。当然我也觉得攻受是不是第一次完全不需要care.
                    </div>
                </div>
            </div>
            <editor ref="editor_qu" :isClear="isClear"></editor>
            <Button class="submit_button" type="primary" size="large" @click="submitReply(1)">回复</Button>
        </Modal>
    </div>
</template>

<script>
    import Editor from '../components/Editor'

    export default {
        name: "Topic",
        components: {Editor},
        data() {
            return {
                topic: {},
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
                        content: '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了.' +
                            '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了' +
                            '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了' +
                            '原名叫我要当小三，后来改名了我也记不清了，跟《我契约联姻的对象有个心上人》是一个作者，你可以搜一下，我遇到点开几次发现有一段时间没更了就懒得去找了'
                    },
                ],
                newReply: {},
                quoteFloor: null,
                modal: false,
                isClear: false,
            }
        },
        created: function(){
            this.init();
        },
        methods: {
            init(){
              this.getTopic();
            },
            getTopic(){
                this.axios.get('/topic', {params:{id:this.$route.query.id}}).then(response => {
                   let resp = response.data;
                   if (resp.status!=200) {
                       this.$Message.error(resp.msg);
                   }
                   this.topic = resp.data.topic;
                   this.replyList = resp.data.replyList;
                   this.isClear = false;
                });
            },
            submitReply(num) {
                if (num==0){
                    this.$refs.editor.getContent();
                    this.quoteFloor = 0;
                } else {
                    this.$refs.editor_qu.getContent();
                }
                this.newReply.topicId = this.$route.query.id;
                this.newReply.quote = this.quoteFloor;
                this.newReply.content = this.$store.getters.getContent;
                let params = this.qs.stringify(this.newReply);
                this.axios.post('/submitReply', params).then(response => {
                    let resp = response.data;
                    if (resp.status!=200){
                        this.instance('error', resp.msg);
                    }
                    this.isClear = true;
                    this.modal = false;
                    this.getTopic();
                })
            },
            showModal(floor) {
                this.modal = true;
                this.quoteFloor = floor;
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
        padding: 20px 20px 0px 20px;
        margin: 0px auto;
        border-radius: 10px;
        border: 2px solid #819799;
    }

    .topic_top {
        width: 100%;
        border-bottom: 3px solid #1c5899;
    }

    .topic_label {
        display: inline;

        span {
            color: #ff78f2;
        }
    }

    .topic_title {
        display: inline;
        padding: 10px 5px;
        font-size: 1.5em;
        font-weight: bold;
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


    .reply_quote {
        width: 100%;
        margin: 10px 0px 25px 0px;
        padding: 10px 10px 10px 65px;
        background: #f1f2f3 url("../assets/icons/icon_quote_s.gif") no-repeat 20px 6px;
    }

    .quote_icon_e {
        padding: 0px 65px 10px 0px;
        background: url("../assets/icons/icon_quote_e.gif") no-repeat 98% 100%;
    }

    .reply_quote_info {
        font-size: 1em;
        color: #808695;
    }

    .reply_quote_floor {
        font-size: 1.2em;
        font-weight: bold;
        color: darkgrey;
        margin-left: 15px;
    }

    .reply_operate {
        width: 100%;
        height: 50px;
        opacity: 0.2;
        line-height: 50px;
        padding: 0px 15px;
        margin-top: 15px;
        background: url("../assets/icons/lattice.png") left top repeat-x;

        a {
            color: #333333;
            padding: 5px 10px 5px 25px;
            background: url("../assets/icons/fastreply.gif") no-repeat 0 50%;
        }
    }

    .reply_operate:hover {
        width: 100%;
        height: 50px;
        opacity: 1;
        line-height: 50px;
        padding: 0px 15px;
        margin-top: 15px;
        background: url("../assets/icons/lattice.png") left top repeat-x;

        a {
            color: #333333;
            padding: 5px 10px 5px 25px;
            background: url("../assets/icons/fastreply.gif") no-repeat 0 50%;
        }
    }


    .submit_reply {
        width: 100%;
        padding: 35px;
        margin: 50px auto;
        border-radius: 10px;
        background-color: #fff;
    }


    .modal_reply /deep/ .ivu-modal-body {
        padding: 45px 30px 30px 30px !important;
    }

    .modal_reply /deep/ .ivu-modal-wrap {
        z-index: 11010 !important;
    }
    .modal_reply_overflow {
        width: 800px;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .submit_button {
        width: 120px;
    }
</style>
