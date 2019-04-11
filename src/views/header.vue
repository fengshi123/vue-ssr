<template>
    <div class="admin-head__top">
        <div class="admin-head__setting">
            <a>
                <img class="admin-head__img" src="../img/logout.png">
                <span>退出</span>
            </a>
        </div>
        <div class="admin-head__password">
            <a>
                <img class="admin-head__img" src="../img/key.png">
                <span>修改密码</span>
            </a>
        </div>
        <div class="admin-head__wel">
            <span>欢迎您，系统管理员！</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '../assets/head.scss';
</style>
<script>
    export default {
        name: "header1",
    };
</script>
