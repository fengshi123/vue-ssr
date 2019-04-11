<template>
<div class="admin-usermg"
     v-loading="loading"
     element-loading-text="拼命加载中"
     element-loading-spinner="el-icon-loading">
    <div class="admin-usermg__top" >用户数据管理</div>
    <div class="admin-usermg__button">
        <el-button type="primary" size="mini" @click="handleClick">导入用户数据集</el-button>
        <el-button type="primary" size="mini" @click="handleClick">新建用户</el-button>
        <el-button type="primary" size="mini" @click="handleClick">删除用户</el-button>
    </div>
    <el-table :data="userList" empty-text="没有用户数据" style="width: 100%">
        <el-table-column type="selection" min-width="5"></el-table-column>
        <el-table-column label="ID" min-width="20" prop="id" align="center"></el-table-column>
        <el-table-column label="名字" min-width="20" prop="name" align="center"></el-table-column>
        <el-table-column label="年龄" min-width="20" prop="age" align="center"></el-table-column>
        <el-table-column
                label="性别"
                align="center"
                min-width="20">
            <template scope="scope">
                {{scope.row.sex == 'F'? '女' : '男'}}
            </template>
        </el-table-column>
        <el-table-column label="职业" min-width="20" prop="role" align="center"></el-table-column>
        <el-table-column label="操作" min-width="20" align="center">
            <template scope="scope">
                <el-button type="primary" size="mini" @click="handleClick">编辑</el-button>
                <el-button type="primary" size="mini" @click="handleClick">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>
<style lang="scss">
    @import '../assets/manage.scss';
    @import '../assets/el-table.scss';
</style>

<script>
    import {mapGetters} from 'vuex';
    export default{
        // 在路由组件上暴露出一个自定义静态函数 asyncData。
        // 注意，由于此函数会在组件实例化之前调用，所以它无法访问 this
        asyncData( { store }) {
            return store.dispatch('getUserlist').then(function () {})
        },

        data() {
            return {
                showImport: false,
                loading:false,
            };
        },
        computed: {
            ...mapGetters([
                'userList',
            ]),
        },
        methods: {
            handleClick(){
                this.$message({
                    message: '警告哦，该功能还没实现呢！',
                    type: 'warning'
                });
            }
        },
        created() {
            console.log('渲染了userManage组件....');
        }
    };
</script>
