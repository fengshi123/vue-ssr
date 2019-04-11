<template>
    <div class="admin-left">
        <div>
            <img src="../img/logo.png" alt="support.ruijie.com.cn">
            <span class="left__font">后台管理</span>
        </div>
        <menucontainer :items="items"></menucontainer>
    </div>
</template>
<style lang="scss" scoped>
    @import '../assets/leftNavigation.scss';
</style>
<script>
    import menucontainer from './menuContainer.vue';
    export default{
        name: 'leftnav',
        data() {
            return {
                items: [{
                    id: 'btn_account_manage',
                    icon_class: 'btn-account-manage',
                    text: '基础管理',
                    index: '0',
                    hasSubMenu: true,
                    submenus: [{
                        id: 'btn_user_manage',
                        icon_class: 'btn-user-manage',
                        text: '用户管理',
                        router: {
                            name: 'userManage',
                            homepagename: 'userManage'
                        },
                        index: '0-1'
                    }, {
                        id: 'btn_teacher_manage',
                        icon_class: 'btn-teacher-manage',
                        text: '电影管理',
                        router: {
                            name: 'movieManage',
                            homepagename: 'movieManage'
                        },
                        index: '0-2'
                    }]
                },
                    {
                        id: 'btn_homework_manage',
                        icon_class: 'btn-homework-manage',
                        text: '数据分析',
                        router: {
                            name: 'dataAnalysis',
                            homepagename: 'dataAnalysis'
                        },
                        index: '1',
                        hasSubMenu: false
                    },
                ]
            };
        },
        components: {
            menucontainer
        }
    };
</script>
