<template>
<div class="admin-usermg">
    <div class="admin-usermg__top">电影类别统计</div>
    <div id="dataBar" class="analysis__layout">
      <img :src="item" v-for="item of analysisList"/>
    </div>
</div>
</template>
<style lang="scss">
    @import '../assets/dataAnalysis.scss';
</style>
<script>
    import {mapGetters} from 'vuex';
    export default{
        asyncData( { store }) {
            return store.dispatch('getAnalysis').then(function () {

            })
        },
        computed: {
            ...mapGetters([
                'analysisList',
            ]),
        },
    };
</script>
