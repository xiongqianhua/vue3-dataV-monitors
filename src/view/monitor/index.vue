<template>
  <div class="monitor-page">
      <div class="masking"></div>
      <MapMark/>
      <div class="monitor-box">
        <div class="box-top">
          <BorderBox1>
            <div class="monitor-title">{{ $t("monitor.title") }}</div>
            <RealTimeClock />
            <DropdownMenu/>
          </BorderBox1>
        </div>
        <div class="box-center">
          <div class="box-center-left">
            <BorderBox1>
              <div class="box-item1"></div>
              <div class="box-item"><div id="barEcharts"></div></div>
              <div class="box-item"></div>
            </BorderBox1>
          </div>
          <div class="box-center-center">
            <BorderBox1>
              <div class="monitor-title">设备总数：9999999个</div>
              <div class="monitor-title">服务中：9999999个</div>
            </BorderBox1>
          </div>
          <div class="box-center-right">
            <BorderBox1>
              <div class="box-item"><div id="barStackEcharts"></div></div>
              <div class="box-item"><div id="ereaEcharts"></div></div>
              <div class="box-item"></div>
            </BorderBox1>
          </div>
        </div>
        <div class="box-bottom">
          <BorderBox1 v-for="item in [1,2,3,4,5]"></BorderBox1>
        </div>
    </div>
    <!-- <div class="box"></div> -->
  </div>
</template>
<script setup>
import {ref,reactive, watch,onMounted} from 'vue';
import { useRouter } from 'vue-router';
import DropdownMenu from '@/component/menu';
import RealTimeClock from '@/component/realTime.vue';
import { BorderBox1 } from '@dataview/datav-vue3/es/components/border-box-1/index';
import * as echarts from 'echarts';
import { barEchartsOptions ,barStackEchartsOptions,ereaEchartsOptions} from '@/utils/echartsOptions';
import MapMark from '@/component/mapMark';
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

  const myChart1 = echarts.init(document.getElementById("barStackEcharts"));
  window.addEventListener("resize",()=>{
    myChart1.resize();
  },false);
  const option1 = barStackEchartsOptions();
  myChart1.setOption(option1);

  const myChart2 = echarts.init(document.getElementById("ereaEcharts"));
  window.addEventListener("resize",()=>{
    myChart2.resize();
  },false);
  const option2 = ereaEchartsOptions();
  myChart2.setOption(option2);
}
</script>
<style lang="scss" scoped>
.monitor-page{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .masking{
    width: 100vw;
    height: 100vh;
    position: relative;
    left: 0;
    top:0;
    z-index: 2;
    overflow: hidden; 
    //给四角加个阴影
    box-shadow: 
        -10vw -10vw 20vw 10vw rgba(0, 0, 0, 0.1), /* 左上 */
        10vw -10vw 20vw 10vw rgba(0, 0, 0, 0.1),  /* 右上 */
        -10vw 10vw 20vw 10vw rgba(0, 0, 0, 0.1),  /* 左下 */
        10vw 10vw 20vw 10vw rgba(0, 0, 0, 0.1);   /* 右下 */
    border-radius: 20vw;
  } 
  .mapMark{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top:0;
    z-index: 1;
  }
  .monitor-box{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top:0;
    z-index: 10;
    .box-top{
      width: 100vw;
      height: 8vw;
      .monitor-title{
        display: inline-block;
        font-size: 2vw;
        color: #fff;
        padding: 1vw;
      }
    }
    .box-center{
      display: flex;
      justify-content: space-between;
      .box-center-left{
        width: 30vw;
        height: 35vw;
        .box-item1{
          width: 28vw;
          height: 10vw;
          margin: 0.5vw;
          background-color: #0d2552;
        }
        .box-item{
          width: 20vw;
          height: 10vw;
          margin: 0.5vw;
          background-color: #0d2552;
          #barEcharts{
            width: 10vw;
            height: 10vw;
          }
        }
      }
      .box-center-center{
        flex: 1;
        height: 5vw;
        .monitor-title{
          display: inline-block;
          font-size: 1.5vw;
          color: #fff;
          padding: 1vw;
        }
      }
      .box-center-right{
        width: 20vw;
        height: 35vw;
        .box-item{
          width: 19vw;
          height: 10vw;
          margin: 0.5vw;
          background-color: #0d2552;
          #ereaEcharts{
            width: 20vw;
            height: 10vw;
          }
          #barStackEcharts{
            width: 20vw;
            height: 10vw;
          }
        }
      }
    }
    .box-bottom{
      width: 100vw;
      height: 13vw;
      display: flex;
      justify-content: space-around;
      align-items:last baseline;
    }
    
  }
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