<script setup>

</script>

<template>
  <div class="header">
    <Header />
  </div>
  <main class="body">
    <router-view></router-view>
  </main>
  
</template>

<style scoped lang="less">
.header {
  width: 100%;
  background-color: #fff;
}
.body {
  width: 1200px;
  margin: 0 auto;
}
</style>
