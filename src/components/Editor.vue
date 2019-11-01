<template>
    <div>
        <div class="edit_container" ref="editor"></div>
        <!--<button v-on:click="getContent">查看内容</button>-->
        <Button class="submit_button" type="primary" size="large" v-on:click="getContent">{{ label }}</Button>
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
                this.$store.commit('setContent', this.editorContent);
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
    .submit_button {
        width: 120px;
    }
</style>
