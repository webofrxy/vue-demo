<template>
  <div class="map">
      <div class="map-content" id="allmap">

      </div>
      <el-button @click="openMap">打开地图</el-button>
  </div>
</template>

<script>

export default {
  name:"map",
  data(){
      return{

      }
  },
  methods:{
     openMap(){
         // 百度地图API功能
        //GPS坐标
        var x = 116.32715863448607;
        var y = 39.990912172420714;
        var ggPoint = new BMap.Point(x,y);

        //地图初始化
        var map = new BMap.Map("allmap");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
        window.setTimeout(function(){  
            map.panTo(new BMap.Point(116.409, 39.918));    
        }, 2000);
        var opts1 = {offset: new BMap.Size(150, 5)} 
        var opts2 = {type: BMAP_NAVIGATION_CONTROL_SMALL} 
        map.addControl(new BMap.NavigationControl(opts2));    
        map.addControl(new BMap.ScaleControl(opts1));    
        map.addControl(new BMap.OverviewMapControl());    
        map.addControl(new BMap.MapTypeControl());    
        map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    }
  }
}

</script>

<style scoped>
.map-content{
  width: 300px;
  height: 300px;
}
</style>
