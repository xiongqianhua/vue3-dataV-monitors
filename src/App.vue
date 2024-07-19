<template>
    <div class="app-content">
      <router-view></router-view>
    </div>
</template>
<style>
* {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "AlibabaPuHuiTi-Regular";
}
.app-content {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>