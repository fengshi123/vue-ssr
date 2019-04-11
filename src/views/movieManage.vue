<template>
<div class="admin-usermg"
     v-loading="loading"
     element-loading-text="拼命加载中"
     element-loading-spinner="el-icon-loading">
    <div class="admin-usermg__top">电影数据管理</div>
    <div class="admin-usermg__button">
        <el-button type="primary" size="mini" @click="handleClick">导入电影数据集</el-button>
        <el-button type="primary" size="mini" @click="handleClick">新建电影</el-button>
        <el-button type="primary" size="mini" @click="handleClick">删除电影</el-button>
    </div>
    <el-table :data="movieList" empty-text="没有电影数据" >
        <el-table-column type="selection" min-width="5"></el-table-column>
        <el-table-column label="ID" min-width="20" prop="id" align="center"></el-table-column>
        <el-table-column label="电影名称" min-width="20" prop="name" align="center"></el-table-column>
        <el-table-column label="上映日期" min-width="20" prop="date" align="center"></el-table-column>
        <el-table-column label="电影类别" min-width="20" prop="type" align="center"></el-table-column>
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
            return store.dispatch('getMovielist').then(function () {

            })
        },
        data() {
            return {
                showImport: false,
                loading: false,
            };
        },
        computed: {
            ...mapGetters([
                'movieList',
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
    };
</script>
