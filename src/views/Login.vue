<template>
    <div class="login">
        <div class="form_container">
            <!--<Form class="form" :model="form" label-position="right" :label-width="100">
                <FormItem label="用户名">
                    <Input v-model="form.username"/>
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="form.password"/>
                </FormItem>
            </Form>-->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              form: {
                  username: '',
                  password: '',
              }
          }
        },
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 800px;
        padding: 10px;
        /*background-color: #7ab482;*/
        border: 2px solid #999;
    }

</style>