<template>
    <div>
        <div class="edit_container" ref="editor"></div>
        <!--<button v-on:click="getContent">查看内容</button>-->
    </div>
</template>

<script>
    import E from 'wangeditor';
    import xss from 'xss';
    export default {
        name: 'editor',
        props: {
            isClear: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                editor: null,
                editorContent: ''
            }
        },
        watch: {
            isClear(val) {
                // 触发清除文本域内容
                if (val) {
                    this.editor.txt.clear();
                }
            },
        },
        methods: {
            getContent: function () {
                this.$store.commit('setContent', this.editorContent);
            }
        },
        mounted() {
            this.editor = new E(this.$refs.editor)
            this.editor.customConfig.onchange = (html) => {
                //执行xss过滤
                this.editorContent = xss(html);
            };
            this.editor.create();
        }
    }
</script>

<style scoped>
    .edit_container {
        text-align: left;
        margin-bottom: 20px;
    }
</style>
