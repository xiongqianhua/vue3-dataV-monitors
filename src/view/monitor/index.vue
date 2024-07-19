<template>
  <div class="home-page">
    <Menu/>
    <div id="barEcharts" ref="barEcharts"></div>
    <div class="box"></div>
  </div>
</template>
<script setup>
import {ref,reactive, watch,onMounted} from 'vue';
import { useRouter } from 'vue-router';
import Menu from '@/view/menu/index';
import * as echarts from 'echarts';
import { barEchartsOptions } from '@/utils/echartsOptions';
let barEcharts = ref();
onMounted(()=>{
  getAllEcharts()
});
const getAllEcharts = ()=>{
  const myChart = echarts.init(document.getElementById("barEcharts"));
  window.addEventListener("resize",()=>{
      myChart.resize();
  },false);
  const option = barEchartsOptions();
  myChart.setOption(option);
}
</script>
<style lang="scss" scoped>
#barEcharts{
  width: 50vw;
  height: 50vw;
}
.box{
    width: vw(300);
    height: vh(100);
    font-size: vh(16);
    background-color: black;
    margin-left: vw(10);
    margin-top: vh(10);
    border: vh(2) solid red;
    background-color: aqua;
}
</style>