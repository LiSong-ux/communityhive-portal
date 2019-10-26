<template>
    <div class="home">
        <div class="section">
            <div class="section_top">
                <span>创作区</span>
            </div>
            <div>
                <div>
                    <span>原创文窟</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
    }

    .section {
        width: 100%;
        height: 180px;
        border: 1px solid skyblue;
    }
    .section_top {
        width: 100%;
        height: 35px;
        padding: 6px 0px 6px 15px;
        background-color: skyblue;
        span {
            font-size: 16px;
            font-weight: bold;
            color: #1c481f;
        }
    }
</style>
