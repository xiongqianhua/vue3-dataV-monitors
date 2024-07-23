<template>
      <div class="mapMark" id="mapMark"></div>
</template>
<script setup>
import {ref,reactive, watch,onMounted} from 'vue';
const initMap = () => {
      let Bmap = window.BMapGL
      var b = new Bmap.Map("mapMark")
      var beijingPoint = new Bmap.Point(116.404, 39.915); 
      b.centerAndZoom(beijingPoint,6.6)   
      b.setMapStyleV2({     
        styleId: '1e3322e7747af9a80b1635494ba7287b'
      });
      b.enableScrollWheelZoom(true)
      // b.setHeading(5);   //设置地图旋转角度
      b.setTilt(100);       //设置地图的倾斜角度
      b.setCenter('成都'); 
      const pic = require('../images/mark.png');
      var icon = new Bmap.Icon(pic, new Bmap.Size(52, 52),{
        anchor: new Bmap.Size(30, 50), 
      });
      var markers = new Bmap.Marker(beijingPoint);
      markers.setIcon(icon);
      b.addOverlay(markers);
      const shanghaiPoint = new Bmap.Point(121.472644, 31.231706);  
      var markers1 = new Bmap.Marker(shanghaiPoint);
      markers1.setIcon(icon);
      b.addOverlay(markers1);
      const chongqingPoint = new Bmap.Point(104.065735, 30.659462);  
      var markers2 = new Bmap.Marker(chongqingPoint);
      markers2.setIcon(icon);
      b.addOverlay(markers2);
}
onMounted(()=>{
  initMap();
});
</script>
<style lang="scss" scoped>
  .mapMark{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top:0;
    z-index: 1;
    background-color: #0d2552;
  }
</style>