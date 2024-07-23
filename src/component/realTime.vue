<!--
 * @Author: qianhua.xiong
-->
<template>
    <div class="clock">
      {{ currentTime }}
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  // 获取当前时间并格式化
  const getCurrentTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  const currentTime = ref(getCurrentTime());
  
  const updateTime = () => {
    currentTime.value = getCurrentTime();
  };
  
  let timer;
  //每天凌晨一点强制刷新页面
  const checkRefreshTime = () => {
    
    const now = new Date();
    const nextRefresh = new Date();

    nextRefresh.setDate(now.getDate());
    nextRefresh.setHours(1, 0, 0, 0);

    if (now.getHours() >= 1) {
        nextRefresh.setDate(now.getDate() + 1);
    }

    const timeUntilNextRefresh = nextRefresh.getTime() - now.getTime();

    setTimeout(() => {
        location.reload();
    }, timeUntilNextRefresh);

    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 1 && now.getMinutes() === 0) {
        location.reload();
        }
    }, 60 * 1000); // 每分钟检查一次
  };
  onMounted(() => {
    // timer = setInterval(updateTime, 1000);
    // checkRefreshTime();
  });
  
  onUnmounted(() => {
    // clearInterval(timer);
  });
  </script>
  
  <style scoped>
  .clock {
    display: inline-block;
    width: 50vw;
    font-size: 2em;
    font-family: Arial, sans-serif;
    color: #e1e9f1;
    text-align: right;
    margin: 20px;
  }
  </style>
  