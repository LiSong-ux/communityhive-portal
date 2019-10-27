<template>
    <div>
        <div class="edit_container" ref="editor"></div>
        <!--<button v-on:click="getContent">查看内容</button>-->
        <Button type="primary" size="large" v-on:click="getContent">{{ label }}</Button>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
        name: 'editor',
        props: {
            label: String
        },
        data() {
            return {
                editorContent: ''
            }
        },
        methods: {
            getContent: function () {
                alert(this.editorContent)
            }
        },
        mounted() {
            var editor = new E(this.$refs.editor)
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
        }
    }
</script>

<style scoped>
    .edit_container {
        text-align: left;
        margin-bottom: 20px;
    }
</style>
