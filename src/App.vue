<template>
  <div id="app" style="height:100%;background:#ebf0f5;">
    <adminHeader></adminHeader>
    <leftNav></leftNav>
    <adminContent></adminContent>
  </div>
</template>

<style lang="scss" scoped>
  @import './assets/index.scss';
</style>
<script>
  import adminHeader from './views/header.vue';
  import leftNav from './views/leftNavigation.vue';
  import adminContent from './views/adminContent.vue';
  export default{
    name: 'app',
    components: {
      adminHeader,
      leftNav,
      adminContent
    },
  }
</script>
